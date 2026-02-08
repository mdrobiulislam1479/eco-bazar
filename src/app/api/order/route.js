import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { dbConnect } from "@/lib/dbConnect";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email;
  if (!userId)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  const { billing } = await req.json();

  const cartCol = await dbConnect("cart");
  const orderCol = await dbConnect("orders");

  const cart = await cartCol.findOne({ userId });
  if (!cart || !cart.items?.length) {
    return Response.json({ message: "Cart is empty" }, { status: 400 });
  }

  const items = cart.items;

  const orderDoc = {
    userId,
    billing,
    items,
    subtotal: billing.subtotal || 0,
    shipping: 0,
    total: billing.subtotal || 0,
    paymentMethod: "COD",
    paymentStatus: "pending",
    orderStatus: "pending",
    createdAt: new Date(),
  };

  const res = await orderCol.insertOne(orderDoc);

  await cartCol.deleteOne({ userId });

  return Response.json({ ok: true, orderId: String(res.insertedId) });
}

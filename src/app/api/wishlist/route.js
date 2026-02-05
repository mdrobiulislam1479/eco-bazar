import { getServerSession } from "next-auth";
import { dbConnect } from "@/lib/dbConnect";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email;
  if (!userId)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  const items = await dbConnect("wishlist")
    .find({ userId })
    .sort({ createdAt: -1 })
    .toArray();

  return Response.json({ items });
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email;
  if (!userId)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const productId = Number(body?.productId);

  if (!Number.isFinite(productId)) {
    return Response.json(
      { message: "productId must be a number" },
      { status: 400 },
    );
  }

  // duplicate prevent
  const exists = await dbConnect("wishlist").findOne({ userId, productId });
  if (exists) return Response.json({ ok: true, duplicated: true });

  await dbConnect("wishlist").insertOne({
    userId,
    productId,
    createdAt: new Date(),
  });

  return Response.json({ ok: true });
}

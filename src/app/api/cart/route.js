import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email;
  if (!userId)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  const cart = await dbConnect("cart").findOne({ userId });
  return Response.json({ cart: cart || { userId, items: [] } });
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email;
  if (!userId)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const productId = Number(body?.productId);
  const qty = Number(body?.qty ?? 1);

  if (!Number.isFinite(productId) || !Number.isFinite(qty) || qty < 1) {
    return Response.json(
      { message: "productId number & qty >= 1 required" },
      { status: 400 },
    );
  }

  const cart = await dbConnect("cart").findOne({ userId });

  if (!cart) {
    await dbConnect("cart").insertOne({
      userId,
      items: [{ productId, qty }],
      updatedAt: new Date(),
    });
    return Response.json({ ok: true });
  }

  const items = cart.items || [];
  const idx = items.findIndex((i) => i.productId === productId);

  if (idx === -1) items.push({ productId, qty });
  else items[idx].qty += qty;

  await dbConnect("cart").updateOne(
    { userId },
    { $set: { items, updatedAt: new Date() } },
  );

  return Response.json({ ok: true });
}

export async function PATCH(req) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email;
  if (!userId)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const productId = Number(body?.productId);
  const qty = Number(body?.qty);

  if (!Number.isFinite(productId) || !Number.isFinite(qty) || qty < 1) {
    return Response.json(
      { message: "productId number & qty >= 1 required" },
      { status: 400 },
    );
  }

  const cart = await dbConnect("cart").findOne({ userId });
  if (!cart) return Response.json({ ok: true });

  const items = (cart.items || []).map((i) =>
    i.productId === productId ? { ...i, qty } : i,
  );

  await dbConnect("cart").updateOne(
    { userId },
    { $set: { items, updatedAt: new Date() } },
  );

  return Response.json({ ok: true });
}

export async function DELETE(req) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email;
  if (!userId)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const productId = Number(searchParams.get("productId"));

  if (!Number.isFinite(productId)) {
    return Response.json(
      { message: "productId must be a number" },
      { status: 400 },
    );
  }

  const cart = await dbConnect("cart").findOne({ userId });
  if (!cart) return Response.json({ ok: true });

  const items = (cart.items || []).filter((i) => i.productId !== productId);

  await dbConnect("cart").updateOne(
    { userId },
    { $set: { items, updatedAt: new Date() } },
  );

  return Response.json({ ok: true });
}

import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { Snap } from "midtrans-client";
import { z } from "zod";

const snap = new Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

const itemSchema = z.object({
  id: z.string().min(1, "Item ID is required"),
  name: z.string().min(1, "Item name is required"),
  price: z.number().min(0, "Item price must be at least 0"),
  quantity: z.number().min(1, "Item quantity must be at least 1"),
  category: z.string().optional(),
});

const paymentSchema = z.object({
  invitationId: z.string().min(1, "Invitation ID is required"),
  items: z.array(itemSchema).min(1, "At least one item is required"),
  discount: z.number().int().min(0).default(0),
  subTotal: z.number().int().min(0, "Subtotal must be at least 0"),
  status: z.string().optional().default("pending"),
});

export const POST = auth(async function POST(req) {
  if (req.auth) {
    const hostname = process.env.NEXT_PUBLIC_ROOT_DOMAIN
      ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      : "http://localhost:3000";
    try {
      const body = await req.json();

      const validator = paymentSchema.safeParse(body);
      if (!validator.success) {
        return NextResponse.json(
          {
            message: "Unprocessable Entity",
            errors: validator.error.errors,
          },
          { status: 422 }
        );
      }

      const { invitationId, items, discount, subTotal, status } =
        validator.data;

      const invitation = await prisma.Invitation.findUnique({
        where: { id: invitationId },
      });

      if (!invitation) {
        return NextResponse.json(
          { message: "Unprocessable Entity", errors: "Data Not Found" },
          { status: 422 }
        );
      }

      const data = await prisma.Payment.create({
        data: {
          invitation: { connect: { id: invitation.id } },
          items,
          discount,
          subTotal,
          status,
        },
        include: {
          invitation: true,
        },
      });

      const parameter = {
        transaction_details: {
          order_id: data.id,
          gross_amount: subTotal,
        },
        item_details: { createMany: { data: items } },
        callbacks: {
          finish: `${hostname}/api/payment/callback`,
        },
      };

      const token = await snap.createTransactionToken(parameter);

      return NextResponse.json({ message: "Created", token }, { status: 201 });
    } catch (err) {
      return NextResponse.json(
        { message: "Internal Server Error", err },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
});

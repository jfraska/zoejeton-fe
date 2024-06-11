import { auth } from "@/libs/auth";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { z } from "zod";

export const GET = auth(async function GET(req) {
  if (req.auth) {
    try {
      const url = new URL(req.url);
      const invitation = parseInt(url.searchParams.get("invitation"));
      const offset = parseInt(url.searchParams.get("offset")) || 0;
      const limit = parseInt(url.searchParams.get("limit")) || 10;

      const data = await prisma.Visitor.findMany({
        where: {
          invitationId: invitation,
        },
        skip: offset,
        take: limit,
      });

      const totalData = await prisma.Visitor.count();
      const totalPage = Math.ceil(totalData / limit);

      const meta = { totalData, totalPage };

      return NextResponse.json({ message: "OK", data, meta }, { status: 200 });
    } catch (err) {
      return NextResponse.json(
        { message: "StatusInternalServerError", err },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
});

export const POST = auth(async function POST(req) {
  if (req.auth) {
    try {
      const VisitorSchema = z.array(
        z.object({
          invitationId: z.string().min(1, "Invitation ID is required"),
          name: z.string().min(1).max(255),
          address: z.string().max(255).nullable().optional(),
          message: z.string().max(255).nullable().optional(),
          whatsapp: z.string().max(20).nullable().optional(),
          instagram: z.string().max(30).nullable().optional(),
          attended: z.object().nullable().optional(),
          image: z.string().max(255).nullable().optional(),
        })
      );

      const body = await req.json();

      const validator = VisitorSchema.safeParse(body);
      if (!validator.success) {
        return NextResponse.json(
          {
            message: "Unprocessable Entity",
            errors: validator.error.errors,
          },
          { status: 422 }
        );
      }

      const invitation = await prisma.Invitation.findUnique({
        where: { id: validator.data[0].invitationId },
      });

      if (!invitation) {
        return NextResponse.json(
          { message: "Unprocessable Entity", errors: "Data Not Found" },
          { status: 422 }
        );
      }

      const data = await prisma.$transaction(
        validator.data.map((visitor) =>
          prisma.Visitor.create({
            data: {
              name: visitor.name,
              address: visitor.address,
              message: visitor.message,
              whatsapp: visitor.whatsapp,
              instagram: visitor.instagram,
              attended: visitor.attended,
              image: visitor.image,
              invitation: { connect: { id: invitation.id } },
            },
            include: {
              invitation: true,
            },
          })
        )
      );

      return NextResponse.json({ message: "Created", data }, { status: 201 });
    } catch (err) {
      return NextResponse.json(
        { message: "Internal Server Error", err },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
});

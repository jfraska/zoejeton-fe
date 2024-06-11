import { auth } from "@/libs/auth";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { z } from "zod";

const invitationSchema = z.object({
  templateId: z.string().optional(),
  fitur: z.array().optional(),
  addon: z.array().optional(),
});

export const GET = auth(async function GET(req) {
  if (req.auth) {
    try {
      const url = new URL(req.url);
      const offset = parseInt(url.searchParams.get("offset")) || 0;
      const limit = parseInt(url.searchParams.get("limit")) || 2;

      const data = await prisma.Invitation.findMany({
        where: {
          userId: req.auth.user.id,
        },
        skip: offset,
        take: limit,
      });

      const totalData = await prisma.Invitation.count();
      const totalPage = Math.ceil(totalData / limit);

      const meta = { totalData, totalPage };

      return NextResponse.json({ message: "OK", data, meta }, { status: 200 });
    } catch (err) {
      return NextResponse.json(
        { message: "Internal Server Error", err },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
});

export const POST = auth(async function POST(req) {
  if (req.auth) {
    try {
      const body = await req.json();

      const validator = invitationSchema.safeParse(body);
      if (!validator.success) {
        return NextResponse.json(
          {
            message: "Unprocessable Entity",
            errors: validator.error.errors,
          },
          { status: 422 }
        );
      }

      const { templateId, fitur, addon } = validator.data;

      const template = await prisma.Template.findUnique({
        where: { id: templateId },
      });

      if (!template) {
        return NextResponse.json(
          { message: "Unprocessable Entity", errors: "Data Not Found" },
          { status: 422 }
        );
      }

      const data = await prisma.Invitation.create({
        data: {
          user: { connect: { id: req.auth.user.id } },
          template: { connect: { id: template.id } },
          fitur,
          addon,
        },
        include: {
          user: true,
          template: true,
        },
      });

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

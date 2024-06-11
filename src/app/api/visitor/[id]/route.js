import { auth } from "@/libs/auth";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { z } from "zod";

export const GET = auth(async function GET(req, { params }) {
  if (req.auth) {
    try {
      const { id } = params;
      const data = await prisma.Visitor.findUnique({
        where: {
          id,
        },
      });

      if (!data) {
        return NextResponse.json(
          {
            message: "Data Not Found",
            data,
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json({ message: "OK", data }, { status: 200 });
    } catch (err) {
      return NextResponse.json(
        { message: "Internal Server Error", err },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
});

export const PUT = auth(async function PUT(req, { params }) {
  if (req.auth) {
    try {
      const VisitorSchema = z.object({
        invitationId: z.string().optional(),
        name: z.string().max(255).optional(),
        address: z.string().max(255).nullable().optional(),
        message: z.string().max(255).nullable().optional(),
        whatsapp: z.string().max(20).nullable().optional(),
        instagram: z.string().max(30).nullable().optional(),
        attended: z.object().nullable().optional(),
        image: z.string().max(255).nullable().optional(),
      });

      const { id } = params;
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

      const {
        invitationId,
        name,
        address,
        message,
        whatsapp,
        instagram,
        attended,
        image,
      } = validator.data;

      const visitor = await prisma.Visitor.findUnique({
        where: { id },
      });

      if (!visitor) {
        return NextResponse.json(
          {
            message: "Unprocessable Entity",
            errors: "Data Not Found",
          },
          { status: 422 }
        );
      }

      const data = await prisma.Visitor.update({
        where: { id: visitor.id },
        data: {
          name,
          address,
          message,
          whatsapp,
          instagram,
          // attended,
          image,
          invitation: { connect: { id: invitationId } },
        },
        include: {
          invitation: true,
        },
      });

      return NextResponse.json({ message: "Created", data }, { status: 201 });
    } catch (err) {
      return NextResponse.json(
        { message: "Internal Server Error", error: err.message },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
});

import { auth } from "@/libs/auth";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { z } from "zod";

export const GET = auth(async function GET(req, { params }) {
  if (req.auth) {
    try {
      const { id } = params;
      const data = await prisma.Invitation.findUnique({
        where: {
          id,
        },
        include: {
          template: true,
          payment: true,
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
      const invitationSchema = z.object({
        title: z.string().min(2).max(50),
        template: z.object().optional(),
      });

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

      const { id } = params;
      const invitation = await prisma.Invitation.findUnique({
        where: {
          id,
        },
      });

      if (!invitation) {
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

      const { title, template } = validator.data;

      const data = await prisma.Invitation.update({
        where: { id },
        data: {
          title,
          user: { connect: { id: req.auth.user.id } },
          template: {
            create: {
              template,
            },
          },
        },
        include: {
          user: true,
          template: true,
        },
      });

      return NextResponse.json({ message: "Updated", data }, { status: 201 });
    } catch (err) {
      return NextResponse.json(
        { message: "Internal Server Error", error: err.message },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
});

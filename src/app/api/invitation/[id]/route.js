import { auth } from "@/libs/auth";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

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

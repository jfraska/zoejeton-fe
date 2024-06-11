import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const data = await prisma.Template.findUnique({
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

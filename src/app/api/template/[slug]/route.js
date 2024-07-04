import { auth } from "@/libs/auth";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { z } from "zod";

export async function GET(req, { params }) {
  try {
    const { slug } = params;
    const data = await prisma.Template.findUnique({
      where: {
        slug,
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

export const PUT = auth(async function PUT(req, { params }) {
  if (req.auth) {
    try {
      const contentSchema = z.object({
        key: z.string(),
        value: z.record(z.any()),
      });

      const colorSchema = z.object({
        key: z.string(),
        value: z.object({
          background: z.string(),
          foreground: z.string(),
          primary: z.string(),
          "primary-foreground": z.string(),
          secondary: z.string(),
          "secondary-foreground": z.string(),
          accent: z.string(),
          "accent-foreground": z.string(),
        }),
      });

      const templateSchema = z.object({
        title: z.string(),
        slug: z.string(),
        thumbnail: z.string(),
        discount: z.number(),
        price: z.number(),
        category: z.string(),
        content: z.array(contentSchema),
        color: z.array(colorSchema),
        music: z.string(),
      });

      const body = await req.json();

      const validator = templateSchema.safeParse(body);
      if (!validator.success) {
        return NextResponse.json(
          {
            message: "Unprocessable Entity",
            errors: validator.error.errors,
          },
          { status: 422 }
        );
      }

      const { slug: id } = params;
      const template = await prisma.Template.findUnique({
        where: {
          slug: id,
        },
      });

      if (!template) {
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

      const {
        title,
        slug,
        thumbnail,
        discount,
        price,
        category,
        content,
        color,
        music,
      } = validator.data;

      const data = await prisma.Template.update({
        where: { slug: id },
        data: {
          title,
          slug,
          thumbnail,
          discount,
          price,
          category,
          content,
          color,
          music,
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

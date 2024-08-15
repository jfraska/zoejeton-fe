import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
const { z } = require("zod");

export async function GET(req, res) {
  try {
    const url = new URL(req.url);
    const category = url.searchParams.get("category") || "All";
    const offset = parseInt(url.searchParams.get("offset")) || 0;
    const limit = parseInt(url.searchParams.get("limit")) || 2;

    const filter = category !== "All" ? { category: category } : {};

    const data = await prisma.Template.findMany({
      where: filter,
      skip: offset,
      take: limit,
    });

    const totalData = await prisma.Template.count({ where: filter });
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

export const POST = auth(async function POST(req) {
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

      const data = await prisma.Template.create({
        data: {
          title,
          slug,
          thumbnail,
          discount,
          price,
          category,
          content: { createMany: { data: content } },
          color: { createMany: { data: color } },
          music,
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

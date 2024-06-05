import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

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
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
}

// import { auth } from "@/lib/auth";
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { z } from "zod";

// export const GET = auth(async function GET(req) {
//   if (req.auth) {
//     try {
//       const url = new URL(req.url);
//       const search = url.searchParams.get("search") || "";

//       const offset = parseInt(url.searchParams.get("offset")) || 0;
//       const limit = parseInt(url.searchParams.get("limit")) || 2;

//       const data = await prisma.Invitation.findMany({
//         where: {
//           title: { contains: search },
//           userId: req.auth.user.id,
//         },
//         skip: offset,
//         take: limit,
//       });

//       const totalData = await prisma.Invitation.count();
//       const totalPage = Math.ceil(totalData / limit);

//       const meta = { totalData, totalPage };

//       return NextResponse.json({ message: "OK", data, meta }, { status: 200 });
//     } catch (err) {
//       return NextResponse.json(
//         { message: "Internal Server Error", err },
//         { status: 500 }
//       );
//     }
//   }
//   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
// });

// export const POST = auth(async function POST(req) {
//   if (req.auth) {
//     try {
//       const invitationSchema = z.object({
//         title: z.string().min(2).max(50),
//         subdomain: z.string().min(2).max(50),
//         // template: z.object().optional(),
//       });

//       const body = await req.json();

//       const validator = invitationSchema.safeParse(body);
//       if (!validator.success) {
//         return NextResponse.json(
//           {
//             message: "Unprocessable Entity",
//             errors: validator.error.errors,
//           },
//           { status: 422 }
//         );
//       }

//       const { title, subdomain } = validator.data;

//       let config = {
//         data: {
//           title,
//           subdomain,
//           user: { connect: { id: req.auth.user.id } },
//         },
//         include: {
//           user: true,
//         },
//       };

//       // if (template) {
//       //   config.data.template = {
//       //     create: {
//       //       template,
//       //     },
//       //   };
//       // }

//       const data = await prisma.Invitation.create(config);

//       return NextResponse.json({ message: "Created", data }, { status: 201 });
//     } catch (err) {
//       return NextResponse.json(
//         { message: "Internal Server Error", err },
//         { status: 500 }
//       );
//     }
//   }
//   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
// });

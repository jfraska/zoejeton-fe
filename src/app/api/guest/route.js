// import { auth } from "@/lib/auth";
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { z } from "zod";

// export const GET = auth(async function GET(req) {
//   if (req.auth) {
//     try {
//       const url = new URL(req.url);
//       const name = url.searchParams.get("name");
//       const invitation = url.searchParams.get("invitation");
//       const offset = parseInt(url.searchParams.get("offset")) || 0;
//       const limit = parseInt(url.searchParams.get("limit")) || 10;

//       const filter = name ? { name: { contains: name } } : {};

//       const data = await prisma.Guest.findMany({
//         where: {
//           ...filter,
//           invitationId: invitation,
//         },
//         skip: offset,
//         take: limit,
//       });

//       const totalData = await prisma.Guest.count({
//         where: {
//           ...filter,
//           invitationId: invitation,
//         },
//       });
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
//       const GuestSchema = z.object({
//         invitationId: z.string().min(1, "Invitation ID is required"),
//         name: z.string().min(1).max(255),
//         number: z.string().min(1).max(255),
//         additional: z
//           .object({
//             relation: z.string().optional(),
//             table: z.string().optional(),
//             alamat: z.string().optional(),
//             category: z.string().optional(),
//           })
//           .nullable()
//           .optional(),
//         sosmed: z
//           .object({
//             whatsapp: z.string().optional(),
//             instagram: z.string().optional(),
//           })
//           .nullable()
//           .optional(),
//         attended: z
//           .object({
//             status: z.string().optional(),
//           })
//           .nullable()
//           .optional(),
//       });

//       const body = await req.json();

//       const validator = GuestSchema.safeParse(body);
//       if (!validator.success) {
//         return NextResponse.json(
//           {
//             message: "Unprocessable Entity",
//             errors: validator.error.errors,
//           },
//           { status: 422 }
//         );
//       }

//       // const invitation = await prisma.Invitation.findUnique({
//       //   where: { id: validator.data[0].invitationId },
//       // });

//       // if (!invitation) {
//       //   return NextResponse.json(
//       //     { message: "Unprocessable Entity", errors: "Data Not Found" },
//       //     { status: 422 }
//       //   );
//       // }

//       const data = await prisma.$transaction(
//         validator.data.map((guest) =>
//           prisma.Guest.create({
//             data: {
//               name: guest.name,
//               number: guest.number,
//               additional: guest.additional,
//               sosmed: guest.sosmed,
//               attended: guest.attended,
//               invitation: { connect: { id: guest.invitationId } },
//             },
//             include: {
//               invitation: true,
//             },
//           })
//         )
//       );

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

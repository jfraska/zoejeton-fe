// import { auth } from "@/lib/auth";
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { z } from "zod";

// export const GET = auth(async function GET(req, { params }) {
//   try {
//     const { id } = params;
//     const url = new URL(req.url);
//     const invitation = url.searchParams.get("invitation");

//     const data = await prisma.Guest.findFirst({
//       where: {
//         id,
//         invitationId: invitation,
//       },
//     });

//     if (!data) {
//       return NextResponse.json(
//         {
//           message: "Data Not Found",
//           data,
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     return NextResponse.json({ message: "OK", data }, { status: 200 });
//   } catch (err) {
//     return NextResponse.json(
//       { message: "Internal Server Error", err },
//       { status: 500 }
//     );
//   }
// });

// export const PUT = auth(async function PUT(req, { params }) {
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

//       const { id } = params;
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

//       const { invitationId, name, number, additional, sosmed, attended } =
//         validator.data;

//       const guest = await prisma.Guest.findUnique({
//         where: { id },
//       });

//       if (!guest) {
//         return NextResponse.json(
//           {
//             message: "Unprocessable Entity",
//             errors: "Data Not Found",
//           },
//           { status: 422 }
//         );
//       }

//       const data = await prisma.Guest.update({
//         where: { id },
//         data: {
//           name,
//           number,
//           additional,
//           sosmed,
//           attended,
//           invitation: { connect: { id: invitationId } },
//         },
//       });

//       return NextResponse.json({ message: "Updated", data }, { status: 201 });
//     } catch (err) {
//       return NextResponse.json(
//         { message: "Internal Server Error", error: err.message },
//         { status: 500 }
//       );
//     }
//   }
//   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
// });

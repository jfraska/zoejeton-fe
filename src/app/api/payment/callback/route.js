// import { NextResponse } from "next/server";
// import { Snap } from "midtrans-client";

// const snap = new Snap({
//   isProduction: false,
//   serverKey: process.env.MIDTRANS_SERVER_KEY,
//   clientKey: process.env.MIDTRANS_CLIENT_KEY,
// });

// export async function POST(request) {
//   try {
//     const notification = await snap.transaction.notification(request.body);
//     const orderId = notification.order_id;
//     const transactionStatus = notification.transaction_status;
//     const fraudStatus = notification.fraud_status;

//     if (transactionStatus === "capture") {
//       await UpdateStatus(orderId, fraudStatus);
//     } else {
//       await UpdateStatus(orderId, transactionStatus);
//     }

//     return NextResponse.json(
//       { message: "Created", data: notification },
//       { status: 201 }
//     );
//   } catch (err) {
//     return NextResponse.json(
//       { message: "Internal Server Error", err },
//       { status: 500 }
//     );
//   }
// }

// async function UpdateStatus(id, status) {
//   return await prisma.Payment.update({
//     where: {
//       id,
//     },
//     data: {
//       status,
//     },
//   });
// }

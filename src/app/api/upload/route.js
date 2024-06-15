import multer from "multer";
import { NextResponse } from "next/server";

const storage = multer.memoryStorage();
const upload = multer({ storage });

function middleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export async function POST(req) {
  try {
    await middleware(req, {}, upload.single("image"));

    const file = req.file;

    return NextResponse.json({ message: "Created", file }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error", err },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

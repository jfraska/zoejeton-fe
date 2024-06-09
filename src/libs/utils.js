import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const bcrypt = require("bcryptjs");

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function saltAndHashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

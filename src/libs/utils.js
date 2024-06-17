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

export const getDataContent = (data, key, field) => {
  const item = data.find((item) => item.key === key);
  return item && item.value[field] ? item.value[field] : null;
};

export const isImageUrl = (url) => {
  return /\.(jpeg|jpg|gif|png|heic)$/i.test(url);
};

const isBase64 = (str) => {
  return /^data:image\/[a-zA-Z]+;base64,/.test(str);
};

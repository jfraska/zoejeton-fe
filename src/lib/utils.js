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

export const getDataContent = (data, key, field, subfield, slug, type) => {
  const item = data.find((item) => item.key === key);
  return item && item.value[field] && !subfield
    ? item.value[field]
    : item.value[field][subfield];
};

export const generateSlug = (string) => {
  return string
    .toLowerCase()
    .replace(/[\s]/g, "-")
    .replace(/[^\w\s]/g, "-")
    .replace(/-+/g, "-")
    .substring(0, 50);
};

export function extractClass(className, prefix) {
  const classes = className.trim().replace(/\s+/g, " ").split(" ");
  const filteredClasses = classes.filter((cls) => cls.startsWith(prefix));
  return filteredClasses.join(" ");
}

export function getUrl(path = "", subdomain = "") {
  // const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN;
  const sub = subdomain ? `${subdomain}.` : "";

  return `http://${sub}${domain}${path}`;
}

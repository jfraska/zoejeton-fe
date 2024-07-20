import { headers } from "next/headers";
import { CustomizeProvider } from "@/context/customize";
import Loading from "./loading";

export async function generateMetadata() {
  const pathname = headers().get("pathname");
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_ROOT_DOMAIN
        ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
        : "http://localhost:3000"
    }/api/template/${pathname}`
  ).then((res) => res.json());
  if (!response) {
    return null;
  }
  const { title, description, thumbnail } = response.data;
  return {
    title: `${title} | ZoeJeton`,
    description,
    openGraph: {
      title,
      description,
      images: [thumbnail],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [thumbnail],
      creator: "@vercel",
    },
    // Optional: Set canonical URL to custom domain if it exists
    // ...(params.domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) &&
    //   data.customDomain && {
    //     alternates: {
    //       canonical: `https://${data.customDomain}`,
    //     },
    //   }),
  };
}

export default function Layout({ children }) {
  return <CustomizeProvider>{children}</CustomizeProvider>;
}

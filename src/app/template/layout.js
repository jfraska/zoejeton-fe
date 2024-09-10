import { headers } from "next/headers";
import { CustomizeProvider } from "@/context/CustomizeContext";
import Loading from "./loading";
import { getUrl } from "@/lib/utils";

export async function generateMetadata() {
  const pathname = headers().get("pathname");
  const url = getUrl(`/api/template/${pathname}`);

  try {
    const res = await fetch(`/api/template/${pathname}`);

    if (!res.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return null;
    }

    const data = await res.json();

    const { title, description, thumbnail } = data.data;

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
  } catch (e) {
    console.error("Fetch error:", e);
    return null;
  }
}

export default function TemplateLayout({ children }) {
  return (
    <CustomizeProvider>
      <Loading>{children}</Loading>
    </CustomizeProvider>
  );
}

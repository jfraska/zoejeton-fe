import { headers } from "next/headers";
import { CustomizeProvider } from "@/context/CustomizeContext";
import Loading from "./loading";
import Customize from "@/components/layouts/template/customize";
import TemplateService from "@/services/template-service";

export async function generateMetadata() {
  const pathname = headers().get("pathname");

  try {
    const res = await TemplateService.showTemplate(pathname);

    const { title, description, thumbnail } = res.data;

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
      <Loading />
      <Customize>{children}</Customize>
    </CustomizeProvider>
  );
}

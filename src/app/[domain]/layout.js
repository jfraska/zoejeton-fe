import { CustomizeProvider } from "@/context/CustomizeContext";
import { notFound } from "next/navigation";
import TemplateService from "@/services/template-service";

export async function generateMetadata({ params, searchParams }, parent) {
  const domain = decodeURIComponent(params.domain);
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  const res = await TemplateService.showTemplate(`/${subdomain}`);

  if (!res.success) {
    return notFound();
  }

  const { title, description, thumbnail } = res.data;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${title} | ZoeJeton`,
    description,
    openGraph: {
      title,
      description,
      images: [thumbnail, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [thumbnail],
      creator: "@vercel",
    },
    // icons: [logo],
    metadataBase: new URL(`https://${domain}`),

    // Optional: Set canonical URL to custom domain if it exists
    // ...(params.domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) &&
    //   data.customDomain && {
    //     alternates: {
    //       canonical: `https://${data.customDomain}`,
    //     },
    //   }),
  };
}

export default function DomainLayout({ children }) {
  return <CustomizeProvider>{children}</CustomizeProvider>;
}

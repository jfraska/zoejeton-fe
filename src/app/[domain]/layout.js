import { CustomizeProvider } from "@/context/CustomizeContext";
import InvitationService from "@/services/invitation-service";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }, parent) {
  const domain = decodeURIComponent(params.domain);
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  const res = await InvitationService.showInvitation(subdomain);

  if (!res.success) {
    return notFound();
  }

  const { title, meta } = res.data;

  // const previousImages = (await parent).openGraph?.images || [];
  const image = `/templates/${subdomain}/${meta?.image}`;

  return {
    title: `${title} | ZoeJeton`,
    description: meta?.description,
    openGraph: {
      title: `${title} | ZoeJeton`,
      description: meta?.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ZoeJeton`,
      description: meta?.description,
      images: [image],
      creator: "@zoejeton",
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

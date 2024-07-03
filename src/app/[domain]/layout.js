import { CustomizeProvider } from "@/context/customize";

export async function generateMetadata({ params }) {
  const domain = decodeURIComponent(params.domain);
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_ROOT_DOMAIN
        ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
        : "http://localhost:3000"
    }/api/template/${subdomain}`
  ).then((res) => res.json());

  if (!response) {
    return null;
  }
  const { title, description, thumbnail } = response.data;

  console.log(title);

  return {
    title,
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

export default function Layout({ children }) {
  return <CustomizeProvider>{children}</CustomizeProvider>;
}
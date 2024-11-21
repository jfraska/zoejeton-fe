import LinkGenerator from "@/components/container/home/link-generator";

export const metadata = {
  title: "Generate Link | ZoeJeton",
  description: "by zoejeton",
};

export default function Page({ params }) {
  return <LinkGenerator url={params.slug} />;
}

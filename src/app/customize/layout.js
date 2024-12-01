import { headers } from "next/headers";
import { CustomizeProvider } from "@/context/CustomizeContext";
import Loading from "./loading";
import TemplateService from "@/services/template-service";

export async function generateMetadata() {
  const pathname = headers().get("pathname");

  try {
    const res = await TemplateService.showTemplate(pathname);

    const { title } = res.data;

    return {
      title: `${title} | Customize ZoeJeton`,
    };
  } catch (e) {
    console.error("Fetch error:", e);
    return null;
  }
}

export default function CustomizeLayout({ children }) {
  return (
    <CustomizeProvider>
      <Loading />
      {children}
    </CustomizeProvider>
  );
}

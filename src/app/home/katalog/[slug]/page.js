import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Loading from "@/components/UI/loading";
import Error from "@/components/UI/error";
import Detail from "../_components/Detail";

export const metadata = {
  title: "Katalog | ZoeJeton",
  description: "by fraska",
};

export default function page({ params }) {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Detail params={params} />
      </Suspense>
    </ErrorBoundary>
  );
}

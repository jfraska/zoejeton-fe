"use client";

import Loading from "@/components/UI/loading";
import NotfoundDashboard from "@/components/container/dashboard/notfound-dashboard";
import usePortal from "@/hooks/usePortal";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  const { loading, invitation, setStateSwitcher } = usePortal();

  return (
    <>
      {loading ? (
        <div className="m-auto">
          <Loading />
        </div>
      ) : invitation ? (
        children
      ) : (
        <NotfoundDashboard
          pathname={pathname === "/" ? "dashboard" : pathname.slice(1)}
          title="You have no invitation"
          desc="You can start a new experience with an invitation from us."
          textButton="Pilih Invitation"
          onClick={() => setStateSwitcher(true)}
        />
      )}
    </>
  );
}

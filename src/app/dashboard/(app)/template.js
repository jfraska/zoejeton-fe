"use client";

import { useContext, useEffect, useState } from "react";
import { getCookie, hasCookie } from "cookies-next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PortalContext from "@/context/PortalContext";
import Loading from "@/components/UI/loading";
import NotfoundDashboard from "@/components/container/dashboard/notfound-dashboard";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const { invitation, updateInvitation, setStateSwitcher } =
    useContext(PortalContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      if (searchParams.has("back")) {
        router.push(
          `${
            process.env.NEXT_PUBLIC_ROOT_DOMAIN
              ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
              : `http://template.localhost:3000`
          }/${searchParams.get("back")}?save`
        );
      }
      try {
        const selected = hasCookie("invitation")
          ? JSON.parse(getCookie("invitation"))
          : null;

        if (!selected) {
          setStateSwitcher(true);
          return;
        }
        // const res = await axios.get(`/api/invitation/${selected.id}`);
        // if (res.status !== 200) {
        //   throw new Error(res.statusText);
        // }

        // const { data } = res.data;

        // updateInvitation(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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

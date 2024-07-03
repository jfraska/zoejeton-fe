"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PortalContext from "@/context/portal";
import Loading from "@/components/UI/loading";
import { Button } from "@/components/UI/button";

export default function Template({ children }) {
  const {
    invitation,
    updateInvitation,
    setStateSwitcher,
    setStateCreateInvitation,
  } = useContext(PortalContext);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      try {
        const local = localStorage?.getItem("invitation")
          ? JSON.parse(localStorage.getItem("invitation"))
          : null;

        if (!local) {
          setStateSwitcher(true);
          return;
        }
        const response = await fetch(`/api/invitation/${local?.id}`).then(
          (res) => res.json()
        );

        updateInvitation(response.data);
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
        <section className="flex h-full flex-col gap-4 lg:gap-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl capitalize">
              {pathname === "/" ? "dashboard" : pathname.slice(1)}
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no invitation
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start a new experience with an invitation from us.
              </p>
              <Button
                onClick={() => setStateCreateInvitation(true)}
                className="mt-4"
              >
                Add invitation
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

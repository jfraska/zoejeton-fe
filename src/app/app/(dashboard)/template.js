"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import InvitationContext from "@/context/invitation";
import CreateInvitation from "@/components/container/create-invitation";

export default function Template({ children }) {
  const [openCreate, setOpenCreate] = useState(false);
  const { selectedInvitation, selectInvitation } =
    useContext(InvitationContext);
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/invitation`);
        const result = await response.json();

        if (result.data.length <= 0) {
          setOpenCreate(true);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    })();
  }, []);

  const handleCreateInvitation = async (e) => {
    try {
      const response = await fetch("/api/invitation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: e.title }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      selectInvitation(result.data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <>
      {selectedInvitation ? (
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
              <CreateInvitation
                onSubmit={handleCreateInvitation}
                open={openCreate}
                onOpenChange={setOpenCreate}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

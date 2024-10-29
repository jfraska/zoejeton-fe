"use client";
import PortalContext from "@/context/PortalContext";

import { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCookie, hasCookie } from "cookies-next";

const usePortal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { invitation, updateInvitation, setStateSwitcher } =
    useContext(PortalContext);

  useEffect(() => {
    if (searchParams.has("back")) {
      router.push(getUrl(`/${searchParams.get("back")}?save}`, "template"));
    }
  }, [searchParams]);

  useEffect(() => {
    (async () => {
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

  return {
    loading,
    invitation,
    updateInvitation,
    setStateSwitcher,
  };
};

export default usePortal;

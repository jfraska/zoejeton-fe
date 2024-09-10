"use client";

import { usePathname } from "next/navigation";
import useSWR from "swr";
import { useContext } from "react";
import PortalContext from "@/context/PortalContext";
import TemplateService from "@/services/template-service";

export default function useCustomize() {
  const pathname = usePathname();

  const { data, error, isLoading } = useSWR(
    pathname && `/api/template${pathname}`,
    () => pathname && TemplateService.showTemplate
  );

  const { invitation, updateInvitation, setStateSwitcher } =
    useContext(PortalContext);

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(`/api/template${pathname}`).then((res) =>
          res.json()
        );

        const local = localStorage?.getItem("template")
          ? JSON.parse(localStorage.getItem("template"))
          : null;

        if (local) {
          res.data = {
            ...res.data,
            ...local,
          };
          deleteDraftContent();
        }
        // else if (session) {
        //   const selected = hasCookie("invitation")
        //     ? JSON.parse(getCookie("invitation"))
        //     : null;

        //   if (!selected) {
        //     setStateSwitcher(true);
        //     return;
        //   }

        //   if (selected?.templateId) {
        //     const template = await fetch(
        //       `/api/template/${selected.templateId}`
        //     ).then((res) => res.json());

        //     if (template.data > 0) {
        //       res.data = {
        //         ...res.data,
        //         ...template.data,
        //       };
        //     }
        //   }
        // }

        initData(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [invitation]);
}

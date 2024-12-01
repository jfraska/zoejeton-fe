"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PortalContext from "@/context/PortalContext";
import TemplateService from "@/services/template-service";
import CustomizeContext from "@/context/CustomizeContext";

const useCustomize = () => {
  const searchParams = useSearchParams();
  let pathname = usePathname();
  const [loading, setLoading] = useState(true);

  const {
    initData,
    data,
    setData,
    dataContent,
    setDataContent,
    dataColor,
    setDataColor,
    dataGuest,
    setDataGuest,
    isEdit,
    setIsEdit,
    saveDraftContent,
    deleteDraftContent,
  } = useContext(CustomizeContext);

  const { invitation, updateInvitation, setStateSwitcher } =
    useContext(PortalContext);

  useEffect(() => {
    if (searchParams.has("edit")) {
      setIsEdit(true);
    }
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      try {
        if (pathname.startsWith("/preview")) {
          const path = pathname.split("/");
          if (path[2]) {
            pathname = `/${path[2]}`;
          }
        }

        const res = await TemplateService.showTemplate(pathname);

        let template = res.data;

        const local = localStorage?.getItem("template")
          ? JSON.parse(localStorage.getItem("template"))
          : null;

        if (local) {
          template = {
            ...res.data.data,
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

        initData(template);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [invitation]);

  return {
    loading,
    initData,
    data,
    setData,
    dataContent,
    setDataContent,
    dataColor,
    setDataColor,
    dataGuest,
    setDataGuest,
    isEdit,
    setIsEdit,
    saveDraftContent,
    deleteDraftContent,
  };
};

export default useCustomize;

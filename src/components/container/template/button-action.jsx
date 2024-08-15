"use client";

import * as React from "react";
import CustomizeContext from "@/context/customize";
import { usePathname, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { toast } from "sonner";
import ButtonShare from "@/components/container/button-share";
import { Edit2, Edit3, Share2, ShoppingBag } from "lucide-react";

const actions = [
  {
    icon: <Edit3 className="w-4 aspect-square" />,
    name: "Customize",
    visible: true,
  },
  {
    icon: <Share2 className="w-4 aspect-square" />,
    name: "Share",
    visible: true,
  },
  {
    icon: <ShoppingBag className="w-4 aspect-square" />,
    name: "Buy",
    visible: true,
  },
];

export default function ButtonAction() {
  const [open, setOpen] = React.useState(false);
  const [isOpenShare, setIsOpenShare] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isEdit, setIsEdit } = React.useContext(CustomizeContext);

  const handleAction = (actionName) => {
    switch (actionName) {
      case "Customize":
        toast.success("mode customize");
        setIsEdit(true);
        break;
      case "Share":
        setIsOpenShare(true);
        break;
      case "Buy":
        router.push(
          process.env.NEXT_PUBLIC_ROOT_DOMAIN
            ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/katalog${pathname}`
            : `http://localhost:3000/katalog${pathname}`
        );
        break;
    }

    setOpen(false);
  };

  return (
    <>
      {!isEdit && (
        <Box
          sx={{
            position: "fixed",
            top: 16,
            right: 12,
            zIndex: 50,
            transform: "translateZ(0px)",
            flexGrow: 1,
          }}
        >
          <SpeedDial
            ariaLabel="tools"
            sx={{
              "& .MuiSpeedDial-fab": {
                width: 40,
                height: 40,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              },
            }}
            icon={<Edit2 className="w-4 aspect-square text-black" />}
            openIcon={<SpeedDialIcon sx={{ color: "black" }} />}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            direction="down"
            open={open}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
                onClick={() => handleAction(action.name)}
              />
            ))}
          </SpeedDial>
        </Box>
      )}

      <ButtonShare
        open={isOpenShare}
        onOpenChange={setIsOpenShare}
        link={
          process.env.NEXT_PUBLIC_ROOT_DOMAIN
            ? `template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}${pathname}`
            : `template.localhost:3000${pathname}`
        }
      />
    </>
  );
}

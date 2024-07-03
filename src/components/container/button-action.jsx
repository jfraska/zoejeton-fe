"use client";

import * as React from "react";
import CustomizeContext from "@/context/customize";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { toast } from "sonner";
import { Edit2, LayoutDashboard, Share2, ShoppingBag } from "lucide-react";

const actions = [
  {
    icon: <LayoutDashboard className="w-4 aspect-square" />,
    name: "Dashboard",
    visible: true,
  },
  {
    icon: <Edit2 className="w-4 aspect-square" />,
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

export default function ButtonAction({ handleOpenShare = () => {} }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const { isEdit, setIsEdit } = React.useContext(CustomizeContext);

  const handleAction = (actionName) => {
    switch (actionName) {
      case "Customize":
        toast.success("mode customize");
        setIsEdit(true);
        break;
      case "Share":
        handleOpenShare(true);
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
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
              },
            }}
            icon={<SpeedDialIcon />}
            onClose={() => setOpen(false)}
            onOpen={handleOpen}
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
    </>
  );
}

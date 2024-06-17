"use client";

import * as React from "react";
import CustomizeContext from "@/context/customize";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import { toast } from "sonner";

const actions = [
  { icon: <EditIcon />, name: "Customize" },
  { icon: <ShareIcon />, name: "Share" },
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
            height: 320,
            zIndex: 50,
            transform: "translateZ(0px)",
            flexGrow: 1,
          }}
        >
          <SpeedDial
            ariaLabel="SpeedDial controlled open example"
            sx={{
              "& .MuiFab-primary": {
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
                onClick={() => handleAction(action.name)}
              />
            ))}
          </SpeedDial>
        </Box>
      )}
    </>
  );
}

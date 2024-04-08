"use client";

import { useState } from "react";
import Beranda from "./_components/Beranda";
import Quotes from "./_components/Quotes";
import Couple from "./_components/Couple";
import Story from "./_components/Story";
import Date from "./_components/Date";
import LockScreen from "./_components/LockScreen";
import prisma from "@/lib/prisma";

async function getInvitation() {
  const invitation = await prisma.invitation.findUnique({
    where: { title: "default" },
  });
  return invitation;
}

export default async function Minimalis() {
  const [isOpen, setOpen] = useState(false);
  const invitation = await getInvitation();

  return (
    <>
      <LockScreen state={isOpen} setState={setOpen} />
      {isOpen && (
        <>
          {/* <Beranda data={invitation} /> */}
          <Quotes />
          <Couple />
          <Story />
          <Date />
        </>
      )}
    </>
  );
}

"use client"

import Beranda from "./_components/Beranda";
import Quotes from "./_components/Quotes";
import Couple from "./_components/Couple";
import Story from "./_components/Story";
import Date from "./_components/Date";
import LockScreen from "./_components/LockScreen";
import { useState } from "react";

export default function Minimalis() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    <LockScreen state={isOpen} setState={setOpen}/>
    {isOpen && (
      <>
      <Beranda />
      <Quotes />
      <Couple />
      <Story />
      <Date />
      </>)}
    </>
  );
}

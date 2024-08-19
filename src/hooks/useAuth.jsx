"use client";

import { useContext } from "react";
import SessionContext from "@/context/SessionContext";

export const useAuth = () => useContext(SessionContext);

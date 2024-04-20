"use client";

import React from "react";
import { Provider as JotaiProvider } from "jotai";
import { UIProvider } from "@yamada-ui/react";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JotaiProvider>
      <UIProvider>{children}</UIProvider>
    </JotaiProvider>
  );
}

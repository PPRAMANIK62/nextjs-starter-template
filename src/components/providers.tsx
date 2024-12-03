"use client";

import { useRouter } from "next/navigation";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <NextUIProvider
      navigate={router.push}
      className="flex h-full w-full flex-col"
    >
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;

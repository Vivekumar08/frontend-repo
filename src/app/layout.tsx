import "./globals.css";
import RootLayoutClient from "./provider";
import "@mantine/core/styles.css";

import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding with buddy",
  description: "Generated by coder's love buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}

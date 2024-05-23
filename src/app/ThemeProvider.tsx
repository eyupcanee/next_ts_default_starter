"use client";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useAppSelector((state) => state.theme.theme);
  return <div data-theme={theme}>{children}</div>;
}

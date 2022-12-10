import React from "react";
import AppLayout from "components/AppLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getRequestCookie } from "utils/session";

export default async function CodrLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getRequestCookie(cookies());

  // Prevent non logged user to access application
  if (!user) {
    redirect("/signin");
  } else if (!user.name) {
    redirect("/setup");
  }

  return <AppLayout>{children}</AppLayout>;
}

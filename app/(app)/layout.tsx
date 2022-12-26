import React from "react";
import AppLayout from "components/AppLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getRequestCookie } from "utils/session";

export default async function CodrLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getRequestCookie(cookies());
  console.warn(user);
  // Prevent non logged in user to access application
  if (!user) {
    redirect("/signin");
  } else if (!user.name && !user.flags.isAnonymous) {
    redirect("/setup");
  }

  return user.flags.isAnonymous ? children : <AppLayout>{children}</AppLayout>;
}

import React from "react";
import AdminLayout from "components/admin/Layout";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { getRequestCookie } from "utils/session";

export default async function CodrLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getRequestCookie(cookies());

  // Prevent non logged user to access application
  if (!user) {
    redirect("/signin");
  } else if (!user.name && !user.flags.isAnonymous) {
    redirect("/setup");
  } else if (user.role !== "codr:admin") {
    notFound();
  }

  return <AdminLayout>{children}</AdminLayout>;
}

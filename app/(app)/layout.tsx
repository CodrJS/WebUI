import React from "react";
import AppLayout from "components/AppLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getRequestCookie } from "utils/session";
import getProfile from "utils/axios/Profile";

async function getData() {
  try {
    const result = await getProfile();
    return result.data.details;
  } catch (e) {
    console.error("Could not fetch profile data.");
  }
}

export default async function CodrLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getRequestCookie(cookies());
  const profile = await getData();

  // Prevent non logged user to access application
  if (!user) {
    redirect("/signin");
  } else if (!user.name) {
    redirect("/setup");
  }

  return <AppLayout profile={profile}>{children}</AppLayout>;
}

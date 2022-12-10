import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getRequestCookie } from "utils/session";

export default async function SigninLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getRequestCookie(cookies());

  // Prevent non logged user to access application
  if (user && !user.name) {
    redirect("/setup");
  }

  return (
    <>
      {/* Main column */}
      <main className="flex flex-col flex-1 bg-gray-50">{children}</main>
    </>
  );
}

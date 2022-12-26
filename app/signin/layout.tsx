import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getRequestCookie } from "utils/session";

export default async function SigninLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getRequestCookie(cookies());

  // If logged in; redirect to the correct page
  if (user) {
    if (!user.name && !user.flags.isAnonymous) redirect("/setup");
    else redirect("/");
  }

  return (
    <>
      {/* Main column */}
      <main className="flex flex-col flex-1 bg-gray-50">{children}</main>
    </>
  );
}

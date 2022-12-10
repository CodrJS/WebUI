"use client";
import React from "react";

export default function SigninLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      {/* Main column */}
      <main className="flex flex-col flex-1 bg-gray-50">{children}</main>
    </>
  );
}

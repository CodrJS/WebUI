"use client";
import "styles/globals.css";
import "highlight.js/styles/atom-one-light.css";
import React from "react";

export default function GlobalLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex min-h-full">{children}</div>
      </body>
    </html>
  );
}

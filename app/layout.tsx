"use client";
import "styles/globals.css";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SearchHeader from "./SearchHeader";

export default function AppLayout({ children }: React.PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-full">
      <Sidebar sidebar={{ open: sidebarOpen, setOpen: setSidebarOpen }} />
      {/* Main column */}
      <div className="flex flex-col lg:pl-64 flex-1">
        {/* Search header */}
        <SearchHeader sidebar={{ setOpen: setSidebarOpen }} />
        <main className="flex flex-col flex-1">{children}</main>
      </div>
    </div>
  );
}

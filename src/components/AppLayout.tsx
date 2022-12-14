"use client";
import React, { useState } from "react";
import Sidebar from "components/Sidebar";
import SearchHeader from "components/SearchHeader";
import { ProfileProvider } from "utils/contexts/ProfileContext";
import { IProfile } from "types/Profile";

export default function AppLayout({ children, profile }: React.PropsWithChildren<{ profile?: IProfile }>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ProfileProvider value={profile}>
      <Sidebar sidebar={{ open: sidebarOpen, setOpen: setSidebarOpen }} />
      {/* Main column */}
      <div className="flex flex-col lg:pl-64 flex-1">
        {/* Search header */}
        <SearchHeader sidebar={{ setOpen: setSidebarOpen }} />
        <main className="flex flex-col flex-1">{children}</main>
      </div>
    </ProfileProvider>
  );
}

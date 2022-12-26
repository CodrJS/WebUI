"use client";
import React, { useState } from "react";
import Sidebar from "components/AppLayout/Sidebar";
import SearchHeader from "components/AppLayout/SearchHeader";
import { ProfileProvider } from "utils/contexts/ProfileContext";
import { NotificationProvider } from "utils/contexts/NotificationContext";
import { Panel } from "../Notification";

export default function AppLayout({ children }: React.PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ProfileProvider>
        <NotificationProvider>
          <Sidebar sidebar={{ open: sidebarOpen, setOpen: setSidebarOpen }} />
          {/* Main column */}
          <div className="flex flex-col lg:pl-64 flex-1">
            {/* Search header */}
            <SearchHeader sidebar={{ setOpen: setSidebarOpen }} />
            <main className="flex flex-col flex-1">{children}</main>
          </div>
          <Panel />
        </NotificationProvider>
      </ProfileProvider>
    </>
  );
}

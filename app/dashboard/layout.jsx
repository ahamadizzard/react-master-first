"use client";
import UserNav from "./components/user-nav";

import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/dashboard/components/app-sidebar";

export default function Layout({ children }) {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const options = {
        weekday: 'long', // Full day name (e.g., "Saturday")
        year: 'numeric', // Full year (e.g., "2023")
        month: 'long',   // Full month name (e.g., "October")
        day: 'numeric',  // Day of the month (e.g., "15")
        hour: '2-digit', // Hour (e.g., "12")
        minute: '2-digit', // Minute (e.g., "34")
        second: '2-digit', // Second (e.g., "56")
        hour12: true,    // Use 12-hour format (e.g., "PM")
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const formattedDateTime = currentDateTime.toLocaleString('en-US', options);

    return (
        <div className="flex h-screen">
            {/* Sidebar with fixed width */}
            <div className="w-60 bg-gray-800 text-white">
                <SidebarProvider>
                    <AppSidebar />
                </SidebarProvider>
            </div>

            {/* Main content area */}
            <div className="flex flex-1 flex-col">
                {/* Header at the top */}
                <header className="bg-white flex items-center justify-between gap-4 border-b px-6 shadow-sm h-16">
                    <h1 className="text-2xl font-bold text-blue-600">MFlix Dashboard</h1>
                    <div>
                        <p className="text-center text-xl font-semibold text-blue-600">{formattedDateTime}</p>
                    </div>
                    <UserNav />
                </header>

                {/* Main scrollable content */}
                <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
}

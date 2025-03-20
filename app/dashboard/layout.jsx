"use client";
import UserNav from "./components/user-nav";
import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/dashboard/components/app-sidebar";

export default function Layout({ children }) {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    // This useEffect hook is used to update the current date and time every second
    useEffect(() => {
        // Set an interval to update the current date and time every second
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    const formattedDateTime = currentDateTime.toLocaleString('en-US', options);

    return (
        <div className="flex h-screen">
            {/* Sidebar with fixed width, hidden on small screens */}
            <div className={`fixed inset-y-0 left-0 w-60 bg-gray-800 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static`}>
                <SidebarProvider>
                    <AppSidebar />
                </SidebarProvider>
            </div>

            {/* Main content area */}
            <div className="flex flex-1 flex-col">
                {/* Header at the top */}
                <header className="bg-white flex flex-col lg:flex-row items-center justify-between gap-4 border-b px-6 shadow-sm h-16">
                    <div className="flex items-center justify-between w-full lg:w-auto">
                        <h1 className="text-2xl font-bold text-blue-600">MFlix Dashboard</h1>
                        <button
                            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
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
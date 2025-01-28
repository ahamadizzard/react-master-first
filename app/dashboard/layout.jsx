import UserNav from "./components/user-nav";


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/dashboard/components/app-sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex h-screen">
            {/* Sidebar with fixed width */}
            <div className="w-48 bg-gray-800 text-white">
                <SidebarProvider>
                    <AppSidebar />
                </SidebarProvider>
            </div>

            {/* Main content area */}
            <div className="flex flex-1 flex-col">
                {/* Header at the top */}
                <header className="bg-white flex items-center justify-between gap-4 border-b px-6 shadow-sm h-16">
                    <h1 className="text-2xl font-bold text-blue-600">MFlix Dashboard</h1>
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

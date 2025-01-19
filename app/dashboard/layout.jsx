import UserNav from "./components/user-nav";
export default function DashboardLayout({ children }) {
    return (
        <div className="flex max-h-screen overflow-hidden bg-gray-100">
            {/* Side Panel */}
            <aside className="flex w-64 overflow-y-auto border-r bg-white shadow-lg">
                <h1 className="text-2xl font-bold ">Side Panel</h1>
            </aside>
            <div className="bg-grey-500 flex flex-1 flex-col overflow-hidden">
                {/* Dashboard Header */}
                <header className="bg-white flex items-center justify-between gap-4 border border-b px-6 shadow-sm h-16">
                    <h1 className="text-2xl font-bold text-blue-600">MFlix Dashboard</h1>
                    <UserNav />

                    {/* <button className="text-gray-500 hover:text-gray-600">button </button> */}
                </header>
                {/* Dashboard */}
                <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
                    {children}
                </main>
                {/* <div className="flex flex-1 bg-orange-400">{children}</div> */}
            </div>

        </div>
    );
}

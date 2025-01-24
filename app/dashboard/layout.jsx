// import UserNav from "./components/user-nav";
// import SidePanel from "./components/side-panel";
// export default function DashboardLayout({ children }) {
//     return (
//         <div className="flex max-h-screen overflow-hidden bg-gray-100">
//             <title>Learning ReactMaster @ Evotech</title>
//             {/* Side Panel */}
//             <aside className=" w-48 overflow-y-auto border-r bg-white ">
//                 {/* <h1 className="text-2xl font-bold ">Side Panel</h1> */}
//                 <SidePanel />
//             </aside>
//             <div className="bg-grey-500 flex flex-1 flex-col overflow-hidden">
//                 {/* Dashboard Header */}
//                 <header className="bg-white flex items-center justify-between gap-4 border border-b px-6 shadow-sm h-16">
//                     <h1 className="text-2xl fon t-bold text-blue-600">MFlix Dashboard</h1>
//                     <UserNav />

//                     {/* <button className="text-gray-500 hover:text-gray-600">button </button> */}
//                 </header>
//                 {/* Dashboard */}
//                 <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
//                     {children}
//                 </main>
//                 {/* <div className="flex flex-1 bg-orange-400">{children}</div> */}
//             </div>

//         </div>
//     );
// }

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/dashboard/components/app-sidebar"

export default function Layout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}


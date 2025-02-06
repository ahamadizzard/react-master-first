import { List, Home, User, Settings, Calendar, BadgePlus, Pencil } from "lucide-react"
import { UserNav } from "@/app/dashboard/components/user-nav"
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem, SidebarMenuSubTrigger, SideBarMenuSubContent, SidebarMenuBadge, SidebarMenuSkeleton

} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Overview",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Movies Old Database",
        url: "/dashboard/movies",
        icon: List,
    },
    {
        title: "Edit Movies",
        url: "/dashboard/moviesnewdb",
        icon: List,
    },
    {
        title: "Add Movies",
        url: "/dashboard/add-movie",
        icon: Calendar,
    },
    {
        title: "User",
        url: "/dashboard/users",
        icon: User,
    },
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar className="w-60 bg-blue-700">
            <SidebarContent className="text-blue-900">
                <SidebarGroup>
                    <SidebarGroupLabel>MovieFlix</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="hover:bg-blue-300 hover:animate-pulse">
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <Separator className="bg-blue-300" />
                {/* <SidebarGroup>
                    <SidebarGroupLabel>Settings</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <p className="font-bold text-l"> Handle Movies Database </p>
                                <SidebarMenuSub asChild >

                                    <SidebarMenuSubItem >
                                        <a className="hover:bg-blue-300 hover:animate-pulse rounded-md italic flex items-center gap-2 mb-2 mt-2" href="/dashboard/movieslist">
                                            <Pencil />
                                            <span>View Modify / Delete Movies</span>
                                        </a>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <a className="hover:bg-blue-300 hover:animate-pulse rounded-md italic flex items-center gap-2 mb-2 mt-2" href="/dashboard/add-movie">
                                            <BadgePlus />
                                            <span>Add Movie</span>
                                        </a>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem >
                                        <a className="hover:bg-blue-300 hover:animate-pulse rounded-md italic flex items-center gap-2 mb-2 mt-2" href="/dashboard/add-movie">
                                            <Settings />
                                            <span>Add Movie</span>
                                        </a>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup> */}

            </SidebarContent>
        </Sidebar>
    )
}

import { Clapperboard, Home, User, Settings, Calendar, FileVideo2, FileVideo } from "lucide-react"
// import { UserNav } from "@/app/dashboard/components/user-nav"
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
    // SidebarMenuSub,
    // SidebarMenuSubItem, SidebarMenuSubTrigger, SideBarMenuSubContent, SidebarMenuBadge, SidebarMenuSkeleton
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
        icon: Clapperboard,
    },
    {
        title: "Edit Movies",
        url: "/dashboard/moviesnewdb",
        icon: FileVideo2,
    },
    {
        title: "Add Movies",
        url: "/dashboard/add-movie",
        icon: FileVideo,
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
            </SidebarContent>
        </Sidebar>
    )
}

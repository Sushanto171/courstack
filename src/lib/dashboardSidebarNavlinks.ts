import { HandCoins, ListVideo, LucideIcon, Settings2, Users2 } from "lucide-react";

export interface ISidebarNavLinks {
  title: string;
  icon: LucideIcon;
  isActive?: boolean;
  items: {
    title: string;
    url: string;
  }[]
}



export const commonNavLinks: ISidebarNavLinks[] = [
  {
    title: "Quick Links",
    icon: Settings2,
    items: [
      {
        title: "Profile",
        url: "/profile"
      },
      {
        title: "Settings",
        url: "/settings"
      },
      {
        title: "Change Password",
        url: "/change-password"
      }
    ]
  }
]


export const superAdminNavLinks: ISidebarNavLinks[] = [
  {
    title: "User Managements",
    icon: Users2,
    items: [
      {
        title: "All Users",
        url: "/users"
      },
      {
        title: "Create Admin Account",
        url: "/create-admin"
      },
    ]
  },
  {
    title: "Course Managements",
    icon: ListVideo,
    items: [
      {
        title: "All Courses",
        url: "/courses"
      },
      {
        title: "All Categories",
        url: "/category"
      },
      {
        title: "Enrollments",
        url: "/enrollments"
      },
    ]
  },
  {
    title: "Payments",
    icon: HandCoins,
    items: [
      {
        title: "Payment",
        url: "/payments"
      }
    ]
  }
]
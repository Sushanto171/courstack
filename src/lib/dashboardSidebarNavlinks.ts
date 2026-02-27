import { HandCoins, ListVideo, LucideIcon, Settings2, Users, Users2 } from "lucide-react";

export interface ISidebarNavLinks {
  title: string;
  icon: LucideIcon;
  url?: string;
  isActive?: boolean;
  items?: {
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
    title: "Revenue",
    icon: HandCoins,
    url: "/revenue"
  }
];


export const adminNavLinks: ISidebarNavLinks[] = [
  {
    title: "User Managements",
    icon: Users2,
    items: [
      {
        title: "All Users",
        url: "/users"
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
    title: "Revenue",
    icon: HandCoins,
    url: "/revenue"
  }
]


export const instructorNavLinks: ISidebarNavLinks[] = [
  {
    title: "Courses",
    icon: Users2,
    items: [
      {
        title: "My Courses",
        url: "/my-courses"
      },
      {
        title: "Make Course",
        url: "/create-course"
      },
    ]
  },
  {
    title: "Students",
    icon: Users,
    items: [
      {
        title: "All students",
        url: "/students"
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
    title: "Earnings",
    icon: HandCoins,
    url:"/earnings"
  }
]
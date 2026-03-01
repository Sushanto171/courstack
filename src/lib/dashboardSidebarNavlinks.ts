import { Role } from '@/types/user';

export interface ISidebarNavLinks {
  title: string;
  icon: string;
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
    icon: "Settings2",
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
    icon: "Users2",
    items: [
      {
        title: "All Users",
        url: "users"
      },
      {
        title: "Create Admin Account",
        url: "create-admin"
      },
    ]
  },
  {
    title: "Course Managements",
    icon: "ListVideo",
    items: [
      {
        title: "All Courses",
        url: "courses"
      },
      {
        title: "All Categories",
        url: "category"
      },
      {
        title: "Enrollments",
        url: "enrollments"
      },
    ]
  },
  {
    title: "Revenue",
    icon: "HandCoins",
    url: "revenue"
  }
];


export const adminNavLinks: ISidebarNavLinks[] = [
  {
    title: "User Managements",
    icon: "Users2",
    url: "users",
    isActive: true,
  },
  {
    title: "Course Managements",
    icon: "ListVideo",
    items: [
      {
        title: "All Courses",
        url: "courses"
      },
      {
        title: "All Categories",
        url: "category"
      },
      {
        title: "Enrollments",
        url: "enrollments"
      },
    ]
  },
  {
    title: "Revenue",
    icon: "HandCoins",
    url: "revenue"
  }
]


export const instructorNavLinks: ISidebarNavLinks[] = [
  {
    title: "Courses",
    icon: "Users2",
    items: [
      {
        title: "My Courses",
        url: "my-courses"
      },
      {
        title: "Make Course",
        url: "create-course"
      },
    ]
  },
  {
    title: "Students",
    icon: "Users",
    items: [
      {
        title: "All students",
        url: "students"
      },
      {
        title: "Enrollments",
        url: "enrollments"
      },
    ]
  },
  {
    title: "Analytics",
    icon: "ChartNoAxesCombined",
    url: "analytics"
  },
  {
    title: "Earnings",
    icon: "DollarSign",
    url: "earnings"
  }
];

export const studentNavLinks: ISidebarNavLinks[] = [
  {
    title: "My Learning",
    icon: "GraduationCap",
    url: "my-learning"
  },
  {
    title: "Browse Courses",
    icon: "TextSearch",
    url: "/courses"
  },
  {
    title: "Achievements",
    icon: "Award",
    url: "achievements"
  },
  {
    title: "Payments",
    icon: "DollarSign",
    url: "payments"
  }
]


export const getSidebarNavLinks = (role: Role) => {

  switch (role) {
    case "SUPER_ADMIN":
      return superAdminNavLinks;
    case "ADMIN":
      return adminNavLinks;
    case "INSTRUCTOR":
      return instructorNavLinks;
    case "STUDENT":
      return studentNavLinks;
    default: return studentNavLinks
  }
}
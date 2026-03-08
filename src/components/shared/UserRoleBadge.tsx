import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Role } from "@/types/user"


type Props = {
  role: Role
}

const roleConfig: Record<Role, { label: string; className: string }> = {
  SUPER_ADMIN: {
    label: "Super Admin",
    className: "bg-purple-100 text-purple-700 border-purple-200",
  },
  ADMIN: {
    label: "Admin",
    className: "bg-red-100 text-red-700 border-red-200",
  },
  INSTRUCTOR: {
    label: "Instructor",
    className: "bg-blue-100 text-blue-700 border-blue-200",
  },
  STUDENT: {
    label: "Student",
    className: "bg-gray-100 text-gray-700 border-gray-200",
  },
}

export default function UserRoleBadge({ role }: Props) {
  const config = roleConfig[role]

  return (
    <Badge
      variant="outline"
      className={cn(
        "px-2 py-0.5 text-xs font-medium whitespace-nowrap",
        config.className
      )}
    >
      {config.label}
    </Badge>
  )
}
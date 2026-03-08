import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { UserStatus } from "@/types/user"

type Props = {
  status: UserStatus
}

const statusConfig: Record<UserStatus, { label: string; className: string }> = {
  ACTIVE: {
    label: "Active",
    className: "bg-green-100 text-green-700 border-green-200",
  },
  SUSPENDED: {
    label: "Suspended",
    className: "bg-yellow-100 text-yellow-700 border-yellow-200",
  },
  REMOVED: {
    label: "Removed",
    className: "bg-red-100 text-red-700 border-red-200",
  },
}

export function UserStatusBadge({ status }: Props) {
  const config = statusConfig[status]

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium px-2 py-0.5 text-xs capitalize",
        config.className
      )}
    >
      {config.label}
    </Badge>
  )
}
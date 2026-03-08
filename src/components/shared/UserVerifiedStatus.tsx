import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

type Props = {
  isVerified: boolean
}

export default function UserVerifiedStatus({ isVerified }: Props) {
  return (
    <Badge
      variant="outline"
      className={`flex w-fit items-center gap-1 px-2 py-0.5 text-xs font-medium
      ${isVerified
          ? "bg-green-100 text-green-700 border-green-200"
          : "bg-red-100 text-red-700 border-red-200"
        }`}
    >
      {isVerified ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
      {isVerified ? "Verified" : "Unverified"}
    </Badge>
  )
}
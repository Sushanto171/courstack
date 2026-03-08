import { getInitials } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserProps {
  user: { email: string, name: string, profileUrl?: string, isActive?: boolean }
}

export default function UserInfo({ user }: UserProps) {
  const initials = getInitials(user.name)
  return (
    <div className="flex gap-2">
      <Avatar>
        <AvatarImage src={user.profileUrl} alt={`${initials}'s photo`} />
        <AvatarFallback>{initials}</AvatarFallback>
        <AvatarBadge className={cn(!user.isActive && "hidden", "bg-green-600 dark:bg-green-800 ")} />
      </Avatar>
      <div>
        <h2>{user.name}</h2>
        <p className="text-xs opacity-50">{user.email}</p>
      </div>
    </div>
  );

}
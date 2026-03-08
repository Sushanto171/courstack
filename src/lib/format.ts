export const getInitials = (name: string) => {
  return name
    ?.split(" ")
    ?.map((n) => n[0])
    ?.join("")
    ?.slice(0, 2)
    ?.toUpperCase() || "U"
}

export const getDateTime = (date: Date) => {
  return new Date(date).toLocaleDateString()
}
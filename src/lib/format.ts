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

export const convertQueryString = (data: Record<string, string | string[] | undefined>) => {
  if (!data) return ""
  const params = new URLSearchParams()

  Object.entries(data).forEach(([key, value]) => {
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, v))
    } else {
      params.set(key, value)
    }
  })

  return params.toString()

}
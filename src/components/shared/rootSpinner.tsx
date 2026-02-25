import { Loader2 } from "lucide-react"

export function RootSpinner() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <Loader2 className="size-6 animate-spin text-primary" />
    </div>
  )
}
import { Button } from "@/components/ui/button"

export default function RegisterHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-14 items-center justify-between">

        <div className="flex items-center gap-2 font-semibold">
          <div className="size-6 rounded bg-primary" />
          Courstack
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm text-muted-foreground">
            Already have an account?
          </span>

          <Button variant="secondary" size="sm">
            Log in
          </Button>
        </div>

      </div>
    </header>
  )
}
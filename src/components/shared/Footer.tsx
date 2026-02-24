import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { School } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto py-14 px-4 sm:px-6 lg:px-8">

        {/* top grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <School className="h-6 w-6 text-primary" />
              Courstack
            </div>

            <p className="text-sm text-muted-foreground max-w-xs">
              Enterprise learning platform helping teams grow with
              structured, role-based training and analytics.
            </p>
          </div>

          {/* product */}
          <div className="space-y-3 text-sm">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#">Courses</Link></li>
              <li><Link href="#">Enterprise</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Certifications</Link></li>
            </ul>
          </div>

          {/* company */}
          <div className="space-y-3 text-sm">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* newsletter */}
          <div className="space-y-4 text-sm">
            <h4 className="font-semibold">Stay updated</h4>

            <p className="text-muted-foreground">
              Get product updates and learning resources.
            </p>

            <div className="flex gap-2">
              <input
                placeholder="Email address"
                className="h-10 w-full rounded-md border bg-background px-3 text-sm"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>

        </div>

        <Separator className="my-8" />

        {/* bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

          <p>
            © {new Date().getFullYear()} Courstack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Security</Link>
          </div>

        </div>

      </div>
    </footer>
  )
}
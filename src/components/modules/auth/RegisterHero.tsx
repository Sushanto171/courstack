import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, School } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RegisterHero() {
  return (
    <div className="relative h-full overflow-hidden">

      {/* Background image */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-ApL3qJpdRBKX5eWwz9ajUR8hI3DbozcEb2zQL5awix167Bq5JBLiJTWdvVdlHN3Ff9NvIw-_xX9edqp5LFX56BymwVH2wj22ityNh7NP1K1sahZlPTMoTMsKsZnFoymw4rRgAn63X-jngCGHqgXMZ7Uo6PfPsVSoLUrcHzHmzTX_SPRWmQ_tNcn1MnsgA6ev6-Ig--CrYDcEQ5EiXPLZds0VgTMD8E_YiW-fnl8LAeTydybdd9JDwkzwlcuANJzP-y2pRCjUjNM"
        alt="Students learning"
        fill
        priority
        className="object-cover"
      />

      {/* overlay using tokens only */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/90 to-slate-900/90 mix-blend-multiply" />

      {/* content */}
      <div className="relative h-full p-10 flex flex-col gap-6 ">

        <div>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white">
              <span className="material-symbols-outlined text-2xl"><School /></span>
            </div>
            <span className="text-2xl font-black text-white tracking-tight">
              Courstack
            </span>
          </Link>
        </div>

        <div className="space-y-6 text-white flex-1 mt-8">
          <div className="text-xs font-medium  uppercase tracking-wide">
            <Badge variant="outline" className="rounded-full text-white/90 border-muted-foreground px-2 py-1">
              <PlayCircle /> Enterprise Grade LMS
            </Badge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight max-w-sm">
            Join 50k+ professionals and instructors
          </h1>

          <p className="opacity-80 max-w-sm">
            Unlock your potential with Courstack. Experience role-based dashboards, advanced analytics, and a seamless learning journey.
          </p>
        </div>

        {/* Trusted users */}
        <div className="flex items-center gap-4">

          <div className="flex">
            <Avatar className="border">
              <AvatarImage src="/u1.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <Avatar className="-ml-3 border">
              <AvatarImage src="/u2.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <Avatar className="-ml-3 border">
              <AvatarImage src="/u3.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <Avatar className="-ml-3 ">
              <AvatarFallback className="bg-primary text-primary-foreground">+50k</AvatarFallback>
            </Avatar>
          </div>

          <p className="text-sm text-white opacity-70">
            Trusted by industry professionals
          </p>

        </div>

      </div>
    </div>
  )
}
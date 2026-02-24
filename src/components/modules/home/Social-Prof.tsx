import {
  Globe,
  Zap,
  Network,
  Gem,
  Rocket,
} from "lucide-react"

const companies = [
  { name: "GlobalCorp", icon: Globe },
  { name: "PowerSys", icon: Zap },
  { name: "Nexus", icon: Network },
  { name: "Luxe", icon: Gem },
  { name: "StarJump", icon: Rocket },
]

export default function SocialProof() {
  return (
    <section className="border-y bg-muted/40">
      <div className="container py-10 space-y-6">

        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by industry leaders
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 opacity-70 grayscale transition hover:grayscale-0">

          {companies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-lg font-semibold text-muted-foreground"
            >
              <Icon className="h-6 w-6" />
              {name}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
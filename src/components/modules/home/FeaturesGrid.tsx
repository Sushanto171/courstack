import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, BadgeCheck, Users } from "lucide-react"

const features = [
  {
    title: "Advanced Analytics",
    description:
      "Track learner progress, identify skill gaps, and measure ROI with our comprehensive dashboard.",
    icon: BarChart3,
  },
  {
    title: "Certified Content",
    description:
      "Access thousands of accredited courses from top universities and industry leaders.",
    icon: BadgeCheck,
  },
  {
    title: "Role-Based Paths",
    description:
      "Customized learning journeys tailored to specific job roles and career aspirations.",
    icon: Users,
  },
]

export default function FeaturesGrid() {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto space-y-12 px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Why Choose Courstack?
          </h2>

          <p className="text-lg text-muted-foreground">
            We provide more than just courses. We provide a complete ecosystem
            for enterprise growth.
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="transition-shadow hover:shadow-md"
            >
              <CardHeader className="space-y-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <CardTitle className="text-xl">
                  {title}
                </CardTitle>

              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>

            </Card>
          ))}

        </div>
      </div>
    </section>
  )
}
import { CourseCard } from "@/components/shared/CourseCard"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturedCourses() {

  const courses = [
  {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    category: "Development",
    rating: 4.8,
    ratingStars: 4.5, // for half star logic
    instructor: {
      name: "Dr. A. Smith",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOBPrzPmXdjye8tG89C40nUPGWPG7KQiAkHcam8yrs_kKJwFAKi7Kj9hthSK1UmLb4nABBYAaqCRXkXUPGpqueizlmbiZuUMdHOo2hL3hb7AZVapFW0BSu_NUZbzqQJrDXa0g5Zwj5rRpLJyn0r7XAUrvVFvQo_Tp7mtGgFXz4nwCQ4SmdIIn9CKeGr8IKP7K7d4-OSWBPlU1gL5NEx_n5s0Wl9c0HX2sAhlNsWV7K_kdyPh3dHsb5PNJillqGqza2lWGoGZq7cj4",
    },
    price: 89,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGbkcUpEqR1CqHofD0ezjW6Z2v9xAjDSiIaQSFIPhMzXzpAHYhBFGDamVUfravyaY95rUjasp9cjIXR5CK80yR1zMdKBA00mtJlMdh08rpt-fkJngkAEQbJ95Gu5x5gwi0Dqqpu-6K2Hr3e6FMxwveYbGSjluOMxVXcC8s6hMhqlG8LOdBNa9H6RfCw4kxvT9SZYC1EpCyNF1XV4_P7uoue1Brmedd9CVH4fGqHOy47a8IEBRdOWjAKVlFzDDmRkQIsz3KD37AP-o",
  },
  {
    id: 2,
    title: "Data Analytics for Business Managers",
    category: "Data Science",
    rating: 4.2,
    ratingStars: 4,
    instructor: {
      name: "Sarah J.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxeUQCq3HYtr2kvY1Cv8sdgpepwZdk4yjH08vaZREcuS_YTL9eEpvWWuchbI3tqPHFeEzxaWBmJMPQTzSvUDbib7dSOadOfApwV6Ngch7cyYqvadpzpUZQGzccATo-ncaNfBibB1aO6hKxMMJc7KYXHZ8iJpGrkDtmcIseV0g6z7AbuDmLhH80N0dPDcw0k40rsg_euJr0rybhFFz1m7lhFzcB9JptsFFlaD4YdZgvrLoaeDOdVt5xWgmWaVnWX_ytWWciwUu60yM",
    },
    price: 120,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJU3VCoOm6BzowSlGZBxL80e3dH1dSNaZoPmsZPcyr8rPt1bBgdSp0MldIJwcZ2IHIJrF8pbSsHnH6LPOJ35Q-XuSBqwRh9YjN_UrUFNyz_ltdOJErqxECMay0AP_D2vwt6rqJCeQy2ujxqZCsx3OwF5MnpYIJa0VCpux_jFkhwjxEWdimkxGMOr7u2pdiqpMRhAQeVuB6rESMyGXjwvOHzC3r2HuD40dldfX6aXaAKTsFVyFvEKYliJehdr7E2ZBHBymKxc1m21w",
  },
  {
    id: 3,
    title: "Digital Markethttpsing Masterclass 2024",
    category: "Marketing",
    rating: 5.0,
    ratingStars: 4,
    instructor: {
      name: "Emily R.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsKkusRO4hCy_5MHecDy4br-iEksjvD7pQGdw2YiJaU7Z-yFcl9woH2MFYna321ByZq6xBX4HcmJrqoBL_nV5VNuDR3sheVRGcpHcmL8fCwNdI8FNo6ML2dZRST1yAzf_oacdpZV_6-XBWdbTiff1LhhmvPSpLXLXWPPi7jXvbEIFdk6YR7fvg5agtt01nxVAB33gHguYQGS7sd9rGbIGpUDqfkUYRiCZbKd0-I_9tXFbKA9IX6kNk4lmSyABfE6oDS4wNK1fEXHE",
    },
    price: 65,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqWvlRm6RoMFkjXlR0JBcUNNf0j9w79y2EncqgBw3Au7GdklDTQgrtvWoSlYngWI0WFQXEe7LwZH4F_-KtwN0CeIEQyX5_GySy9OGvQeCysIpYMBiI4B7FCyPCdCKECyXw_7wBxeC4PyYUM80LYcMo_ZSm0-S4Q-Ydto1jfuRRFNsHWdKNz45L3E1ehrsaFPCYNitHbiFPlH5OUzClB-nmYUM7OaC_9SmMSf92BLrOc1oMJ_H683BL_WLuz_WsqXwkmIAaVngzEGc",
  },
  {
    id: 4,
    title: "UI/UX Design Bootcamp",
    category: "Design",
    rating: 4.6,
    ratingStars: 4.5,
    instructor: {
      name: "Michael T.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsKfvhjv0xRZhq8d3-_MeJgvJWNsJRiRn28furJ0qfZ_Fk8TyDWDh39jLCylpdKokp0AdfgOQH3jMcayVSVwCpfA_Ea07DywDkW4oh1tdzPdF0Nc_tfqP1fHIMXAk6-IS0ZlpHhBMiwF1RRMR-G6QmKu_ddnyNdplmM9hxIHQqm2Sn-6j_-Bxg4GvEeei-7WpkIm8k0Whhrb1WtK69rmtkGEvcSd_9rf36NSO9qAb_JdhUGqpcdSGU2cdRLbONwvE1yoL6X9eF1A",
    },
    price: 75,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfsdcXTc17rRZhq8d3-_MeJgvJWNsJRiRn28furJ0qfZ_Fk8TyDWDh39jLCylpdKokp0AdfgOQH3jMcayVSVwCpfA_Ea07DywDkW4oh1tdzPdF0Nc_tfqP1fHIMXAk6-IS0ZlpHhBMiwF1RRMR-G6QmKu_ddnyNdplmM9hxIHQqm2Sn-6j_-Bxg4GvEeei-7WpkIm8k0Whhrb1WtK69rmtkGEvcSd_9rf36NSO9qAb_JdhUGqpcdSGU2cdRLbONwvE1yoL6X9eF1A",
  },
];

  return (
    <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">

      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold">Featured Courses</h2>
          <p className="text-muted-foreground">
            Hand-picked courses to advance your career.
          </p>
        </div>

        <Link className="group flex items-center font-semibold text-primary hover:text-primary-dark" href="#"> View all courses <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" /> </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c, i) => (
          <CourseCard key={i} {...c} />
        ))}
      </div>

    </section>
  )
}
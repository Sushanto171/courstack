import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-16 sm:py-24 lg:py-32">
      {/* Background overlay image */}
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-primary object-cover opacity-20"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBH0pP7dUwu_RQ4GLLq8LV10yMHaaczwMGGXzvJYw_4itISlC7HJC6KDIJS5RWTl-ZdgaIDTZYISxKZCACnRmoaIusK-biiNQvWiPtDmj5B5tXH6t5leXWd0WKAWsIJdw4qSJeWu4t4dTur-kZjMkYENx73lDLvhrlbfrSWzCEu8guqa6mpwC9trudar55U2fZG-J1e4hqV1AYgr32hieWaJx3FjoRKiPyxvFmczUMr_ROhWhp5oIIhvAug76gFPaL3x2GFFL6J6SE')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your workforce?
          </h2>
          <p className="mt-6 text-lg leading-8 text-indigo-100">
            Join the leading enterprises that trust Courstack for their employee
            development and training needs. Start your free trial today.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <Link
              href="#"
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link
              href="#"
              className="text-sm  px-8 py-3 border  rounded-md font-semibold leading-6 text-white hover:text-indigo-100 flex items-center gap-1 "
            >

              Contact Sales <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
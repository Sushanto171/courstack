import RegisterForm from "@/components/modules/auth/RegisterForm";
import RegisterHero from "@/components/modules/auth/RegisterHero";

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      {/* <RegisterHeader /> */}

      <main className="flex items-center justify-center">
        <div className="w-full grid lg:grid-cols-12 bg-card shadow-sm overflow-hidden">

          <div className="hidden lg:block lg:col-span-5">
            <RegisterHero />
          </div>

          <div className="lg:col-span-7">
            <RegisterForm />
          </div>

        </div>
      </main>

    </div>
  )
}
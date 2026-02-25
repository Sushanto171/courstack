import LoginForm from "@/components/modules/auth/LoginForm";
import { School, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen font-display antialiased">
      <div className="flex flex-1 w-full overflow-hidden">
        {/* Left Side: Branding & Visual */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 bg-primary/5 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8MydMyH6-QZ86LP7qkrm8Oj2cdcMGeWH3mmPCkA23w_tKSaGdGajtVKbCRBC4ZI5cNW_G7QmXahs7V1L4WySiQNXMtuIXcFaNBufrlAnR5fBtyaH0k2n4kz7TBdaRWvxzcFoTXIXzXe4780Yq2Vg-VKgjTau5BCVsTwaenPYNxtb3P8KlVWUFISjYRYLR8xcBWzo046YgS7QIzLzZjoOogYuf9wNfn-RFwqurPMC-98DfDaOZ4nDt6emBMBdYa5gVyI1M-x-IyVU")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full justify-between">

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
            {/* Value Proposition */}
            <div className="flex flex-col gap-6 max-w-lg mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Empower your team with next-gen learning
              </h1>
              <p className="text-lg text-white/90 font-medium leading-relaxed">
                Courstack provides role-based dashboards and advanced analytics
                for your enterprise. Unlock potential with data-driven insights.
              </p>

              {/* Reviews / Trust */}
              <div className="flex items-center gap-4 mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex -space-x-3">
                  <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa3ZyNdCs4UOCz1SqBImzaR6vSSj_dVC_ppPyrWmWPu7lqlvOZGzAes7LQoakpCtiVnlqIVamA-Ce3F2QzlQ6x2AENyFkeFrc31nJhS3zgNPLXq9rkdnzlPlcb_P3MKrJ06nut2r74Rr0SGKIaks6JPMjwKiFhgsXYy3iG7om82uKR243i1ImOn_4CAgYESMFBC59_Ir1bIDVtQlbeIrWPtCGgK2XgWMeMenmUzhN3zoBEWEHw6wXTJ5TiA-hW07nPdDiMcxuDNHA" />
                  <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM_5ktoVQAnCGhGB1dp8mxjiDrE5VMskS_3EWVQbLVCtW2Iv7kAgdEkGgDu-Zv3B_R0odNIjVa64a-_FbWdq0QlHuk0U5ZUVWz7rLD76RpXqbh-u7hatmx_3R4ObE8q7yehLp21cwrRGgg5yAMrDxdXfRnNasZDko2cBQR798PzApxaBbTey0n1fnuWgSi1j73KR5UABevK2acv_kZzxSQbhOYgsixxZM46iEBvEmpBoyaudleJNwRYmo_7xU6DLn-VuDn-lhSC_Y" />
                  <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpVZpF5BKbSBmKW94kqkjhiZRARTF9dzn1FqsBQu1DnNre9WBe_e3J1TtPcJg4nU6M3PEeVg5MC5qqCY7Ga6Psg0CQi7do1CA5o9qbVlnId4eCxUHdnqTE00IIz60ksxvB5v1ZuhoGV5WubaT-oRAHKGTTVW3Xupw-pgQMFBTF073u37Sb9T9v3j_JyRT_d-cp_gKLA7xRbqy-A8Up1Gyqd5_tuoSB8kCQELgFfVlv2EcAH2DyvHEnaorz4Bb6TIHR8dW_dClv7wE" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-white text-primary flex items-center justify-center text-xs font-bold shadow-sm">+2k</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[16px] fill-current"
                      >
                        <Star fill="yellow" size={16} />
                      </span>
                    ))}
                  </div>
                  <span className="text-white text-sm font-medium">
                    Trusted by leading teams
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex gap-6 text-white/60 text-sm font-medium">
              <a className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex w-full lg:w-1/2 flex-col items-center justify-center  dark:bg-background-dark overflow-y-auto">
          <div className="w-full max-w-[440px] flex flex-col gap-8 ">
            {/* Mobile Logo */}
            <div className="lg:hidden ">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white">
                  <School size={16} />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Courstack
                </span>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-slate-900  tracking-tight">
                Welcome back
              </h2>
              <p className="opacity-80 ">
                Please enter your details to sign in.
              </p>
            </div>

            <LoginForm />
            <div className="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">
              Don&apos;t have an account?{" "}
              <Link className="font-bold text-primary hover:text-primary-hover transition-colors" href="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Optional Avatar component
function Avatar({ src }: { src: string }) {
  return <Image src={src} alt="avatar" width={40} height={40} className="rounded-full border-2 border-white object-cover" />;
}
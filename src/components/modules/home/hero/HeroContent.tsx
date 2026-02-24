import { Button } from "@/components/ui/button";
import React from "react";
import { HeroBadge } from "./HeroBadge";

export const HeroContent: React.FC = () => (
  <div className="flex flex-col gap-6 text-left">
    <HeroBadge text="New: AI-Powered Career Paths" />
    <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-[1.1]">
      Master Any Skill with <span className="text-primary">Courstack</span>
    </h1>
    <p className="max-w-xl text-lg text-slate-600 sm:text-xl">
      Unlock your professional potential with role-based learning paths and advanced analytics designed for modern enterprises.
    </p>

    <div className="flex flex-wrap gap-4 pt-2">
      < Button
        className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        Browse Courses
      </Button>
      <Button className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-base font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2">
        For Business
      </Button>
    </div>

    {/* Avatars */}
    <div className="flex items-center gap-4 pt-4 text-sm text-slate-500">
      <div className="flex -space-x-2">
        {["avatar1.jpg", "avatar2.jpg", "avatar3.jpg"].map((src, idx) => (
          <div
            key={idx}
            className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-600">
          +2k
        </div>
      </div>
      <p>Trusted by 2,000+ teams worldwide</p>
    </div>
  </div>
);
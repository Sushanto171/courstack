import React from "react";
import { Play } from "lucide-react";

export const HeroImage: React.FC = () => (
  <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
    {/* Decorative blobs */}
    <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl" />

    {/* Main Image */}
    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-slate-100">
      <div className="aspect-video w-full bg-slate-100 relative">
        <img
          className="object-cover w-full h-full"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD24IIUSF6QjRiSxVBmksZCDWcSb4ARUVRGrTYy6AXyQq7-uT5s5vUdAyRmq1_Bx1usFvodUnsPuFLKuP_F6KBRhY-YqcViXJ2uB2-fkrMVcxfAPzLLILGD_VZ8mGV9uvC-Uz_Akx2irVZry_vHe1iJx2-yhi5qwwjRfuVjZpwcevPt_Pl3oPqpR9vKOuPUIQydy-K0BE-VpDc9U3eicbQnLXImF5ND830rBzLxUJaVMYuo6_QFJ5iPix1AfLahJEQG7Wi99LJppdE"
          alt="Students collaborating on laptops in a modern office"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
                Live Now
              </span>
              <span className="text-sm font-medium opacity-90">
                Enterprise Leadership Workshop
              </span>
            </div>
            <h3 className="text-xl font-bold">Scaling Agile Teams Effectively</h3>
          </div>
          <button className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary transition-all">
            <Play size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
);
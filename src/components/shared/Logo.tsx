import { School } from "lucide-react";

export default function Logo() {
  return (

    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white">
        <span className="material-symbols-outlined text-2xl"><School /></span>
      </div>
      <span className="text-2xl font-black text-white tracking-tight">
        Courstack
      </span>
    </div>
  );
}
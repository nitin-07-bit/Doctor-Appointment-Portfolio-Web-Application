import { useState } from "react";
import { ArrowUp, BrainCircuit } from "lucide-react";

export default function Footer() {
  const [imageError, setImageError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#112233] text-white overflow-hidden py-14 mt-12 z-10 border-t border-[#1E3E62]/40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Branding & clinic */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden border border-white/10 shrink-0">
            {!imageError ? (
              <img
                src="https://nitishneuro.com/wp-content/uploads/2022/10/neuro-275x275-1.jpg"
                alt="Neuro Centre Patna Logo"
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
              />
            ) : (
              <BrainCircuit className="h-5 w-5 text-[#2D9CDB]" />
            )}
          </div>
          <div>
            <h3 className="font-sans font-semibold text-base leading-none">
              Dr. Nitish Kumar
            </h3>
            <p className="text-[10px] uppercase font-mono tracking-widest text-[#A5C1D9] mt-1">
              Consultant Neurologist Clinic
            </p>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-center md:text-left text-xs text-gray-400 font-sans">
          <p>© {new Date().getFullYear()} Dr. Nitish Kumar. All Rights Reserved.</p>
          <p className="text-[10px] text-gray-500 mt-1 font-mono uppercase tracking-wide">
            Patna, Bihar • Academic Medical Excellence
          </p>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all cursor-pointer shadow-sm active:scale-95 group"
          aria-label="Scroll back to top of the page"
          title="Back to Top"
          id="btn-scroll-top"
        >
          <ArrowUp className="h-4.5 w-4.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}

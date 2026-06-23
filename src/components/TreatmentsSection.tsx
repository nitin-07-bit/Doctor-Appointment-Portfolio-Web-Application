import { useState } from "react";
import { Brain, Sparkles, Check, Activity } from "lucide-react";
import { TREATMENTS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function TreatmentsSection() {
  const [activeId, setActiveId] = useState(TREATMENTS[0].id);

  const activeTreatment = TREATMENTS.find((t) => t.id === activeId) || TREATMENTS[0];

  return (
    <section
      id="treatments"
      className="relative py-12 md:py-16 overflow-hidden z-10 bg-[#FAF9F6]"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#EDF4F9]/40 blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0284C7] px-2.5 py-1 rounded bg-[#0284C7]/10 inline-block border border-[#0284C7]/10">
              Area of Specialization
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-tight text-[#1B365D] mt-4">
              Neurological Conditions & Care
            </h2>
          </div>
          <p className="text-[#5E7285] text-sm font-medium uppercase tracking-widest font-mono shrink-0 hidden md:block">
            Comprehensive Diagnostics
          </p>
        </div>

        {/* 3-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Conditions Selector Menu (Left) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5" id="treatments-conditions-list">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5E7285] mb-2 px-1">
              Select Condition
            </h3>
            {TREATMENTS.map((treatment) => {
              const isActive = treatment.id === activeId;
              return (
                <button
                  key={treatment.id}
                  onClick={() => setActiveId(treatment.id)}
                  onMouseEnter={() => setActiveId(treatment.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-medium transition-all duration-300 relative focus:outline-none flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "text-[#0284C7] bg-[#EDF4F9] font-semibold shadow-sm border border-[#D1E2E8]/60"
                      : "text-[#475569] hover:text-[#1B365D] hover:bg-[#EDF4F9]/30"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Activity
                      className={`h-4.5 w-4.5 shrink-0 transition-transform group-hover:scale-115 ${
                        isActive ? "text-[#0284C7]" : "text-[#5E7285]"
                      }`}
                    />
                    <span className="text-sm tracking-tight">{treatment.name}</span>
                  </span>
                  
                  {/* Subtle Right Arrow indicator on hovered items */}
                  <span
                    className={`text-[#0284C7] transition-all duration-300 ${
                      isActive ? "translate-x-0 opacity-100" : "translate-x-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Column 2: Large Circular Image Canvas (Center) */}
          <div className="lg:col-span-4 flex justify-center items-center relative py-6" id="treatments-circular-image">
            {/* Spinning decorative orbit circles */}
            <div className="absolute w-80 h-80 rounded-full border border-dashed border-[#5E7285]/15 animate-[spin_50s_linear_infinite] pointer-events-none" />
            <div className="absolute w-84 h-84 rounded-full border border-[#D1E2E8]/40 pointer-events-none" />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-[0_20px_45px_rgba(30,62,98,0.06)] border-4 border-white z-10 bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={activeTreatment.image}
                  alt={activeTreatment.name}
                  className="w-full h-full object-cover animate-[none]"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
            
            {/* Tiny accent micro-blob */}
            <div className="absolute -bottom-1 right-12 h-6 w-6 rounded-full bg-[#0284C7]/15 border border-[#0284C7]/30 flex items-center justify-center text-[#0284C7] z-20 shadow-sm">
              <Brain className="h-3 w-3" />
            </div>
          </div>

          {/* Column 3: Diagnostic Details Panel (Right) */}
          <div className="lg:col-span-12 xl:col-span-5" id="treatments-condition-details">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-[#0284C7]" />
                  <span className="text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-[#5E7285]">
                    Clinical Profile
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-semibold tracking-tight text-[#1B365D] mb-4 leading-tight">
                  {activeTreatment.title}
                </h3>

                <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {activeTreatment.description}
                </p>

                {/* Common Symptoms Block */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#1B365D] mb-3">
                    Physiological Indicators / Symptoms
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {activeTreatment.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-[#475569] leading-tight">
                        <span className="h-4.5 w-4.5 shrink-0 rounded bg-[#EDF4F9] text-[#0284C7] flex items-center justify-center font-bold">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dr. Kumar's Specific Medical Approach */}
                <div className="p-4 rounded-xl border border-[#D1E2E8] bg-white">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#0284C7] mb-1.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7]" />
                    Therapeutic & Care Approach
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {activeTreatment.careApproach}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

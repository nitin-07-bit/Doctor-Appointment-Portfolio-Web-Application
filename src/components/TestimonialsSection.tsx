import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3500); // 3.5 seconds comfortable reading interval
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]); // ActiveIndex added as dependency so manual interaction restarts full 3.5s window

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-12 md:py-16 overflow-hidden z-10 bg-[#FAF9F6]"
    >
      <div className="mx-auto max-w-4xl px-6 w-full">
        {/* Distinguished slider container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-[#EDF4F9]/60 rounded-3xl px-12 sm:px-20 py-10 sm:py-14 border border-[#D1E2E8]/90 text-center shadow-[0_12px_40px_rgba(30,62,98,0.01)] hover:shadow-[0_20px_50px_rgba(30,62,98,0.055)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
          id="testimonials-card-wrapper"
        >
          {/* Subtle Quote Accent Behind */}
          <div className="absolute top-4 left-6 text-[#5E7285]/15 font-serif text-9xl leading-none select-none pointer-events-none">
            “
          </div>

          {/* Left Floating Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white text-[#1B365D] hover:text-[#0284C7] flex items-center justify-center border border-[#D1E2E8]/80 hover:border-[#0284C7]/30 transition-all cursor-pointer shadow-md active:scale-95 z-20 group"
            aria-label="Previous testimonial"
            id="testimonial-prev-arrow"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Floating Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white text-[#1B365D] hover:text-[#0284C7] flex items-center justify-center border border-[#D1E2E8]/80 hover:border-[#0284C7]/30 transition-all cursor-pointer shadow-md active:scale-95 z-20 group"
            aria-label="Next testimonial"
            id="testimonial-next-arrow"
          >
            <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex flex-col items-center relative z-10">
            {/* Top Quote Icon */}
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#0284C7] shadow-sm border border-[#D1E2E8] mb-6">
              <Quote className="h-4.5 w-4.5" />
            </div>

            <span className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-[#5E7285] mb-2">
              Patient Experiences
            </span>

            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-[#1B365D] mb-8">
              Verified Patient Journeys
            </h2>

            {/* Main Sliding Content */}
            <div className="min-h-[220px] sm:min-h-[190px] w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {TESTIMONIALS.map((t, idx) => {
                  if (idx !== activeIndex) return null;
                  return (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center"
                    >
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-5">
                        {Array.from({ length: t.rating }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="h-4.5 w-4.5 text-[#0284C7] fill-current"
                          />
                        ))}
                      </div>

                      {/* Diagnostic Review Quote */}
                      <p className="text-[#475569] text-base md:text-lg italic leading-relaxed px-2 md:px-8 font-sans font-medium mb-8 max-w-2xl">
                        "{t.text}"
                      </p>

                      {/* Patient Avatar (Initials) & Identification Panel */}
                      <div className="flex items-center gap-3.5">
                        <div className="h-12 w-12 rounded-full bg-[#EDF4F9] text-[#1B365D] font-semibold text-sm border border-[#D1E2E8]/60 flex items-center justify-center font-mono shadow-sm">
                          {t.initials}
                        </div>
                        <div className="text-left">
                          <h4 className="font-sans font-semibold text-[#1B365D] text-sm">
                            {t.name}
                          </h4>
                          <p className="text-xs font-mono tracking-wider text-[#5E7285] mt-0.5">
                            Patient • {t.city}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Centered Dot Indicators */}
            <div className="flex items-center gap-2 mt-8 z-10 border-t border-[#D1E2E8]/50 pt-5 w-full justify-center">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? "w-6 bg-[#0284C7]" : "w-1.5 bg-[#5E7285]/35 hover:bg-[#5E7285]/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";
import { motion } from "motion/react";

export default function MessageSection() {
  return (
    <section
      id="message"
      className="relative py-10 md:py-14 overflow-hidden z-10 bg-[#FAF9F6]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
        {/* Large container card built using a very lightly colored grey/blue foundation */}
        <motion.div
          whileHover={{ y: -6, bg: "rgba(237, 244, 249, 0.55)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-[#EDF4F9]/45 rounded-3xl p-8 md:p-14 border border-[#D1E2E8]/80 overflow-hidden shadow-[0_24px_60px_rgba(30,62,98,0.02)] hover:shadow-[0_30px_70px_rgba(30,62,98,0.07)] hover:border-[#0284C7]/25 transition-all duration-500 max-w-4xl mx-auto"
        >
          
          <div className="relative z-10 flex flex-col items-start">
            <div className="relative mb-6">
              {/* Large quote symbol colored in elegant blue accent with soft opacity */}
              <span className="absolute -top-7 -left-5 text-[#0284C7] opacity-15 select-none font-serif text-8xl leading-none">
                “
              </span>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-[#D1E2E8] text-[#0284C7] relative z-10 cursor-pointer"
              >
                <Quote className="h-5 w-5" />
              </motion.div>
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5E7285] font-mono">
              A Message of Assurance
            </span>
            
            <blockquote className="text-xl md:text-2xl font-sans tracking-tight text-[#1B365D] mt-3 font-medium leading-relaxed italic">
              “Your neurological health is our highest priority. We combine advanced diagnostic technology with a deeply compassionate approach to care.

Every patient receives a tailored treatment plan designed to restore their quality of life, explained in simple, clear terms so you and your family feel confident every step of the way.”
            </blockquote>

          
            <div className="mt-8 flex flex-col pt-6 border-t border-[#D1E2E8]/50 w-full">
              <span className="font-sans font-semibold text-[#1B365D] text-md">
                Dr. Nitish Kumar, DM (Neurology)
              </span>
              
            </div>
          </div>

          {/* Abstract corner background shapes */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0284C7]/5 to-transparent rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

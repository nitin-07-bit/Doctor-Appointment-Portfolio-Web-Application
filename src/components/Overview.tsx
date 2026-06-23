import { motion } from "motion/react";
import { GraduationCap, Award, Users } from "lucide-react";

export default function Overview() {
  const qualifications: { inst: string; degree: string; desc?: string; }[] = [
    {
      inst: "NIMHANS, Bangalore",
      degree: "DM (Neurology)",
      
    },
    {
      inst: "KEM Hospital, Mumbai",
      degree: "MBBS",
      
    },
  ];

  return (
    <section
      id="overview"
      className="relative py-10 md:py-14 overflow-hidden flex items-center justify-center z-10 bg-white"
    >
      {/* Background elegant floating patterns */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-[5%] w-72 h-72 rounded-full bg-[#EDF4F9]/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-[#FAF9F6]/60 blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Doctor Portrait */}
        <div className="lg:col-span-5 flex justify-center relative md:px-8" id="overview-left-img">
          {/* Floating Behind dot pattern block */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#5E7285_1px,transparent_1px)] [background-size:12px_12px] opacity-25 -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#0284C7_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-15 -z-10" />

          {/* Portrait Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(30,62,98,0.06)] hover:shadow-[0_28px_60px_rgba(2,132,199,0.14)] border-4 border-white bg-[#EDF4F9] transition-shadow duration-500 cursor-pointer"
          >
            <img
              src="https://www.neurocentrepatna.com/img/doctor_images/_MG_2459_-_M.jpg"
              alt="Dr. Nitish Kumar, Consultant Neurologist"
              className="w-full h-full object-cover grayscale-[15%] brightness-[102%] hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Subtle light overlay border */}
            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
          </motion.div>

          {/* Circular float details widget */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-4 -left-2 bg-white/95 backdrop-blur-sm shadow-lg border border-[#D1E2E8] px-4 py-3 rounded-xl flex items-center gap-3 cursor-pointer"
          >
            <div className="h-2 w-2 rounded-full bg-[#0284C7] animate-ping" />
            <div>
              <p className="text-[10px] font-mono tracking-widest text-[#5E7285] uppercase leading-none">Status</p>
              <p className="text-xs font-sans font-semibold text-[#1B365D] mt-0.5">Active Consultations</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Doctor Details */}
        <div className="lg:col-span-7 flex flex-col justify-center" id="overview-right-content">
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0284C7]"
          >
            Elite Neurological Care
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-[#1B365D] mt-3"
          >
            Dr. Nitish Kumar
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-[#475569] mt-2 font-sans"
          >
            Consultant Neurologist
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 border-t border-[#EDF4F9]"
          />

          {/* Grid of basic parameters - Experience, Volume */}
          <div className="grid grid-cols-2 gap-6 my-6">
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              className="flex items-start gap-3.5 group cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDF4F9] text-[#475569] group-hover:bg-[#0284C7] group-hover:text-white transition-all shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1B365D]">20+</p>
                <p className="text-xs font-medium text-[#5E7285] uppercase tracking-wider font-sans mt-0.5">
                  Years of Experience
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              className="flex items-start gap-3.5 group cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDF4F9] text-[#475569] group-hover:bg-[#0284C7] group-hover:text-white transition-all shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1B365D]">100K+</p>
                <p className="text-xs font-medium text-[#5E7285] uppercase tracking-wider font-sans mt-0.5">
                  Patients Managed
                </p>
              </div>
            </motion.div>
          </div>

          {/* Qualifications Lists */}
          <div className="mt-8 flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5E7285] font-sans">
              Clinical Qualifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualifications.map((q, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-xl border border-[#D1E2E8] bg-white shadow-[0_4px_20px_rgba(30,62,98,0.02)] hover:shadow-[0_12px_24px_rgba(30,62,98,0.05)] relative group hover:border-[#0284C7]/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="h-7 w-7 rounded-md bg-[#EDF4F9] flex items-center justify-center text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-300">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <span className="font-sans font-semibold text-[#1B365D] text-sm">
                      {q.degree}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-[#475569] font-mono leading-tight">
                    {q.inst}
                  </h4>
                  {q.desc && (
                    <p className="text-xs text-[#5E7285] leading-relaxed mt-1.5 font-sans">
                      {q.desc}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

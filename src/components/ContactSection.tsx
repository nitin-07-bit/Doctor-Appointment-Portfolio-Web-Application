import { Phone, MapPin, Calendar, Clock, MessageSquareCode } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact-us"
      className="relative py-12 md:py-16 overflow-hidden z-10 bg-[#FAF9F6]"
    >
      {/* Abstract background glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#EDF4F9]/30 blur-3xl pointer-events-none -z-10" />

      {/* Main bounded container */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0284C7] px-2.5 py-1 rounded bg-[#0284C7]/10 inline-block border border-[#0284C7]/10">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-tight text-[#1B365D] mt-4">
            Clinic Access & Information
          </h2>
          <p className="text-[#5E7285] text-sm md:text-base leading-relaxed mt-3">
            Reach out via phone or WhatsApp for registrations, emergency queries, and consultation details.
          </p>
        </div>

        {/* Clean 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-11 lg:gap-14 items-stretch" id="contact-three-columns">
          
          {/* Column 1: Contact Methods */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8 h-full" id="contact-col-methods">
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1B365D] border-b border-[#D1E2E8] pb-3 font-sans">
                Contact Information
              </h3>
              
              {/* Phone Channel */}
              <a
                href="tel:+919334837757"
                className="flex items-start gap-4 p-4 rounded-xl border border-[#D1E2E8] hover:border-[#0284C7]/40 bg-[#FDFBF7]/80 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EDF4F9] text-[#1B365D] group-hover:bg-[#0284C7] group-hover:text-white transition-all shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#5E7285]">
                    Primary Phone Line
                  </h4>
                  <p className="text-sm font-sans font-semibold text-[#1B365D] tracking-tight group-hover:text-[#0284C7] mt-1">
                    +91 93348 37757
                  </p>
                  <p className="text-xs text-[#5E7285] mt-0.5">Click to dial clinic directly</p>
                </div>
              </a>

              {/* WhatsApp Channel */}
              <a
                href="https://wa.me/917061249390"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-[#D1E2E8] hover:border-[#0284C7]/40 bg-[#FDFBF7]/80 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EDF4F9] text-[#1B365D] group-hover:bg-[#0284C7] group-hover:text-white transition-all shrink-0">
                  <MessageSquareCode className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#5E7285]">
                    Instant WhatsApp
                  </h4>
                  <p className="text-sm font-sans font-semibold text-[#1B365D] tracking-tight group-hover:text-[#0284C7] mt-1">
                    +91 70612 49390
                  </p>
                  <p className="text-xs text-[#5E7285] mt-0.5">Start WhatsApp chat securely</p>
                </div>
              </a>
            </div>

            {/* Clinic physical address block */}
            <div className="flex items-start gap-3.5 pt-6 border-t border-[#D1E2E8]/60">
              <div className="h-10 w-10 rounded-lg bg-[#EDF4F9] flex items-center justify-center text-[#0284C7] shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#1B365D] font-sans">Specialist Clinic Location</h4>
                <p className="text-xs text-[#475569] leading-relaxed mt-1.5 font-sans">
                  RK Avenue Road Dinkar Golamber, 200 meter east of Dinkar Golamber, Rajendra Nagar, Patna, Bihar 800016
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Embedded Google Map */}
          <div className="lg:col-span-4 flex flex-col h-full" id="contact-col-map">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1B365D] border-b border-[#D1E2E8] pb-3 mb-6 font-sans">
              Geographic Map Location
            </h3>
            <div className="flex-1 min-h-[320px] rounded-2xl overflow-hidden border border-[#D1E2E8] bg-[#FDFBF7] shadow-[0_8px_30px_rgba(30,62,98,0.03)] relative">
              <iframe
                title="Dr Nitish Kumar Neurologist - Patna Location Google Map"
                src="https://maps.google.com/maps?q=Dr.%20NITISH%20KUMAR%20DM%20Neuro%20(NIMHANS),%20Rajendra%20Nagar,%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 pointer-events-auto grayscale opacity-[0.92] hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Column 3: Clinic Opening Hours */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full" id="contact-col-hours">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1B365D] border-b border-[#D1E2E8] pb-3 mb-6 font-sans">
                Opening Hours
              </h3>
              
              <div className="p-6 rounded-2xl bg-[#EDF4F9]/30 border border-[#D1E2E8]/65 flex flex-col gap-5">
                {/* Mon - Fri */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-white rounded-xl shadow-sm border border-[#D1E2E8]/40 flex items-center justify-center text-[#0284C7]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-[#1B365D]">Monday – Friday</h4>
                    <span className="text-[10px] uppercase font-mono font-bold text-[#5E7285] tracking-widest mt-0.5 inline-block">Weekly Consultations</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pl-12">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-[#5E7285]" />
                    <div>
                      <p className="text-sm font-sans font-semibold text-[#1B365D]">09:00 AM – 06:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Saturday */}
                <div className="border-t border-[#D1E2E8]/40 pt-4 mt-1 flex items-center gap-3">
                  <div className="h-10 w-10 bg-white rounded-xl shadow-sm border border-[#D1E2E8]/40 flex items-center justify-center text-[#0284C7]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-[#1B365D]">Saturday</h4>
                    <span className="text-[10px] uppercase font-mono font-bold text-[#5E7285] tracking-widest mt-0.5 inline-block">Weekend Consultations</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pl-12">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-[#5E7285]" />
                    <div>
                      <p className="text-sm font-sans font-semibold text-[#1B365D]">09:00 AM – 05:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Sunday / CLOSED */}
                <div className="border-t border-[#D1E2E8]/60 pt-4 mt-1 flex items-start gap-4">
                  <div className="h-9 w-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-red-600">Sunday</h4>
                    <p className="text-xs text-red-500 font-mono font-bold mt-1 uppercase tracking-wider leading-none">
                      CLOSED
                    </p>
                    <p className="text-[11px] text-[#5E7285] mt-1.5 font-sans leading-relaxed">
                      Emergency cases can contact standard lines directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Award, GraduationCap, Users, Heart, Shield, Brain, Activity, Stethoscope } from "lucide-react";

interface ChoiceCard {
  id: string;
  frontTitle: string;
  frontIconName: string;
  backMetric: string;
  backTitle: string;
  backDesc: string;
  footerText?: string;
}

const CARDS: ChoiceCard[] = [
  {
    id: "c1",
    frontTitle: "Clinical Experience",
    frontIconName: "Award",
    backMetric: "20+ Years",
    backTitle: "Clinical Practice",
    backDesc: "Over two decades of dedicated neurological consultation, stroke restoration, and neuromuscular diagnosis.",
    footerText: "VERIFIED LEGACY"
  },
  {
    id: "c2",
    frontTitle: "Timely & Accurate Diagnosis",
    frontIconName: "GraduationCap",
    backMetric: "Timely & Accurate Diagnosis",
    backTitle: "Apex Specialization",
    backDesc: "Rapid traige prioritises critical cases for the best possible outcomes.",
    footerText: "APEX EDUCATION"
  },
  {
    id: "c3",
    frontTitle: "Patient Volume",
    frontIconName: "Users",
    backMetric: "100k+",
    backTitle: "Cases Managed",
    backDesc: "An expansive neurological case portfolio diagnosing complex nerve, brain, and spinal disorders.",
    footerText: "CLINICAL TRUST"
  },
  {
    id: "c4",
    frontTitle: "Patient Satisfaction",
    frontIconName: "Heart",
    backMetric: "98.2%",
    backTitle: "Satisfaction Rate",
    backDesc: "Outstanding feedback for diagnostic accuracy, clinical empathy, and patient-first listening.",
    footerText: "PATIENT CHOICE"
  },
  {
    id: "c5",
    frontTitle: "Elite Credentials",
    frontIconName: "Shield",
    backMetric: "15+ Items",
    backTitle: "Board Certifications",
    backDesc: "Formally credentialed across prominent neuro-societies, advanced masterclasses, and medical boards.",
    footerText: "CERTIFIED BOARD"
  },
  {
    id: "c6",
    frontTitle: "Evidence-Based Care",
    frontIconName: "Activity",
    backMetric: "Scientific",
    backTitle: "Modern Protocols",
    backDesc: "Therapeutic interventions formulated strictly under peer-reviewed international guidelines.",
    footerText: "EVIDENCE FIRST"
  },
  {
    id: "c7",
    frontTitle: "Accurate Diagnostics",
    frontIconName: "Brain",
    backMetric: "High Precision",
    backTitle: "Trace Synapses",
    backDesc: "Tracing complex physiological complaints back to precise anatomical and neurovascular roots.",
    footerText: "DIAGNOSTIC CRUCIAL"
  },
  {
    id: "c8",
    frontTitle: "Empathy & Support",
    frontIconName: "Stethoscope",
    backMetric: "Restorative",
    backTitle: "Patient Partnership",
    backDesc: "Fostering standard clinical transparency and a compassionate atmosphere throughout neurological recovery.",
    footerText: "CONTINUOUS SUPPORT"
  }
];

function CardIcon({ iconName }: { iconName: string }) {
  const iconClass = "h-7 w-7 text-[#0284C7] transition-transform duration-300 group-hover:scale-110";
  switch (iconName) {
    case "Award":
      return <Award className={iconClass} />;
    case "GraduationCap":
      return <GraduationCap className={iconClass} />;
    case "Users":
      return <Users className={iconClass} />;
    case "Heart":
      return <Heart className={iconClass} />;
    case "Shield":
      return <Shield className={iconClass} />;
    case "Brain":
      return <Brain className={iconClass} />;
    case "Activity":
      return <Activity className={iconClass} />;
    case "Stethoscope":
    default:
      return <Stethoscope className={iconClass} />;
  }
}

export default function WhyChooseUs() {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    if (flippedCardId === id) {
      setFlippedCardId(null);
    } else {
      setFlippedCardId(id);
    }
  };

  return (
    <section
      id="why-choose-us"
      className="relative py-16 md:py-20 overflow-hidden z-10 bg-[#FAF9F6]"
    >
      {/* 3D Styles Injection for Premium Flip Interactions */}
      <style>{`
        .carousel-perspective {
          perspective: 1000px;
        }
        .transform-preserve {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Background with real medical neurology image and elegant clinical blue-cream overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1600&h=900"
          alt="Neurology background scan"
          className="w-full h-full object-cover grayscale opacity-5"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#FAF9F6]/90 mix-blend-multiply" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10 w-full flex flex-col">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0284C7] inline-block px-3 py-1 rounded bg-[#0284C7]/10 border border-[#0284C7]/20">
            Clinical Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-[#1E3E62] mt-3">
            Trusted Professional Credentials
          </h2>
          
        </div>

        {/* Responsive Grid with 8 Dynamic 3D Perspective Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full" id="why-choose-grid-layout">
          {CARDS.map((card) => {
            const isFlipped = flippedCardId === card.id;
            return (
              <div
                key={card.id}
                className="carousel-perspective h-[240px] md:h-[260px] w-full cursor-pointer group"
                onClick={() => toggleFlip(card.id)}
                onMouseEnter={() => setFlippedCardId(card.id)}
                onMouseLeave={() => setFlippedCardId(null)}
              >
                {/* 3D Inner Card Wrapper */}
                <div
                  className={`relative w-full h-full transform-preserve transition-transform duration-700 ease-out ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  
                  {/* FRONT FACE (Flash Card style with 2-3 words, no Tap to Flip lines!) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-[#E2ECEF] p-6 sm:p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-[0_4px_20px_rgba(30,62,98,0.02)] group-hover:border-[#0284C7]/40 group-hover:bg-[#EDF4F9]/35 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-[#0284C7] to-transparent" />
                    
                    {/* Circle Container centered on the front */}
                    <div className="flex flex-col items-center justify-center gap-5">
                      <div className="h-16 w-16 bg-[#EDF4F9] rounded-2xl border border-[#E2ECEF]/60 flex items-center justify-center shadow-inner group-hover:border-[#0284C7]/30 transition-colors">
                        <CardIcon iconName={card.frontIconName} />
                      </div>
                      
                      {/* Short Title */}
                      <h3 className="text-lg font-sans font-semibold text-[#1E3E62] tracking-tight group-hover:text-[#0284C7] transition-colors leading-tight px-1">
                        {card.frontTitle}
                      </h3>
                    </div>
                  </div>

                  {/* BACK FACE (Details & verification metrics) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#1B365D] border border-[#0284C7]/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-[0_12px_44px_rgba(2,132,199,0.15)]">
                    <div className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-[#0284C7] to-transparent" />
                    
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-bold text-[#2D9CDB] font-sans leading-none tracking-tight">
                          {card.backMetric}
                        </span>
                      </div>
                      
                      <h4 className="text-sm font-semibold text-white font-sans mt-0.5">
                        {card.backTitle}
                      </h4>
                      
                      <p className="text-[#E2ECEF] text-xs leading-relaxed font-sans mt-1">
                        {card.backDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#A5C1D9]">
                      <span>{card.footerText}</span>
                      <span className="text-[#2D9CDB] font-bold">● VERIFIED</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

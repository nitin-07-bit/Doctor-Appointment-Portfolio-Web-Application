import { useState, useEffect } from "react";
import { Phone, Menu, X, BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "message", label: "Message from Doctor" },
    { id: "why-choose-us", label: "Why Choose Us" },
    { id: "treatments", label: "Treatments" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact-us", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Lock scrolling-spy updates during programmatic smooth scrolls
    (window as any).isNavigating = true;
    
    // Highlight the clicked section immediately
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 130; // Height of the sticky combined header rows
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Clear the navigation scroll-spy lock once the animation has finished
      setTimeout(() => {
        (window as any).isNavigating = false;
      }, 850);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-[0_2px_15px_rgba(30,62,98,0.04)]">
      {/* ROW 1: Branding & Contact - Darker Shade */}
      <div className="w-full bg-[#E6F0FA] border-b border-[#D1E2E8]">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden border border-[#D1E2E8]">
              {!imageError ? (
                <img
                  src="https://nitishneuro.com/wp-content/uploads/2022/10/neuro-275x275-1.jpg"
                  alt="Neuro Centre Patna Logo"
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('logo.png')) {
                      target.src = "https://www.neurocentrepatna.com/img/logo.jpg";
                    } else {
                      setImageError(true);
                    }
                  }}
                />
              ) : (
                <BrainCircuit className="h-6 w-6 text-[#0284C7]" strokeWidth={1.8} />
              )}
            </div>
            <div>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-sans text-xl font-semibold tracking-tight text-[#1B365D]">
                  Dr. Nitish Kumar
                </span>
                
              </div>
              <p className="text-xs tracking-wide font-medium text-[#5E7285] uppercase leading-none mt-1">
                Consultant Neurologist & Specialist
              </p>
            </div>
          </div>

          {/* Contact and Hamburger - Desktop has phone link */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919431021422"
              className="hidden sm:flex items-center gap-3 group transition-colors px-4 py-2 rounded-lg bg-white border border-[#D1E2E8] hover:border-[#0284C7]/40"
              id="header-phone-desktop"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#EDF4F9] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-all">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-right">
                <p className="text-[9px] font-mono uppercase tracking-wider text-[#5E7285] leading-none">
                  Doctor's Clinic
                </p>
                <p className="font-sans text-sm font-semibold text-[#1B365D] tracking-tight group-hover:text-[#0284C7]">
                  +91 93348 37757
                </p>
              </div>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#D1E2E8] text-[#1B365D] lg:hidden hover:border-[#0284C7] transition-colors"
              aria-label="Toggle navigation"
              id="header-menu-button"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden w-full border-t border-[#D1E2E8] bg-[#FDFBF7]/98 backdrop-blur-md overflow-hidden shadow-lg relative z-30"
              id="mobile-drawer"
            >
              <div className="p-6 flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center justify-between text-left py-3 px-4 rounded-xl font-medium transition-all cursor-pointer text-base"
                      style={{
                        background: isActive ? "#EDF4F9" : "transparent",
                        color: isActive ? "#0284C7" : "#475569",
                      }}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="h-1.5 w-1.5 rounded-full bg-[#0284C7]" />}
                    </button>
                  );
                })}
                <div className="mt-4 pt-4 border-t border-[#D1E2E8] flex flex-col gap-3">
                  <a
                    href="tel:+919431021422"
                    className="flex items-center gap-3 justify-center w-full py-3 rounded-xl bg-[#1B365D] text-white font-medium hover:bg-[#0284C7] transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call +91 93348 37757</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ROW 2: Navigation Menu - Website Theme */}
      <div className="w-full bg-[#FAF9F6] border-b border-[#D1E2E8]/80 py-2.5 relative z-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center lg:justify-center justify-between overflow-x-auto no-scrollbar">
          <nav className="flex items-center gap-6 md:gap-9 whitespace-nowrap" id="desktop-nav-menu">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-xs sm:text-sm font-semibold transition-all duration-300 py-1.5 focus:outline-none cursor-pointer"
                  style={{
                    color: isActive ? "#0284C7" : "#475569",
                  }}
                >
                  <span className="hover:text-[#0284C7] transition-colors duration-200">
                    {item.label}
                  </span>
                  {/* Subtle active / hover sliding line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 h-[2.5px] w-full bg-[#0284C7]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

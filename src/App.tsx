import { useState, useEffect } from "react";
import Header from "./components/Header";
import NeuralBackground from "./components/NeuralBackground";
import Overview from "./components/Overview";
import MessageSection from "./components/MessageSection";
import WhyChooseUs from "./components/WhyChooseUs";
import TreatmentsSection from "./components/TreatmentsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const sectionIds = [
      "overview",
      "message",
      "why-choose-us",
      "treatments",
      "testimonials",
      "contact-us",
    ];

    const handleScroll = () => {
      // If we are actively scrolling to a section via header click, do not override
      if ((window as any).isNavigating) return;

      const headerHeight = 135; // height offset of the sticky navigation header
      let bestSectionId = "";
      let maxVisibleHeight = -1;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Calculate the height of the section visible below the header within the viewport
          const visibleTop = Math.max(rect.top, headerHeight);
          const visibleBottom = Math.min(rect.bottom, window.innerHeight);
          const visibleHeight = visibleBottom - visibleTop;

          if (visibleHeight > 0 && visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            bestSectionId = id;
          }
        }
      });

      if (bestSectionId && bestSectionId !== activeSection) {
        setActiveSection(bestSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="relative min-h-screen bg-cream-bg text-cream-text font-sans overflow-x-hidden selection:bg-cream-accent/20 selection:text-cream-accent">
      {/* Interactive Dot-Matrix Neural background canvas */}
      <NeuralBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky 2-Row Header Nav */}
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Structured distinguished sections with generous negative spacing */}
        <main className="flex-1 w-full flex flex-col pt-[128px] sm:pt-[134px]">
          {/* Section 1: Doctor Overview */}
          <Overview />

          {/* Spacer Line */}
          <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
            <div className="h-[1px] w-full bg-cream-border/60" />
          </div>

          {/* Section 2: Clinical Message */}
          <MessageSection />

          {/* Section 3: Why Choose Us (Dark Background) */}
          <WhyChooseUs />

          {/* Section 4: Specializations / Treatments */}
          <TreatmentsSection />

          {/* Spacer Line */}
          <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
            <div className="h-[1px] w-full bg-cream-border/60" />
          </div>

          {/* Section 5: Standing Testimonials */}
          <TestimonialsSection />

          {/* Spacer Line */}
          <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
            <div className="h-[1px] w-full bg-cream-border/60" />
          </div>

          {/* Section 6: Contact details, Schedules, and Map */}
          <ContactSection />
        </main>

        {/* Restorative minimal footer */}
        <Footer />
      </div>
    </div>
  );
}

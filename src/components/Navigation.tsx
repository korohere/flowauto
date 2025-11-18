import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import flowLogo from "figma:asset/20a2dcf9e6e18b6f8cbacdd3ecd0552fdfb8337f.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center"
              >
                <img src={flowLogo} alt="Flow Logo" className="h-8 w-auto" />
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("what-flow-is")}
                className="text-slate-700 hover:text-[#0E6B78] transition-all duration-300 ease-out hover:scale-105"
              >
                What Flow Is
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-700 hover:text-[#0E6B78] transition-all duration-300 ease-out hover:scale-105"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("case-study")}
                className="text-slate-700 hover:text-[#0E6B78] transition-all duration-300 ease-out hover:scale-105"
              >
                Case Study
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#0E6B78] hover:bg-[#0E6B78]/90 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-[#0E6B78] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("what-flow-is")}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-[#0E6B78]/5 hover:text-[#0E6B78] active:bg-[#0E6B78]/10 rounded-lg transition-all duration-300 ease-out"
              >
                What Flow Is
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-[#0E6B78]/5 hover:text-[#0E6B78] active:bg-[#0E6B78]/10 rounded-lg transition-all duration-300 ease-out"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("case-study")}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-[#0E6B78]/5 hover:text-[#0E6B78] active:bg-[#0E6B78]/10 rounded-lg transition-all duration-300 ease-out"
              >
                Case Study
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 bg-[#0E6B78] hover:bg-[#0E6B78]/90 active:bg-[#0E6B78]/80 text-white rounded-lg transition-all duration-300 ease-out"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToWhatFlowIs = () => {
    document.getElementById('what-flow-is')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMwMTAxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional office interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E6B78]/95 to-[#0E6B78]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center">
          <h1 className="inline-block mb-8 px-4 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-lg text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Automate The Work That Slows You Down
          </h1>
  
          <h2 className="text-white/90 mb-8 max-w-3xl mx-auto px-4">
            Custom automation workflows that eliminate repetitive tasks and make your operations faster, cleaner, and more reliable.
          </h2>
          
          <div className="flex justify-center">
            <Button 
              onClick={scrollToWhatFlowIs}
              size="lg" 
              className="bg-[#0E6B78] hover:bg-[#0E6B78]/90 text-white group"
            >
              Automate My Business
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
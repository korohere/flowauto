import flowLogo from "figma:asset/20a2dcf9e6e18b6f8cbacdd3ecd0552fdfb8337f.png";

interface LogoPatternProps {
  className?: string;
  opacity?: number;
}

export function LogoPattern({ className = "", opacity = 0.03 }: LogoPatternProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ opacity }}>
      <img src={flowLogo} alt="" className="w-full h-full object-contain" />
    </div>
  );
}

// Floating logo elements for background decoration
export function FloatingLogoElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right */}
      <LogoPattern 
        className="absolute -top-20 -right-20 w-64 h-64 rotate-12" 
        opacity={0.02}
      />
      
      {/* Bottom left */}
      <LogoPattern 
        className="absolute -bottom-24 -left-24 w-72 h-72 -rotate-12" 
        opacity={0.025}
      />
      
      {/* Center right */}
      <LogoPattern 
        className="absolute top-1/2 -right-32 w-56 h-56 rotate-45 -translate-y-1/2" 
        opacity={0.015}
      />
    </div>
  );
}

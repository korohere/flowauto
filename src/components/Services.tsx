import { FileText, CheckSquare, BarChart3, Wrench } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Automating routine data entry and reporting tasks",
      description: "Eliminate repetitive manual work and reduce errors by automating data collection, entry, and report generation. Free up your team's time for higher-value activities."
    },
    {
      icon: CheckSquare,
      title: "Simplifying approval or order management systems",
      description: "Streamline workflows with automated approval chains and order tracking. Speed up processing times while maintaining complete oversight and control."
    },
    {
      icon: BarChart3,
      title: "Building smart dashboards for faster decision-making",
      description: "Get real-time visibility into your business metrics with custom dashboards that pull data from all your systems into one clear, actionable view."
    },
    {
      icon: Wrench,
      title: "Creating custom internal tools that fit your team's workflow",
      description: "We build bespoke software solutions designed around how your team actually works, not generic tools that force you to adapt."
    }
  ];

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-[#0E6B78]/10 border border-[#0E6B78]/30 rounded-full">
            <span className="text-[#0E6B78]">Services We Provide</span>
          </div>
          <p className="text-slate-900 mb-4 px-4">
            We Handle the Tasks That Slow You Down
          </p>
          <p className="text-slate-600 max-w-3xl mx-auto px-4">
            We create hyper-personalised software solutions designed to remove friction from your daily operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-[#F6F6F6] p-8 rounded-2xl border border-slate-200 hover:border-[#0E6B78] hover:bg-[#0E6B78]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#0E6B78] group-hover:bg-[#0E6B78]/90 rounded-xl flex items-center justify-center mb-6 mx-auto transition-colors">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-slate-900 text-center">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-center mt-3">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block bg-[#0E6B78]/5 border border-[#0E6B78]/20 rounded-2xl p-8">
            <p className="text-slate-700 mb-2">
              Don't see what you need?
            </p>
            <p className="text-slate-900">
              We create custom automation solutions tailored to your specific business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
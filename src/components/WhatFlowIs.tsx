import { Zap, Clock, TrendingUp, Shield } from "lucide-react";
import { FloatingLogoElements } from "./LogoPattern";

export function WhatFlowIs() {
  const features = [
    {
      icon: Zap,
      title: "Simple Automation",
      description: "We make technology work for you, not the other way around. No complex systems, just results."
    },
    {
      icon: Clock,
      title: "Save Time Daily",
      description: "Reclaim hours every week by automating repetitive tasks that slow down your business."
    },
    {
      icon: TrendingUp,
      title: "Scale With Ease",
      description: "Grow your business without growing your workload. Our solutions scale as you do."
    },
  ];

  return (
    <section id="what-flow-is" className="py-12 bg-[#F6F6F6] relative overflow-hidden">
      {/* Floating logo elements in background */}
      <FloatingLogoElements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-8 px-4 py-2 bg-[#0E6B78]/10 border border-[#0E6B78]/30 rounded-full">
            <span className="text-[#0E6B78]">What Flow Is</span>
          </div>
          <p className="text-slate-600 max-w-3xl mx-auto px-4">
            At Flow Automations, we bridge the gap between traditional operations and today's digital way of working.<br></br>
            <br></br>We understand that many businesses still rely on manual, repetitive tasks that eat up time and resources.
            Our job is simple: we help you automate what slows you down.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl border border-slate-200 hover:border-[#0E6B78] hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] active:translate-y-0 active:scale-100 p-6 group"
              >
                <div className="w-12 h-12 bg-[#0E6B78]/10 rounded-lg flex items-center justify-center mb-4 mx-auto transition-all duration-300 ease-out group-hover:bg-[#0E6B78]/20 group-hover:scale-110 group-active:scale-100">
                  <Icon className="h-6 w-6 text-[#0E6B78] transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-100" />
                </div>
                <h3 className="text-slate-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-center">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-slate-700">
              We don't sell fancy tools. We build practical, custom solutions that fit your exact workflow.
              Behind the scenes, we use coding and AI tools to create these automations quickly and efficiently, but for you, it's all about getting results that work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
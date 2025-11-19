import { Hero } from "./components/Hero";
import { WhatFlowIs } from "./components/WhatFlowIs";
import { Services } from "./components/Services";
import { CaseStudy } from "./components/CaseStudy";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhatFlowIs />
      <Services />
      <CaseStudy />
      <Contact />
    </div>
  );
}
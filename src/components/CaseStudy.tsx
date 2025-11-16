import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CaseStudy() {
  const results = [
    { metric: "6+ hours", description: "Saved on admin work every week" },
    { metric: "90%", description: "Fewer errors in PO generation" },
    { metric: "Faster", description: "Internal turnaround across department" }
  ];

  return (
    <section id="case-study" className="py-12 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-[#0E6B78]/10 border border-[#0E6B78]/30 rounded-full">
            <span className="text-[#0E6B78]">Case Study</span>
          </div>
          <h2 className="text-slate-900 mb-4 px-4">
            How We Helped Sagar Silk Mills Reclaim Their Time
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto px-4">
            A family-owned textile business looking to automate daily, repetitive tasks which changes how automation powers their business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-12">
          <div>
            <div className="bg-[#0E6B78]/5 border border-[#0E6B78]/20 rounded-2xl p-8 mb-6">
              <h3 className="text-slate-900 mb-3">The Challenge</h3>
              <p className="text-slate-700">
                Sagar Silk Mills, a family-run textile business, was losing hours every week manually typing and forwarding purchase orders on WhatsApp, often leading to errors and no proper record-keeping.
              </p>
            </div>

            <div className="bg-[#0E6B78]/5 border border-[#0E6B78]/20 rounded-2xl p-8">
              <h3 className="text-slate-900 mb-4">The Solution</h3>
              <p className="text-slate-700">
                Flow built a custom PO Generator that fit seamlessly into their existing workflow. The tool lets the team enter order details just like before, but now it automatically generates, stores, and archives every PO with a downloadable PDF copy for easy access.
              </p>
            </div>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762168563931-985a2ae4bdc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRleHRpbGUlMjBidXNpbmVzcyUyMEluZGlhfGVufDF8fHx8MTc2MzA5NjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Traditional textile business India"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-[#0E6B78] text-white rounded-2xl p-8">
              <p className="text-white/90 mb-4 text-lg">
                "Flow didn't just save us time; it gave us a solution we didn't know we needed. We now create accurate POs instantly and can retrieve any old ones whenever required."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span>RV</span>
                </div>
                <div>
                  <div>Rahul Vislot</div>
                  <div className="text-white/70">Owner, Sagar Silk Mills</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 text-center"
            >
              <div className="text-[#0E6B78] mb-2">
                {result.metric}
              </div>
              <p className="text-slate-600">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg" 
            className="bg-[#0E6B78] hover:bg-[#0E6B78]/90 text-white"
          >
            Get Similar Results for Your Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
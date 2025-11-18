import { FileText, Mail, Table, MessageSquare, ClipboardList, Database, CheckCircle, Send, ArrowDown } from "lucide-react";

export function WorkflowComparison() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Before Automation */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-slate-900 mb-2">Before Automation</h3>
              <p className="text-slate-600">Scattered, manual, time-consuming</p>
            </div>
            
            <div className="relative h-96 bg-slate-50 rounded-2xl border-2 border-slate-200 p-8">
              {/* Messy scattered icons */}
              <div className="absolute top-8 left-12 transform -rotate-12">
                <div className="bg-slate-300 p-3 rounded-lg shadow-sm">
                  <FileText className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
              <div className="absolute top-20 right-16 transform rotate-6">
                <div className="bg-slate-300 p-3 rounded-lg shadow-sm">
                  <Mail className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
              <div className="absolute top-32 left-20 transform rotate-12">
                <div className="bg-slate-300 p-3 rounded-lg shadow-sm">
                  <Table className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
              <div className="absolute bottom-24 right-12 transform -rotate-6">
                <div className="bg-slate-300 p-3 rounded-lg shadow-sm">
                  <MessageSquare className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
              <div className="absolute bottom-16 left-16 transform rotate-3">
                <div className="bg-slate-300 p-3 rounded-lg shadow-sm">
                  <ClipboardList className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
              <div className="absolute top-48 left-1/2 transform -translate-x-1/2 -rotate-6">
                <div className="bg-slate-300 p-3 rounded-lg shadow-sm">
                  <Database className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
              <div className="absolute bottom-32 left-1/3 transform rotate-15">
                <div className="bg-slate-300 p-3 rounded-lg shadow-sm">
                  <FileText className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
              <div className="absolute top-16 left-1/2 transform translate-x-4 rotate-[-8deg]">
                <div className="bg-slate-300 p-3 rounded-lg shadow-sm">
                  <Mail className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
              {/* Dashed lines connecting randomly */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <line x1="20%" y1="25%" x2="70%" y2="60%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                <line x1="75%" y1="30%" x2="30%" y2="70%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                <line x1="50%" y1="20%" x2="25%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* After Automation */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-slate-900 mb-2">After Automation</h3>
              <p className="text-slate-600">Streamlined, automated, reliable</p>
            </div>
            
            <div className="relative h-96 bg-gradient-to-br from-[#0E6B78]/5 to-white rounded-2xl border-2 border-[#0E6B78]/20 p-8">
              {/* Clean vertical flow */}
              <div className="flex flex-col items-center justify-between h-full py-4">
                {/* Step 1: Data Collection */}
                <div className="relative z-10 group">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-[#0E6B78] relative transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:scale-110 group-active:scale-100"
                       style={{ boxShadow: '0 0 20px rgba(14, 107, 120, 0.2)' }}>
                    <Database className="h-6 w-6 text-[#0E6B78] transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-100" />
                  </div>
                  <div className="absolute -right-28 top-1/2 -translate-y-1/2 text-sm text-slate-600 whitespace-nowrap hidden lg:block">
                    Collect Data
                  </div>
                </div>
                
                <ArrowDown className="h-6 w-6 text-[#0E6B78]" strokeWidth={2.5} />
                
                {/* Step 2: Process */}
                <div className="relative z-10 group">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-[#0E6B78] relative transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:scale-110 group-active:scale-100"
                       style={{ boxShadow: '0 0 20px rgba(14, 107, 120, 0.2)' }}>
                    <ClipboardList className="h-6 w-6 text-[#0E6B78] transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-100" />
                  </div>
                  <div className="absolute -right-28 top-1/2 -translate-y-1/2 text-sm text-slate-600 whitespace-nowrap hidden lg:block">
                    Process
                  </div>
                </div>
                
                <ArrowDown className="h-6 w-6 text-[#0E6B78]" strokeWidth={2.5} />
                
                {/* Step 3: Transform */}
                <div className="relative z-10 group">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-[#0E6B78] relative transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:scale-110 group-active:scale-100"
                       style={{ boxShadow: '0 0 20px rgba(14, 107, 120, 0.2)' }}>
                    <Table className="h-6 w-6 text-[#0E6B78] transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-100" />
                  </div>
                  <div className="absolute -right-28 top-1/2 -translate-y-1/2 text-sm text-slate-600 whitespace-nowrap hidden lg:block">
                    Transform
                  </div>
                </div>
                
                <ArrowDown className="h-6 w-6 text-[#0E6B78]" strokeWidth={2.5} />
                
                {/* Step 4: Deliver */}
                <div className="relative z-10 group">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-[#0E6B78] relative transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:scale-110 group-active:scale-100"
                       style={{ boxShadow: '0 0 20px rgba(14, 107, 120, 0.2)' }}>
                    <Send className="h-6 w-6 text-[#0E6B78] transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-100" />
                  </div>
                  <div className="absolute -right-28 top-1/2 -translate-y-1/2 text-sm text-slate-600 whitespace-nowrap hidden lg:block">
                    Deliver
                  </div>
                </div>
                
                <ArrowDown className="h-6 w-6 text-[#0E6B78]" strokeWidth={2.5} />
                
                {/* Step 5: Complete */}
                <div className="relative z-10 group">
                  <div className="bg-[#0E6B78] p-4 rounded-xl shadow-lg border-2 border-[#0E6B78] relative transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:scale-110 group-active:scale-100"
                       style={{ boxShadow: '0 0 25px rgba(14, 107, 120, 0.3)' }}>
                    <CheckCircle className="h-6 w-6 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-100" />
                  </div>
                  <div className="absolute -right-28 top-1/2 -translate-y-1/2 text-sm text-slate-600 whitespace-nowrap hidden lg:block">
                    Complete
                  </div>
                </div>
              </div>
              
              {/* Connecting line background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[85%] bg-gradient-to-b from-[#0E6B78]/20 via-[#0E6B78]/30 to-[#0E6B78]/20 rounded-full" style={{ zIndex: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
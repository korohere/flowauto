import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import flowLogo from "figma:asset/20a2dcf9e6e18b6f8cbacdd3ecd0552fdfb8337f.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", business: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#0E6B78]/10 border border-[#0E6B78]/30 rounded-full">
            <span className="text-[#0E6B78]">Contact Us</span>
          </div>
          <h2 className="text-slate-900 mb-4 px-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-xl px-4">
            Let's talk about how Flow can save you time and help your business run smoother. 
            Get a free consultation and custom automation plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Get In Touch - Now First */}
          <div>
            <div className="bg-[#0E6B78] text-white rounded-2xl p-8 mb-6">
              <h3 className="mb-6">Get In Touch</h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-white/90 mb-1">Mobile Number</div>
                    <div>+91 98207 21673</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-white/90 mb-1">Email</div>
                    <div>hello@flow-auto.in</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F6F6] border border-slate-200 rounded-2xl p-8">
              <h3 className="text-slate-900 mb-6">What Happens Next?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0E6B78] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    1
                  </div>
                  <div className="text-slate-900 mb-2">Free Consultation</div>
                  <p className="text-slate-600">
                    We'll schedule a call to understand your business and current processes.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0E6B78] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    2
                  </div>
                  <div className="text-slate-900 mb-2">Custom Automation Plan</div>
                  <p className="text-slate-600">
                    We'll create a tailored plan showing exactly what we can automate and time savings.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0E6B78] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    3
                  </div>
                  <div className="text-slate-900 mb-2">Implementation</div>
                  <p className="text-slate-600">
                    We handle everything and train your team. You'll see results in weeks, not months.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Now Second */}
          <div className="bg-[#F6F6F6] border border-slate-200 rounded-2xl p-8">
            <h3 className="text-slate-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="business">Business Name</Label>
                <Input
                  id="business"
                  name="business"
                  type="text"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Your Business LLC"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Tell us about your business and what you'd like to automate *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm interested in automating..."
                  rows={5}
                  className="mt-2"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#0E6B78] hover:bg-[#0E6B78]/90 text-white group">
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:rotate-[-10deg]" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src={flowLogo} alt="Flow Logo" className="h-8 w-auto" />
          </div>
          <p className="text-slate-600">
            2025 Flow. Making business automation simple.
          </p>
        </div>
      </div>
    </section>
  );
}
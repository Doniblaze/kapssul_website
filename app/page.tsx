'use client';

import { Activity, ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '@/app/assets/logo.png';
import WaitlistForm from '@/app/components/WaitlistForm';

const KapssulLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src={Logo}
                  alt="Kapssul"
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-800">Kapssul</span>
            </div>

            <div className="hidden md:flex items-center">
              <button
                onClick={scrollToWaitlist}
                className="px-6 py-3 text-base bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-xl hover:shadow-xl hover:shadow-[#8B4513]/20 transition-all font-semibold hover:scale-105"
              >
                Join Waitlist
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-slate-100">
              <button
                onClick={scrollToWaitlist}
                className="w-full px-6 py-4 text-lg bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-xl font-semibold"
              >
                Join Waitlist
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-[#8B4513]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full text-base text-amber-800 mb-10 font-semibold shadow-sm">
            <Activity className="w-5 h-5" />
            <span>Coming Soon — Join the Waitlist</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
            Bridging the Gap in
            <br />
            <span className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#D2691E] bg-clip-text text-transparent">
              Healthcare Continuity
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-4xl mx-auto leading-relaxed">
            Kapssul connects <strong className="text-slate-800">patients</strong>, <strong className="text-slate-800">practitioners</strong>, and <strong className="text-slate-800">healthcare institutions</strong> with AI-powered tools for medication adherence, behavioral monitoring, and proactive care — <span className="text-[#8B4513] font-semibold">so no one falls through the cracks</span>.
          </p>

          <button
            onClick={scrollToWaitlist}
            className="px-10 py-5 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#8B4513]/30 transition-all font-bold text-xl hover:scale-105 flex items-center gap-3 mx-auto"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-28 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Be Part of the <span className="text-[#8B4513]">Future of Healthcare</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Join our waitlist today. Early members get priority access and a direct line to our founding team.
            </p>
          </div>

          <WaitlistForm />

          <div className="mt-16 text-center">
            <p className="text-base text-slate-500">
              By joining, you agree to our <a href="#" className="underline hover:text-[#8B4513] transition-colors">Terms of Service</a> and <a href="#" className="underline hover:text-[#8B4513] transition-colors">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 opacity-80">
                <Image src={Logo} alt="Kapssul" />
              </div>
              <span className="text-xl font-bold text-white">Kapssul</span>
            </div>
            <div className="text-base text-center md:text-right">
              <p>&copy; 2025 Kapssul Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KapssulLanding;
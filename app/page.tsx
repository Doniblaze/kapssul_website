'use client';

import { Activity, Brain, Shield, CheckCircle, Clock, ArrowRight, Menu, X, Database, Lock, Users, Heart, Stethoscope, Building2, Zap, TrendingUp, Bell } from 'lucide-react';
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

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
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

            <div className="hidden md:flex items-center space-x-10">
              <a href="#why-kapssul" onClick={scrollToSection('why-kapssul')} className="text-base font-medium text-slate-600 hover:text-[#8B4513] transition-colors">
                Why Kapssul
              </a>
              <a href="#how-it-works" onClick={scrollToSection('how-it-works')} className="text-base font-medium text-slate-600 hover:text-[#8B4513] transition-colors">
                How It Works
              </a>
              <a href="#benefits" onClick={scrollToSection('benefits')} className="text-base font-medium text-slate-600 hover:text-[#8B4513] transition-colors">
                Benefits
              </a>
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
            <div className="md:hidden py-6 space-y-4 border-t border-slate-100 animate-fade-in">
              <a href="#why-kapssul" onClick={scrollToSection('why-kapssul')} className="block text-lg font-medium text-slate-700 py-2">Why Kapssul</a>
              <a href="#how-it-works" onClick={scrollToSection('how-it-works')} className="block text-lg font-medium text-slate-700 py-2">How It Works</a>
              <a href="#benefits" onClick={scrollToSection('benefits')} className="block text-lg font-medium text-slate-700 py-2">Benefits</a>
              <button
                onClick={scrollToWaitlist}
                className="w-full mt-4 px-6 py-4 text-lg bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-xl font-semibold"
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={scrollToWaitlist}
              className="px-10 py-5 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#8B4513]/30 transition-all font-bold text-xl hover:scale-105 flex items-center gap-3"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <a
              href="#why-kapssul"
              onClick={scrollToSection('why-kapssul')}
              className="px-10 py-5 bg-white text-slate-800 rounded-2xl border-2 border-slate-200 hover:border-slate-400 transition-all font-semibold text-xl hover:shadow-lg"
            >
              Learn More
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-[#8B4513]" /><span className="text-base font-medium">Built for HIPAA Compliance</span></div>
            <div className="flex items-center gap-2"><Lock className="w-5 h-5 text-[#8B4513]" /><span className="text-base font-medium">Security-First Design</span></div>
            <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#8B4513]" /><span className="text-base font-medium">AI-Powered</span></div>
          </div>
        </div>
      </section>

      {/* Why Kapssul Section */}
      <section id="why-kapssul" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Healthcare Gap We&apos;re <span className="text-[#8B4513]">Closing</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Today, patients are discharged and left on their own. Practitioners lose visibility. Institutions struggle with readmissions. Kapssul changes everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                color: '#10B981',
                title: 'For Patients',
                problem: 'Forgetting medications, feeling disconnected from care teams, and struggling to track progress.',
                solution: 'Smart reminders, personalized insights, and a direct line to your healthcare providers.'
              },
              {
                icon: Stethoscope,
                color: '#8B4513',
                title: 'For Practitioners',
                problem: 'Spending hours on manual follow-ups, missing warning signs, and dealing with avoidable readmissions.',
                solution: 'Automated monitoring, real-time alerts, and data-driven insights to focus on what matters.'
              },
              {
                icon: Building2,
                color: '#3B82F6',
                title: 'For Institutions',
                problem: 'High operational costs, fragmented systems, and difficulty measuring patient outcomes at scale.',
                solution: 'Enterprise integration, comprehensive analytics, and measurable improvements in care quality.'
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 rounded-3xl border-2 border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-white transition-all hover:shadow-xl group">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-slate-500 mb-4 leading-relaxed"><strong className="text-slate-700">The Problem:</strong> {item.problem}</p>
                  <p className="text-lg text-slate-600 leading-relaxed"><strong style={{ color: item.color }}>Our Solution:</strong> {item.solution}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How <span className="text-[#8B4513]">Kapssul</span> Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A simple, powerful system that keeps everyone connected and informed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: '01',
                icon: Database,
                title: 'Connect & Integrate',
                desc: 'Patients join via mobile. Practitioners access dashboards. Institutions integrate with existing systems — all in minutes.'
              },
              {
                step: '02',
                icon: Brain,
                title: 'Monitor & Analyze',
                desc: 'Our AI continuously tracks medication adherence, behavioral patterns, and health metrics to spot issues early.'
              },
              {
                step: '03',
                icon: Bell,
                title: 'Alert & Act',
                desc: 'Smart notifications reach the right people at the right time — preventing complications before they happen.'
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative p-10 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="absolute -top-5 left-10 px-4 py-2 bg-[#8B4513] text-white text-lg font-bold rounded-xl shadow-lg">
                    {item.step}
                  </div>
                  <Icon className="w-12 h-12 text-[#8B4513] mb-6 mt-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What We&apos;re <span className="text-[#8B4513]">Building Towards</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our goal is to deliver measurable improvements for everyone in the healthcare ecosystem. Here&apos;s what we&apos;re targeting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '40%', label: 'Target Readmission Reduction', icon: TrendingUp },
              { value: '10+', label: 'Practitioner Hours Saved/Week', icon: Clock },
              { value: '85%', label: 'Patient Satisfaction Target', icon: Heart },
              { value: '99%', label: 'Adherence Rate Goal', icon: CheckCircle }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 text-center hover:shadow-xl transition-shadow">
                  <Icon className="w-10 h-10 text-[#8B4513] mx-auto mb-4" />
                  <div className="text-5xl font-extrabold text-[#8B4513] mb-2">{stat.value}</div>
                  <div className="text-lg font-medium text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-28 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#8B4513]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Be Part of the <span className="text-[#8B4513]">Future of Healthcare</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Join our exclusive waitlist today. Early members get priority access, special pricing, and a direct line to our founding team.
            </p>
          </div>

          <WaitlistForm />

          <div className="mt-16 text-center">
            <p className="text-base text-slate-500">
              By joining, you agree to our <a href="#" className="underline hover:text-[#8B4513] transition-colors">Terms of Service</a> and <a href="#" className="underline hover:text-[#8B4513] transition-colors">Privacy Policy</a>. We respect your privacy.
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
              <p className="mt-1 text-slate-500">Bridging the gap in healthcare continuity.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KapssulLanding;
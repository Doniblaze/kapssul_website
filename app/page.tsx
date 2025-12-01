'use client';

import { Activity, Bell, Shield, TrendingUp, CheckCircle, AlertCircle, AlertTriangle, Users, BarChart3, Clock, Pill, Heart, FileText, ArrowRight, Menu, X, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '@/app/assets/logo.png';
import InteractiveFlow from '@/app/components/InteractiveFlow';
import StatsCounter from '@/app/components/StatsCounter';

const KapssulLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.kapssul.africa';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={Logo}
                  alt="Kapssul - AI-Powered Healthcare Assistant"
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#8B4513]">Kapssul</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-lg font-medium text-gray-700 hover:text-[#8B4513] transition-colors relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#A0522D] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#how-it-works" className="text-lg font-medium text-gray-700 hover:text-[#8B4513] transition-colors relative group">
                How it works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#A0522D] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#benefits" className="text-lg font-medium text-gray-700 hover:text-[#8B4513] transition-colors relative group">
                Benefits
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#A0522D] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href={`${appUrl}/login`} className="px-6 py-2.5 text-lg text-[#8B4513] border-2 border-[#8B4513] rounded-lg hover:bg-[#8B4513]/5 transition-all font-semibold">
                Login
              </a>
              <a href={`${appUrl}/signup`} className="px-6 py-2.5 text-lg bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-lg hover:shadow-xl hover:shadow-[#8B4513]/30 transition-all font-semibold hover:scale-105">
                Sign Up Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 animate-fade-in">
              <a href="#features" className="block text-lg font-medium text-gray-700 hover:text-[#8B4513] transition-colors">Features</a>
              <a href="#how-it-works" className="block text-lg font-medium text-gray-700 hover:text-[#8B4513] transition-colors">How it works</a>
              <a href="#benefits" className="block text-lg font-medium text-gray-700 hover:text-[#8B4513] transition-colors">Benefits</a>
              <a href={`${appUrl}/login`} className="block px-6 py-2.5 text-center text-lg text-[#8B4513] border-2 border-[#8B4513] rounded-lg hover:bg-[#8B4513]/5 transition-all font-semibold">
                Login
              </a>
              <a href={`${appUrl}/signup`} className="block px-6 py-2.5 text-center text-lg bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-lg hover:shadow-xl transition-all font-semibold">
                Sign Up Free
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#F5DEB3]/10 via-white to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B4513]/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D2691E]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#8B4513]/10 border border-[#8B4513]/20 rounded-full text-sm text-gray-600 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-[#8B4513] rounded-full animate-pulse"></span>
            <span className="text-lg font-medium">Post-Visit Intelligence for Healthcare Practitioners</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-gray-900 animate-fade-in">
            Patient Care Doesn't End
            <br />
            <span className="gradient-text animate-gradient">
              At Discharge
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            AI-powered assistant that automates patient follow-up, monitors medication adherence, and detects complications early—
            <strong className="text-[#8B4513]"> saving you 10+ hours/week while increasing revenue by 30%</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
            <a href={`${appUrl}/signup`} className="px-8 py-4 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-xl hover:shadow-2xl hover:shadow-[#8B4513]/30 transition-all font-semibold text-xl hover:scale-105 flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>

          </div>

          {/* Security Trust Indicator */}
          <div className="flex items-center justify-center space-x-2 text-gray-600 animate-fade-in mt-8">
            <Shield className="w-5 h-5 text-[#8B4513]" />
            <span className="text-lg font-medium">Enterprise-Grade Security & <strong className="text-[#8B4513]">HIPAA Compliant</strong></span>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] animate-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: 10, suffix: '+', label: 'Est. Hours Saved/Week', prefix: '' },
              { value: 40, suffix: '%', label: 'Est. Reduced Readmissions', prefix: '' },
              { value: 85, suffix: '%', label: 'Target Patient Satisfaction', prefix: '' },
              { value: 30, suffix: '%', label: 'Potential Revenue Increase', prefix: '+' }
            ].map((stat, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <StatsCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-sm text-red-600 mb-4">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-medium">The Problem</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                The Discharge Gap
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Patients leave your clinic with prescriptions, instructions, and good intentions. Then... silence.
                No way to track if they're taking medications correctly. No early warning system for complications.
                <strong className="text-gray-900"> You're flying blind.</strong>
              </p>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-sm text-amber-600 mb-4">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">The Cost</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Real Impact
              </h3>
              <ul className="space-y-4 text-xl text-gray-600">
                <li className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>30-day readmission penalties eating your revenue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Staff overwhelmed with manual follow-up calls</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Patients deteriorating at home without your knowledge</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Lost credibility from preventable complications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Flow */}
      <div id="how-it-works">
        <InteractiveFlow />
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Powerful Features, <span className="gradient-text">Zero Effort</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to provide continuous care without adding work to your staff
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bell,
                title: 'Smart Medication Reminders',
                description: 'SMS & WhatsApp notifications keep patients on track with their medication schedule.',
                color: '#8B4513'
              },
              {
                icon: AlertCircle,
                title: 'Drug Interaction Detection',
                description: 'WebMD-powered safety checks alert you to potential interactions before prescribing.',
                color: '#EF4444'
              },
              {
                icon: BarChart3,
                title: 'Patient Adherence Tracking',
                description: 'Real-time dashboards with response monitoring and adherence metrics.',
                color: '#3B82F6'
              },
              {
                icon: Clock,
                title: 'Automated Check-up Scheduling',
                description: 'Timezone-aware reminders ensure patients never miss an appointment.',
                color: '#F59E0B'
              },
              {
                icon: Users,
                title: 'Caregiver Integration',
                description: 'Keep families informed and engaged in the patient\'s care journey.',
                color: '#10B981'
              },
              {
                icon: Shield,
                title: 'Escalation Alerts',
                description: 'Early warning system flags concerning patterns before complications arise.',
                color: '#8B4513'
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-[#8B4513] hover:shadow-xl hover:shadow-[#8B4513]/10 transition-all duration-300 bg-white hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}dd, ${feature.color})`
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Everyone <span className="gradient-text">Wins</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Practitioners */}
            <div className="glass-dark p-10 rounded-3xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B4513] to-[#A0522D] flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">For Practitioners</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Save 10+ hours per week on manual follow-ups',
                  'Reduce readmissions by 40% with early intervention',
                  'Increase patient satisfaction scores by 85%',
                  'Boost revenue by 30% through better outcomes',
                  'Build stronger patient relationships & credibility',
                  'Eliminate staff burnout from repetitive tasks'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* For Patients */}
            <div className="glass-dark p-10 rounded-3xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">For Patients</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Never miss a medication dose with smart reminders',
                  'Better health outcomes through consistent adherence',
                  'Convenient communication via WhatsApp/SMS',
                  'Enhanced connection with healthcare providers',
                  'Reduced anxiety with proactive monitoring',
                  'Early intervention prevents serious complications'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] animate-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join leading healthcare practitioners using Kapssul to improve outcomes, reduce readmissions, and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${appUrl}/signup`} className="px-10 py-5 bg-white text-[#8B4513] rounded-xl hover:bg-gray-50 transition-all font-bold text-xl shadow-2xl hover:scale-105 flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
          <p className="mt-6 text-white/80 text-lg">
            ✓ No credit card required &nbsp;•&nbsp; ✓ 2-minute setup &nbsp;•&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative w-12 h-12">
                <Image
                  src={Logo}
                  alt="Kapssul Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-[#8B4513] block">Kapssul</span>
                <span className="text-sm text-gray-500">AI-Powered Healthcare Assistant</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href={`${appUrl}/login`} className="text-lg font-medium text-gray-700 hover:text-[#8B4513] transition-colors">
                Login
              </a>
              <a href={`${appUrl}/signup`} className="px-6 py-2.5 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-lg hover:shadow-xl transition-all font-semibold">
                Sign Up
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-600">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Kapssul. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-[#10B981]" />
                <span>Built for Healthcare</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KapssulLanding;
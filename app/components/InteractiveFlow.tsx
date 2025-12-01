'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, UserPlus, Users, AlertCircle, Pill, TrendingUp, Bell } from 'lucide-react';

const flowSteps = [
    {
        id: 1,
        icon: UserPlus,
        title: 'Sign Up',
        subtitle: 'Create Account',
        description: 'Quick registration with email verification. Get started in under 2 minutes.',
        details: 'Secure practitioner onboarding with license verification and practice information.',
        color: '#8B4513'
    },
    {
        id: 2,
        icon: Users,
        title: 'Enroll Patient',
        subtitle: 'Patient Onboarding',
        description: 'Add patient details, medical history, and caregiver information.',
        details: 'Comprehensive patient profiles including allergies, conditions, and contact preferences.',
        color: '#A0522D'
    },
    {
        id: 3,
        icon: AlertCircle,
        title: 'AI Detection',
        subtitle: 'Safety Check',
        description: 'Automatic drug interaction analysis.',
        details: 'Real-time alerts for potential drug interactions before prescribing.',
        color: '#D2691E',
        highlight: true
    },
    {
        id: 4,
        icon: Pill,
        title: 'Add Prescription',
        subtitle: 'Medication Plan',
        description: 'Enter medications with dosage, frequency, and duration.',
        details: 'Automated reminder scheduling based on patient timezone and preferences.',
        color: '#8B4513'
    },
    {
        id: 5,
        icon: Bell,
        title: 'Automated Reminders',
        subtitle: 'Patient Engagement',
        description: 'SMS & WhatsApp notifications keep patients on track.',
        details: 'Pre-reminders, medication alerts, and check-up notifications automatically sent.',
        color: '#10B981'
    },
    {
        id: 6,
        icon: TrendingUp,
        title: 'Track Adherence',
        subtitle: 'Real-Time Monitoring',
        description: 'Live dashboard showing patient responses and medication adherence.',
        details: 'Instant escalation alerts for missed doses or concerning symptoms.',
        color: '#3B82F6'
    },
    {
        id: 7,
        icon: TrendingUp,
        title: 'Increase Revenue',
        subtitle: 'Better Outcomes',
        description: 'Fewer readmissions, higher patient satisfaction, enhanced credibility.',
        details: '40% reduction in readmissions • 85% increase in satisfaction • 30% revenue boost',
        color: '#10B981',
        highlight: true
    }
];

export default function InteractiveFlow() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#8B4513]/10 border border-[#8B4513]/20 rounded-full text-sm text-gray-600 mb-6">
                        <CheckCircle className="w-4 h-4 text-[#8B4513]" />
                        <span className="text-lg font-medium">How It Works</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                        Your Path to <span className="gradient-text">Better Care</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From signup to revenue increase, see how Kapssul transforms your practice in 7 simple steps
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {flowSteps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep === step.id;
                        const isLastItem = index === flowSteps.length - 1;

                        return (
                            <div
                                key={step.id}
                                className={`relative group cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-102'
                                    } ${isLastItem ? 'lg:col-span-3 lg:max-w-md lg:mx-auto' : ''}`}
                                onMouseEnter={() => setActiveStep(step.id)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-white border-2 border-[#8B4513] flex items-center justify-center text-base font-bold text-[#8B4513] shadow-md z-10">
                                    {step.id}
                                </div>

                                {/* Card */}
                                <div
                                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${step.highlight
                                            ? 'bg-gradient-to-br from-[#8B4513]/5 to-[#10B981]/5 border-[#8B4513]/30'
                                            : 'bg-white border-gray-200'
                                        } ${isActive
                                            ? 'border-[#8B4513] shadow-2xl shadow-[#8B4513]/20'
                                            : 'hover:border-[#8B4513]/50 hover:shadow-xl'
                                        }`}
                                    style={{
                                        minHeight: isActive ? '340px' : '300px'
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <p className="text-sm font-semibold text-[#8B4513] mb-1 opacity-80">
                                            {step.subtitle}
                                        </p>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                            {step.description}
                                        </p>

                                        {/* Expanded Details */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="pt-3 border-t border-gray-200 mt-3">
                                                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                                                    {step.details}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Highlight Glow */}
                                {step.highlight && (
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B4513]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <a
                        href={process.env.NEXT_PUBLIC_APP_URL || 'https://app.kapssul.africa'}
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-xl hover:shadow-2xl hover:shadow-[#8B4513]/30 transition-all duration-300 font-semibold text-lg hover:scale-105"
                    >
                        <span>Try It Now - Free Trial</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="mt-4 text-sm text-gray-500">No credit card required • Setup in 2 minutes</p>
                </div>
            </div>
        </section>
    );
}

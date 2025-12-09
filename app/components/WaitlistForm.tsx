'use client';

import { useState } from 'react';
import { Heart, Stethoscope, Building2, CheckCircle, Sparkles, LucideIcon } from 'lucide-react';

type AudienceType = 'patient' | 'practitioner' | 'institution';

interface AudienceConfig {
    id: AudienceType;
    label: string;
    icon: LucideIcon;
    formUrl: string;
    benefits: string[];
    tagline: string;
    color: string;
}

const audiences: AudienceConfig[] = [
    {
        id: 'patient',
        label: 'Patient',
        icon: Heart,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdjxLGTDArgEvDteVm9gwAZ2mnB7wn65p7EAmNNaqN4C5imyA/viewform?embedded=true',
        tagline: 'Take control of your health journey',
        color: '#10B981',
        benefits: [
            'Never miss a medication dose again',
            'Get personalized health reminders',
            'Stay connected with your care team',
            'Track your progress over time',
            'Early access to premium features'
        ]
    },
    {
        id: 'practitioner',
        label: 'Healthcare Practitioner',
        icon: Stethoscope,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdE0cdAGAMrfxW8XE_z4rEukVxus_cQRXdkruCSnzwf_Q-s-g/viewform?embedded=true',
        tagline: 'Elevate your patient care',
        color: '#8B4513',
        benefits: [
            'Save 10+ hours per week on follow-ups',
            'Reduce patient readmissions by 40%',
            'Real-time adherence dashboards',
            'Early warning alerts for complications',
            'Boost patient satisfaction scores'
        ]
    },
    {
        id: 'institution',
        label: 'Hospital / Pharmacy',
        icon: Building2,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdBjFLAiI2-KYpwIb14TQQsO-LPk9AH3knwqXU2XPD8_ljIcA/viewform?embedded=true',
        tagline: 'Transform your organization',
        color: '#3B82F6',
        benefits: [
            'Integrate with existing systems seamlessly',
            'Reduce operational costs significantly',
            'Improve patient outcomes at scale',
            'Comprehensive analytics & reporting',
            'Priority onboarding & dedicated support'
        ]
    }
];

const WaitlistForm = () => {
    const [activeAudience, setActiveAudience] = useState<AudienceType>('practitioner');

    const currentAudience = audiences.find(a => a.id === activeAudience)!;
    const Icon = currentAudience.icon;

    return (
        <div className="w-full">
            {/* Audience Tabs */}
            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mb-10">
                {audiences.map((audience) => {
                    const TabIcon = audience.icon;
                    const isActive = activeAudience === audience.id;
                    return (
                        <button
                            key={audience.id}
                            onClick={() => setActiveAudience(audience.id)}
                            className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 ${isActive
                                ? 'bg-white shadow-xl border-slate-900 text-slate-900 scale-105'
                                : 'bg-slate-100 border-transparent text-slate-600 hover:bg-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <TabIcon className={`w-6 h-6 ${isActive ? '' : 'opacity-60'}`} style={{ color: isActive ? audience.color : undefined }} />
                            <span>{audience.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Benefits Panel */}
                <div
                    className="p-8 md:p-10 rounded-3xl border-2"
                    style={{
                        backgroundColor: `${currentAudience.color}08`,
                        borderColor: `${currentAudience.color}30`
                    }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: currentAudience.color }}
                        >
                            <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">{currentAudience.label}</h3>
                            <p className="text-lg text-slate-600">{currentAudience.tagline}</p>
                        </div>
                    </div>

                    <div className="space-y-4 mt-8">
                        <h4 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" style={{ color: currentAudience.color }} />
                            What you&apos;ll get:
                        </h4>
                        {currentAudience.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: currentAudience.color }} />
                                <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Embed */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                    <div
                        className="p-1"
                        style={{ background: `linear-gradient(90deg, ${currentAudience.color}, ${currentAudience.color}aa)` }}
                    />
                    <div className="p-4 md:p-6 bg-slate-50 border-b border-slate-200">
                        <h4 className="text-xl font-bold text-slate-900 text-center">Join the Waitlist</h4>
                        <p className="text-base text-slate-500 text-center mt-1">Be among the first to experience Kapssul</p>
                    </div>
                    <div className="relative w-full h-[650px] bg-white">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-300 z-0">
                            Loading Form...
                        </div>
                        <iframe
                            key={activeAudience}
                            src={currentAudience.formUrl}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            className="relative z-10 w-full h-full"
                            title={`Join the ${currentAudience.label} Waitlist`}
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitlistForm;

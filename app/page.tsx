'use client';

import { useEffect, useState } from "react";
import { joinWaitlist } from "@/lib/api";

// Icon Components
function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function DevotionalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function IOSIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5508 0 .9993.4482.9993.9993.0001.5511-.4485.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5508 0 .9993.4482.9993.9993 0 .5511-.4485.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5671.416.416 0 00-.5671.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.0986L4.8429 5.4463a.4161.4161 0 00-.5671-.1521.416.416 0 00-.1521.5671l1.9973 3.4592C2.6889 11.186.8535 12.3074.8535 13.8216v4.9559c0 .8546.6957 1.5503 1.5503 1.5503h19.1924c.8546 0 1.5503-.6957 1.5503-1.5503v-4.9559c0-1.5142-1.8354-2.6356-4.2677-3.5002"/>
    </svg>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistPlatform, setWaitlistPlatform] = useState<'ios' | 'android' | ''>('');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [waitlistMessage, setWaitlistMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes('@')) {
      setWaitlistStatus('error');
      setWaitlistMessage('Please enter a valid email address');
      return;
    }

    setWaitlistStatus('loading');
    try {
      const result = await joinWaitlist(
        waitlistEmail,
        waitlistPlatform ? (waitlistPlatform as 'ios' | 'android') : undefined
      );
      setWaitlistStatus('success');
      setWaitlistMessage('Thank you! We\'ll notify you when GraceGuide is available.');
      setWaitlistEmail("");
      setWaitlistPlatform('');
    } catch (error: any) {
      setWaitlistStatus('error');
      setWaitlistMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F5] dark:bg-[#1A2332] text-[#1F1F1F] dark:text-[#F5F3F0] overflow-x-hidden relative">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(74, 157, 184, 0.15) 0%, transparent 50%)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(248,247,245,0.8)_100%)] dark:bg-[linear-gradient(to_bottom,transparent_0%,rgba(26,35,50,0.8)_100%)]"></div>
      </div>

      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-[#F8F7F5]/80 dark:bg-[#1A2332]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-xl font-light tracking-wider text-[#1F1F1F] dark:text-[#F5F3F0] hover:text-[#4A9DB8] transition-colors cursor-pointer">
            GraceGuide
          </a>
          <div className="hidden md:flex items-center gap-12">
            <a href="#journey" onClick={(e) => handleLinkClick(e, '#journey')} className="text-sm font-light text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] hover:text-[#4A9DB8] transition-colors tracking-wider uppercase">
              Journey
            </a>
            <a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="text-sm font-light text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] hover:text-[#4A9DB8] transition-colors tracking-wider uppercase">
              Features
            </a>
            <a href="#explore" onClick={(e) => handleLinkClick(e, '#explore')} className="text-sm font-light text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] hover:text-[#4A9DB8] transition-colors tracking-wider uppercase">
              Explore
            </a>
            <a href="#waitlist" onClick={(e) => handleLinkClick(e, '#waitlist')} className="text-sm font-light text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] hover:text-[#4A9DB8] transition-colors tracking-wider uppercase">
              Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A9DB8]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8A7A]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#A89BC9]/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="text-center">
            {/* Subtitle with icon */}
            <div className="mb-12 flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#4A9DB8] to-[#FF8A7A]"></div>
              <span className="text-xs font-light text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] tracking-[0.3em] uppercase">
                A place the heart knows
              </span>
              <div className="w-1 h-8 bg-gradient-to-b from-[#FF8A7A] to-[#4A9DB8]"></div>
            </div>
            
            {/* Main Title with gradient */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.95] tracking-tight">
              <span className="block text-[#1F1F1F] dark:text-[#F5F3F0]">Grace</span>
              <span className="block bg-gradient-to-r from-[#4A9DB8] via-[#A89BC9] to-[#FF8A7A] bg-clip-text text-transparent">
                Guide
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Your spiritual companion for daily reflection, guidance, and growth
            </p>
            
            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <a 
                href="#journey" 
                onClick={(e) => handleLinkClick(e, '#journey')} 
                className="group relative px-10 py-4 bg-gradient-to-r from-[#4A9DB8] to-[#6BB3C8] text-white rounded-full font-medium tracking-wide cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#4A9DB8]/30 hover:scale-105"
              >
                <span className="relative z-10">Begin Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6BB3C8] to-[#4A9DB8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#explore" 
                onClick={(e) => handleLinkClick(e, '#explore')} 
                className="px-10 py-4 border-2 border-[#E5E3E0] dark:border-[#374151] text-[#1F1F1F] dark:text-[#F5F3F0] rounded-full font-medium tracking-wide hover:border-[#4A9DB8] hover:text-[#4A9DB8] transition-all duration-300 hover:bg-[#4A9DB8]/5 cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-24">
              <div className="group px-6 py-3 bg-white dark:bg-[#1E2835] rounded-full border border-[#E5E3E0] dark:border-[#374151] shadow-sm hover:shadow-md hover:border-[#4A9DB8]/50 dark:hover:border-[#4A9DB8]/50 transition-all duration-300 flex items-center gap-2">
                <BookIcon className="w-5 h-5 text-[#4A9DB8] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-[#1F1F1F] dark:text-[#F5F3F0]">Daily Scripture</span>
              </div>
              <div className="group px-6 py-3 bg-white dark:bg-[#1E2835] rounded-full border border-[#E5E3E0] dark:border-[#374151] shadow-sm hover:shadow-md hover:border-[#FF8A7A]/50 dark:hover:border-[#FF8A7A]/50 transition-all duration-300 flex items-center gap-2">
                <HeartIcon className="w-5 h-5 text-[#FF8A7A] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-[#1F1F1F] dark:text-[#F5F3F0]">Emotional Check-In</span>
              </div>
              <div className="group px-6 py-3 bg-white dark:bg-[#1E2835] rounded-full border border-[#E5E3E0] dark:border-[#374151] shadow-sm hover:shadow-md hover:border-[#A89BC9]/50 dark:hover:border-[#A89BC9]/50 transition-all duration-300 flex items-center gap-2">
                <SparkleIcon className="w-5 h-5 text-[#A89BC9] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-[#1F1F1F] dark:text-[#F5F3F0]">AI Companion</span>
              </div>
              <div className="group px-6 py-3 bg-white dark:bg-[#1E2835] rounded-full border border-[#E5E3E0] dark:border-[#374151] shadow-sm hover:shadow-md hover:border-[#E5A890]/50 dark:hover:border-[#E5A890]/50 transition-all duration-300 flex items-center gap-2">
                <DevotionalIcon className="w-5 h-5 text-[#E5A890] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-[#1F1F1F] dark:text-[#F5F3F0]">Daily Devotional</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Fixed Position */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] tracking-wider uppercase font-medium">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-[#4A9DB8] to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="relative px-6 py-32 border-t border-[#E5E3E0] dark:border-[#374151] bg-white dark:bg-[#1A2332]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center">
            <span className="inline-block px-4 py-2 bg-[#4A9DB8]/10 dark:bg-[#4A9DB8]/20 rounded-full text-xs font-medium text-[#4A9DB8] tracking-[0.2em] uppercase mb-6">
              The Path
            </span>
            <h2 className="text-5xl md:text-7xl font-light mb-8 text-[#1F1F1F] dark:text-[#F5F3F0] leading-tight">
              A journey<br />
              <span className="bg-gradient-to-r from-[#4A9DB8] to-[#FF8A7A] bg-clip-text text-transparent">guided by grace</span>
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] max-w-2xl mx-auto font-light leading-relaxed">
              Step into a space where scripture meets reflection, where guidance finds your heart, 
              and where growth happens naturally.
            </p>
          </div>

          {/* Journey Steps */}
          <div className="space-y-16">
            <JourneyStep
              number="01"
              title="Daily Scripture"
              description="Each morning begins with a verse carefully selected to guide your day. Read, reflect, mark as complete—build a rhythm that transforms."
              accentColor="text-[#4A9DB8]"
            />
            <JourneyStep
              number="02"
              title="Emotional Check-In"
              description="When emotions surface—loneliness, fear, anxiety, joy—express them. Choose your tone. Receive guidance tailored to your heart."
              accentColor="text-[#FF8A7A]"
            />
            <JourneyStep
              number="03"
              title="Grace AI Companion"
              description="Conversations that understand context. Ask questions, seek verses, share what weighs on you. Grace responds with wisdom and care."
              accentColor="text-[#A89BC9]"
            />
            <JourneyStep
              number="04"
              title="Daily Devotional"
              description="Dive deeper. Each devotional explores scripture with context, reflection, and practical application for your spiritual growth."
              accentColor="text-[#E5A890]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-32 border-t border-[#E5E3E0] dark:border-[#374151] bg-[#F8F7F5] dark:bg-[#1A2332]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center">
            <span className="inline-block px-4 py-2 bg-[#FF8A7A]/10 dark:bg-[#FF8A7A]/20 rounded-full text-xs font-medium text-[#FF8A7A] tracking-[0.2em] uppercase mb-6">
              Capabilities
            </span>
            <h2 className="text-5xl md:text-7xl font-light mb-8 text-[#1F1F1F] dark:text-[#F5F3F0] leading-tight">
              What you'll<br />
              <span className="bg-gradient-to-r from-[#FF8A7A] to-[#A89BC9] bg-clip-text text-transparent">discover</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <EnhancedFeatureCard
              title="Emotional Support"
              description="Spiritual wellness includes emotional health. Express emotions, receive personalized scripture-based guidance, choose your communication tone, and track your journey."
              gradient="from-[#4A9DB8] to-[#6BB3C8]"
              icon={HeartIcon}
            />
            <EnhancedFeatureCard
              title="AI-Powered Guidance"
              description="Grace understands context. Natural conversations, scripture recommendations, personalized encouragement, and conversation history for continuity."
              gradient="from-[#FF8A7A] to-[#FFB894]"
              icon={SparkleIcon}
            />
            <EnhancedFeatureCard
              title="Daily Practice"
              description="Build consistent habits. Fresh scripture daily, thoughtful devotionals, reading status tracking, and progress visualization."
              gradient="from-[#A89BC9] to-[#C4B8DD]"
              icon={BookIcon}
            />
            <EnhancedFeatureCard
              title="Privacy & Security"
              description="Your journey is personal. Secure authentication, private check-ins, encrypted storage, and full account control."
              gradient="from-[#E5A890] to-[#F2C4B0]"
              icon={LockIcon}
            />
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section id="explore" className="relative px-6 py-32 border-t border-[#E5E3E0] dark:border-[#374151] bg-white dark:bg-[#1A2332]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center">
            <span className="inline-block px-4 py-2 bg-[#A89BC9]/10 dark:bg-[#A89BC9]/20 rounded-full text-xs font-medium text-[#A89BC9] tracking-[0.2em] uppercase mb-6">
              How It Works
            </span>
            <h2 className="text-5xl md:text-7xl font-light mb-8 text-[#1F1F1F] dark:text-[#F5F3F0] leading-tight">
              Begin your<br />
              <span className="bg-gradient-to-r from-[#A89BC9] to-[#4A9DB8] bg-clip-text text-transparent">exploration</span>
            </h2>
          </div>

          <div className="space-y-8">
            <IronhillStep
              number="01"
              title="Sign In"
              description="Authenticate securely with Google or Apple. Your journey remains private and protected."
            />
            <IronhillStep
              number="02"
              title="Daily Scripture"
              description="Each morning, a verse awaits. Read, reflect, mark complete. Build your rhythm."
            />
            <IronhillStep
              number="03"
              title="Check-In"
              description="Express emotions—loneliness, fear, joy. Choose your tone. Receive personalized guidance."
            />
            <IronhillStep
              number="04"
              title="Grace AI"
              description="Conversations that understand. Ask questions, seek verses, share your heart. Wisdom responds."
            />
            <IronhillStep
              number="05"
              title="Devotional"
              description="Dive deeper. Context, reflection, practical application. Growth through understanding."
            />
            <IronhillStep
              number="06"
              title="Track Progress"
              description="Monitor reading status, check-in history, maintain consistency. See your journey unfold."
            />
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="waitlist" className="relative px-6 py-32 border-t border-[#E5E3E0] dark:border-[#374151] bg-[#F8F7F5] dark:bg-[#1A2332]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-2 bg-[#4A9DB8]/10 dark:bg-[#4A9DB8]/20 rounded-full text-xs font-medium text-[#4A9DB8] tracking-[0.2em] uppercase mb-6">
              Coming Soon
            </span>
            <h2 className="text-5xl md:text-7xl font-light mb-6 text-[#1F1F1F] dark:text-[#F5F3F0] leading-tight">
              Available soon on<br />
              <span className="bg-gradient-to-r from-[#4A9DB8] to-[#FF8A7A] bg-clip-text text-transparent">Android & iOS</span>
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Be among the first to experience GraceGuide on your mobile device. Join our waitlist to get notified when we launch.
            </p>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleWaitlistSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-[#E5E3E0] dark:border-[#374151] bg-white dark:bg-[#1E2835] text-[#1F1F1F] dark:text-[#F5F3F0] placeholder:text-[#6B7280] dark:placeholder:text-[rgba(245,243,240,0.4)] focus:outline-none focus:border-[#4A9DB8] transition-all duration-300 font-light"
                  required
                  disabled={waitlistStatus === 'loading' || waitlistStatus === 'success'}
                />
                <button
                  type="submit"
                  disabled={waitlistStatus === 'loading' || waitlistStatus === 'success'}
                  className="px-8 py-4 bg-gradient-to-r from-[#4A9DB8] to-[#6BB3C8] text-white rounded-full font-medium tracking-wide cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#4A9DB8]/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {waitlistStatus === 'loading' ? 'Joining...' : waitlistStatus === 'success' ? 'Joined!' : 'Join Waitlist'}
                </button>
              </div>
              
              {/* Platform Selection */}
              <div className="space-y-4">
                <div className="text-center">
                  <label className="text-sm font-medium text-[#6B7280] dark:text-[rgba(245,243,240,0.7)] mb-2 block">
                    Select your preferred platform <span className="text-[#6B7280] dark:text-[rgba(245,243,240,0.5)] font-light">(optional)</span>
                  </label>
                  <p className="text-xs text-[#6B7280] dark:text-[rgba(245,243,240,0.5)] mt-1">
                    Help us prioritize which platform to launch first
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="button"
                    onClick={() => setWaitlistPlatform(waitlistPlatform === 'ios' ? '' : 'ios')}
                    className={`px-8 py-4 rounded-full border-2 transition-all duration-300 font-medium flex items-center justify-center gap-3 min-w-[140px] ${
                      waitlistPlatform === 'ios'
                        ? 'border-[#4A9DB8] bg-[#4A9DB8]/10 dark:bg-[#4A9DB8]/20 text-[#4A9DB8] shadow-md shadow-[#4A9DB8]/20'
                        : 'border-[#E5E3E0] dark:border-[#374151] text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] hover:border-[#4A9DB8]/50 hover:bg-[#4A9DB8]/5 dark:hover:bg-[#4A9DB8]/10 hover:text-[#4A9DB8] dark:hover:text-[#4A9DB8]'
                    }`}
                    disabled={waitlistStatus === 'loading' || waitlistStatus === 'success'}
                  >
                    <IOSIcon className={`w-6 h-6 ${waitlistPlatform === 'ios' ? 'text-[#4A9DB8]' : ''}`} />
                    <span className="font-semibold">iOS</span>
                    {waitlistPlatform === 'ios' && (
                      <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWaitlistPlatform(waitlistPlatform === 'android' ? '' : 'android')}
                    className={`px-8 py-4 rounded-full border-2 transition-all duration-300 font-medium flex items-center justify-center gap-3 min-w-[140px] ${
                      waitlistPlatform === 'android'
                        ? 'border-[#4A9DB8] bg-[#4A9DB8]/10 dark:bg-[#4A9DB8]/20 text-[#4A9DB8] shadow-md shadow-[#4A9DB8]/20'
                        : 'border-[#E5E3E0] dark:border-[#374151] text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] hover:border-[#4A9DB8]/50 hover:bg-[#4A9DB8]/5 dark:hover:bg-[#4A9DB8]/10 hover:text-[#4A9DB8] dark:hover:text-[#4A9DB8]'
                    }`}
                    disabled={waitlistStatus === 'loading' || waitlistStatus === 'success'}
                  >
                    <AndroidIcon className={`w-6 h-6 ${waitlistPlatform === 'android' ? 'text-[#4A9DB8]' : ''}`} />
                    <span className="font-semibold">Android</span>
                    {waitlistPlatform === 'android' && (
                      <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Status Message */}
              {waitlistMessage && (
                <div className={`text-center px-6 py-4 rounded-2xl ${
                  waitlistStatus === 'success'
                    ? 'bg-[#4A9DB8]/10 dark:bg-[#4A9DB8]/20 text-[#4A9DB8]'
                    : 'bg-[#FF8A7A]/10 dark:bg-[#FF8A7A]/20 text-[#FF8A7A]'
                }`}>
                  <p className="font-medium">{waitlistMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-[#E5E3E0] dark:border-[#374151]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-lg font-light tracking-wider text-[#1F1F1F] dark:text-[#F5F3F0] hover:text-[#4A9DB8] transition-colors cursor-pointer mb-2 block">
                GraceGuide
              </a>
              <p className="text-sm text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] font-light">
                A place the heart knows
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] font-light">
              <a href="#journey" onClick={(e) => handleLinkClick(e, '#journey')} className="hover:text-[#4A9DB8] transition-colors cursor-pointer">Journey</a>
              <a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="hover:text-[#4A9DB8] transition-colors cursor-pointer">Features</a>
              <a href="#explore" onClick={(e) => handleLinkClick(e, '#explore')} className="hover:text-[#4A9DB8] transition-colors cursor-pointer">Explore</a>
              <a href="#waitlist" onClick={(e) => handleLinkClick(e, '#waitlist')} className="hover:text-[#4A9DB8] transition-colors cursor-pointer">Waitlist</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#E5E3E0] dark:border-[#374151] text-center text-xs text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] font-light">
            © 2025 GraceGuide
          </div>
        </div>
      </footer>
    </div>
  );
}

function JourneyStep({
  number,
  title,
  description,
  accentColor,
}: {
  number: string;
  title: string;
  description: string;
  accentColor: string;
}) {
  return (
    <div className="group relative flex gap-8 items-start p-8 rounded-3xl bg-white dark:bg-[#1E2835] border border-[#E5E3E0] dark:border-[#374151] hover:border-[#4A9DB8]/50 dark:hover:border-[#4A9DB8]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#4A9DB8]/10 hover:-translate-y-1">
      {/* Gradient accent line */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${accentColor === 'text-[#4A9DB8]' ? 'from-[#4A9DB8] to-[#6BB3C8]' : accentColor === 'text-[#FF8A7A]' ? 'from-[#FF8A7A] to-[#FFB894]' : accentColor === 'text-[#A89BC9]' ? 'from-[#A89BC9] to-[#C4B8DD]' : 'from-[#E5A890] to-[#F2C4B0]'} rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className="flex-shrink-0">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accentColor === 'text-[#4A9DB8]' ? 'from-[#4A9DB8]/20 to-[#6BB3C8]/10' : accentColor === 'text-[#FF8A7A]' ? 'from-[#FF8A7A]/20 to-[#FFB894]/10' : accentColor === 'text-[#A89BC9]' ? 'from-[#A89BC9]/20 to-[#C4B8DD]/10' : 'from-[#E5A890]/20 to-[#F2C4B0]/10'} dark:from-opacity-30 dark:to-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
          <span className={`text-3xl font-bold ${accentColor}`}>{number}</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className={`text-2xl md:text-3xl font-medium mb-4 text-[#1F1F1F] dark:text-[#F5F3F0] group-hover:${accentColor.replace('text-', 'text-')} transition-colors`}>
          {title}
        </h3>
        <p className="text-base md:text-lg text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function EnhancedFeatureCard({
  title,
  description,
  gradient,
  icon: IconComponent,
}: {
  title: string;
  description: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  // Determine icon color based on gradient
  const iconColor = gradient.includes('4A9DB8') ? 'text-[#4A9DB8]' : 
                    gradient.includes('FF8A7A') ? 'text-[#FF8A7A]' : 
                    gradient.includes('A89BC9') ? 'text-[#A89BC9]' : 
                    'text-[#E5A890]';
  
  return (
    <div className="group relative p-8 rounded-3xl bg-white dark:bg-[#1E2835] border border-[#E5E3E0] dark:border-[#374151] hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden hover:shadow-2xl hover:-translate-y-2">
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Icon - Always visible with proper contrast */}
      <div className={`relative mb-6 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500`}
        style={{
          background: gradient.includes('4A9DB8') 
            ? 'linear-gradient(135deg, rgba(74, 157, 184, 0.15) 0%, rgba(107, 179, 200, 0.1) 100%)' 
            : gradient.includes('FF8A7A')
            ? 'linear-gradient(135deg, rgba(255, 138, 122, 0.15) 0%, rgba(255, 184, 148, 0.1) 100%)'
            : gradient.includes('A89BC9')
            ? 'linear-gradient(135deg, rgba(168, 155, 201, 0.15) 0%, rgba(196, 184, 221, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(229, 168, 144, 0.15) 0%, rgba(242, 196, 176, 0.1) 100%)'
        }}
      >
        <IconComponent className={`w-8 h-8 ${iconColor} opacity-100`} strokeWidth={2} />
      </div>
      
      <h3 className="relative text-2xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0] group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-[#4A9DB8] group-hover:to-[#FF8A7A] transition-all duration-500">
        {title}
      </h3>
      <p className="relative text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] font-light leading-relaxed">
        {description}
      </p>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
}

function IronhillStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex gap-6 items-start p-6 rounded-2xl bg-white dark:bg-[#1E2835] border border-[#E5E3E0] dark:border-[#374151] hover:border-[#4A9DB8]/50 dark:hover:border-[#4A9DB8]/50 transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#4A9DB8]/5 hover:to-transparent dark:hover:from-[#4A9DB8]/10">
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4A9DB8]/20 to-[#6BB3C8]/10 dark:from-[#4A9DB8]/30 dark:to-[#6BB3C8]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-xl font-bold text-[#4A9DB8]">{number}</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#1F1F1F] dark:text-[#F5F3F0] group-hover:text-[#4A9DB8] transition-colors">
          {title}
        </h3>
        <p className="text-base md:text-lg text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

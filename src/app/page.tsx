"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, MessageCircle, CheckCircle, Star, Quote, Users, Award, Globe, Clock, Target, TrendingUp, Play, X, Zap, Rocket, DollarSign, Headphones, Sparkle, ChevronRight } from "lucide-react";

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      {value}{suffix}
    </motion.span>
  );
}

function Sparkles() {
  const ref = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; scale: number; opacity: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D4A853] rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, scale: p.scale, opacity: p.opacity }}
          animate={{
            y: [0, -20, 0],
            opacity: [p.opacity, p.opacity * 0.5, p.opacity],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, #D4A853 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }} />
  );
}

function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #059669 0%, transparent 70%)' }}
        animate={{
          x: ["-50%", "150%", "50%"],
          y: ["-50%", "150%", "-25%"],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #D4A853 0%, transparent 70%)', top: "30%", right: "-10%" }}
        animate={{
          x: ["30%", "-70%", "20%"],
          y: ["-20%", "80%", "10%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', bottom: "20%", left: "20%" }}
        animate={{
          x: ["-20%", "60%", "-30%"],
          y: ["30%", "-40%", "20%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

function AnimatedBorder() {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4A853] via-[#E8C878] to-[#D4A853] opacity-50">
        <motion.div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, transparent 0%, #D4A853 50%, transparent 100%)' }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="relative bg-[#0a0a0a] rounded-2xl p-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1px), 0 calc(100% - 1px))' }} />
      </div>
    </div>
  );
}

function BentoCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 10 }}
      transition={{ duration: 0.6, delay, type: "spring", damping: 20 }}
      className="perspective-1000"
    >
      <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 hover:border-[#D4A853]/30 transition-colors duration-300 group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A853]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        {children}
      </div>
    </motion.div>
  );
}

function YouTubeEmbed({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
    >
      {!isPlaying ? (
        <div 
          className="absolute inset-0 cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video thumbnail"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 rounded-full bg-gradient-to-r from-[#D4A853] to-[#E8C878] flex items-center justify-center shadow-lg cursor-pointer"
            >
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white text-sm font-medium">Watch the transformation story</p>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </motion.div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-zinc-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a 
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-2xl">🕌</span>
          <span className={`font-serif font-bold text-lg ${isScrolled ? "text-white" : "text-white"}`}>
            The Ultimate Provider
          </span>
        </motion.a>
        
        <div className="hidden md:flex items-center gap-8">
          {["About", "Results", "Testimonials"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-300 hover:text-[#D4A853] transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#apply"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4A853] to-[#E8C878] text-black font-semibold text-sm hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Apply Now
          </motion.a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <span className="space-y-1.5 inline-flex flex-col"><span className="block w-6 h-0.5 bg-current"/><span className="block w-6 h-0.5 bg-current"/><span className="block w-6 h-0.5 bg-current"/></span>}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800 px-6 pb-4"
          >
            <a href="#about" className="block py-2 text-zinc-300">About</a>
            <a href="#results" className="block py-2 text-zinc-300">Results</a>
            <a href="#testimonials" className="block py-2 text-zinc-300">Testimonials</a>
            <a href="#apply" className="block py-2 text-[#D4A853] font-semibold">Apply Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <GridPattern />
      <AuroraBackground />
      <Sparkles />
      
      <GradientOrb className="top-20 -left-20" />
      <GoldOrb className="bottom-20 -right-20" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 mb-8"
        >
          <Sparkle className="w-4 h-4 text-[#D4A853]" />
          <span className="text-zinc-300 text-sm font-medium">The Ultimate Provider Brotherhood ⬇️</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Stop Trading Time for Money.{" "}
          <span className="bg-gradient-to-r from-[#D4A853] via-[#E8C878] to-[#D4A853] bg-clip-text text-transparent bg-animate">
            Start Earning Remote.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
        >
          Transform your sales skills into a <span className="text-[#D4A853] font-semibold">$5K-$12K/month</span> remote income. Join 100+ brothers who've already made the leap.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a 
            href="#apply"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A853] to-[#E8C878] text-black font-bold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212, 168, 83, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Journey →
          </motion.a>
          <motion.a 
            href="https://instagram.com/bazmoheed"
            target="_blank"
            className="px-8 py-4 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-white font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <InstagramIcon className="w-5 h-5" />
            Follow @bazmoheed
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 text-zinc-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.4, 0.3],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-96 h-96 bg-gradient-to-br from-[#059669] to-[#047857] rounded-full" />
    </motion.div>
  );
}

function GoldOrb({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-64 h-64 bg-gradient-to-r from-[#D4A853] to-[#E8C878] rounded-full" />
    </motion.div>
  );
}

function Stats() {
  const stats = [
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "100+", label: "Reps Coached", icon: Users },
    { value: "$5K-12K", label: "Monthly Earning", icon: TrendingUp },
    { value: "Remote", label: "Work From Anywhere", icon: Globe },
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900/80 border border-zinc-800 mb-3"
              >
                <stat.icon className="w-8 h-8 text-[#D4A853]" />
              </motion.div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-zinc-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="relative py-24 bg-black">
      <GridPattern />
      <AuroraBackground />
      
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              See How Others Transformed Their Lives
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Watch the story of fellow brothers who were stuck in the 35-50K rut and broke free to earn 5-12K/month remotely.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <YouTubeEmbed videoId="KUUI7RMHe0M" />
        </FadeIn>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <GridPattern />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 text-red-400 text-sm font-medium mb-6 border border-red-900/50">
                <Target className="w-4 h-4" />
                The Problem
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                You're Working Hard, But Still Living Paycheck to Paycheck
              </h2>
              <p className="text-zinc-400 text-lg mb-6">
                You're making 35-50K a year, grinding 9-5 (or more), with little time for family, worship, or life. The promotion never comes. The raise is always "next year."
              </p>
              <ul className="space-y-4">
                {[
                  "Stuck in a job that drains your energy",
                  "No time for Fajr prayers or family",
                  "Living paycheck to paycheck",
                  "Feeling stuck with no way out"
                ].map((item, i) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-3 text-zinc-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <X className="w-5 h-5 text-red-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <BentoCard>
              <div className="text-center">
                <Clock className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  The Solution
                </h3>
                <p className="text-zinc-400 mb-6">
                  Master remote sales — work from anywhere, set your own hours, and earn 5-12K/month doing what you already know how to do: SELL.
                </p>
                <ul className="space-y-3 text-left">
                  {[
                    "Work from anywhere in the world",
                    "Choose your own hours",
                    "Uncapped earning potential",
                    "More time for family & worship"
                  ].map((item, i) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-3 text-zinc-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </BentoCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="results" className="relative py-24 bg-black">
      <GridPattern />
      <GoldOrb className="top-20 -left-20" />
      <GradientOrb className="bottom-20 -right-20" />
      
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Your Coach
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              15 years in sales. 100+ reps coached. This isn't theory — it's proven.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4A853]/20 to-[#E8C878]/20 rounded-3xl blur-xl" />
              <div className="relative">
                <img 
                  src="/profile.jpg"
                  alt="Coach"
                  className="rounded-3xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Baz Moheed
              </h3>
              <p className="text-emerald-500 font-semibold mb-6">The Ultimate Provider</p>
              
              <div className="space-y-6 text-zinc-400">
                <p>
                  For 15 years, I've been in sales — closing deals, building teams, and coaching reps to hit their targets.
                </p>
                <p>
                  I've coached <span className="font-semibold text-white">100+ Muslim professionals</span> to transition from stuck jobs to thriving remote sales careers earning 5-12K/month.
                </p>
                <p>
                  This isn't about teaching you sales — you already know how to sell. It's about <span className="font-semibold text-white">showing you the remote opportunity</span> that lets you earn what you're worth.
                </p>
              </div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.a 
                  href="https://instagram.com/bazmoheed"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <InstagramIcon className="w-5 h-5" />
                  @bazmoheed
                </motion.a>
                <motion.a 
                  href="#apply"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-semibold hover:bg-zinc-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="w-5 h-5" />
                  Join the Brotherhood
                </motion.a>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed K.",
      role: "Former 40K → Now 8K/month",
      text: "I was stuck making 40K/year. Within 3 months of joining the program, I closed my first 8K month. Alhumdulillah, now I work from home and have time for prayers.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
      name: "Omar M.",
      role: "Former 35K → Now 7K/month",
      text: "The brotherhood changed everything. I went from dreading my job to earning more than double — working just 4 hours a day from my laptop.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    },
    {
      name: "Yusuf R.",
      role: "Former 45K → Now 12K/month",
      text: "Best decision I ever made. The training is practical, the support is real, and the results speak for themselves. My family has never been happier.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-black">
      <GridPattern />
      
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Brothers Who Made It
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Real results from real people who were where you are now.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10, rotateX: 5 }}
                className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 h-full"
              >
                <Quote className="w-8 h-8 text-[#D4A853]/50 mb-4" />
                <p className="text-zinc-300 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-emerald-500">{t.role}</div>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4A853] fill-[#D4A853]" />
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [formState, setFormState] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("success");
  };

  return (
    <section id="apply" className="relative py-24 bg-black overflow-hidden">
      <GridPattern />
      <AuroraBackground />
      <Sparkles />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make the Leap?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Stop waiting for "someday." Join the brotherhood and start earning what you're worth.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          {formState === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-900/30 border border-green-500/30 rounded-2xl p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">MashAllah!</h3>
              <p className="text-zinc-400">
                We'll be in touch within 24 hours. Check your DM or email for next steps.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-zinc-300 font-medium mb-2">What's your name?</label>
                  <motion.input 
                    type="text" 
                    required
                    placeholder="Your name"
                    className="w-full px-5 py-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4A853]"
                    whileFocus={{ borderColor: "#D4A853" }}
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-medium mb-2">How can we reach you?</label>
                  <motion.input 
                    type="email" 
                    required
                    placeholder="Your email or DM handle"
                    className="w-full px-5 py-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4A853]"
                    whileFocus={{ borderColor: "#D4A853" }}
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-medium mb-2">What's your current income?</label>
                  <select className="w-full px-5 py-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-[#D4A853]">
                    <option value="" className="text-gray-900">Select range</option>
                    <option value="25-35" className="text-gray-900">25K-35K/year</option>
                    <option value="35-50" className="text-gray-900">35K-50K/year</option>
                    <option value="50+" className="text-gray-900">50K+/year</option>
                  </select>
                </div>
                <motion.button 
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A853] to-[#E8C878] text-black font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now <ChevronRight className="w-5 h-5" />
                </motion.button>
                <p className="text-center text-zinc-500 text-sm">
                  Limited spots available. No pressure — just a conversation.
                </p>
              </form>
            </motion.div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-2xl">🕌</span>
            <span className="font-serif font-bold text-lg text-white">The Ultimate Provider</span>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <motion.a 
              href="https://instagram.com/bazmoheed" 
              target="_blank"
              className="text-zinc-500 hover:text-[#D4A853] transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <InstagramIcon className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://instagram.com/bazmoheed" 
              target="_blank"
              className="text-zinc-500 hover:text-[#D4A853] transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05, x: 2 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-sm">DM to apply</span>
            </motion.a>
          </div>
          
          <p className="text-zinc-600 text-sm">
            © 2026 The Ultimate Provider Brotherhood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <VideoSection />
      <Problem />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
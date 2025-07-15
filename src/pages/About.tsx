import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Eye, Heart, Award, Building2, Globe, Shield } from 'lucide-react';
import teamCollaborationImage from '@/assets/team-collaboration.jpg';
import officeBuildingImage from '@/assets/office-building.jpg';
import { motion } from 'framer-motion'

const About = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-hero text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${teamCollaborationImage}')`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-corporate-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-poppins mb-4 sm:mb-6 animate-fade-in leading-tight">
            About OPPA Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in px-2">
            Kenya's Leading ICT Systems Integrator - Delivering Future-Ready Solutions Across Africa
          </p>
          <Badge className="bg-white/20 text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 hover:bg-white/30 transition-colors inline-flex items-center">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            <span className="break-all sm:break-normal">AGPO Certified: PVT-5JUEKP5J</span>
          </Badge>
        </div>
      </section>

      {/* Company Story - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="outline" className="mb-4 sm:mb-6 bg-primary/10 text-primary border-primary/20">
               Our Journey
            </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
          Building Africa's Digital Future
        </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
                <p>
                  OPPA Services Limited was founded with a simple vision, to support Africa&apos;s growing ICT needs with reliable, thoughtful solutions. While we're a young company, our approach is grounded in consistency, curiosity, and a strong desire to do things right.
                </p>
                <p>
                  Based in Nairobi, we work closely with clients across Kenya and the region, helping them navigate technology with clarity and confidence. Our focus is on building long-term relationships through dependable service and practical, high-impact solutions.
                </p>
                <p>
                  Our team brings together certified professionals with hands-on experience, a passion for solving real business challenges, and a deep respect for the local context. We&apos;re not here to promise everything, but we show up, we build smart, and we listen.
                </p>
              </div>
            </div>
            
            {/* Enhanced Our Story Image Section - Mobile Optimized */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <img 
                  src="/images/about/oppa-kenya-mission.png" 
                  alt="OPPA Services - Our Story and Mission in Kenya"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                    <p className="text-white text-xs sm:text-sm font-medium">
                      "Technology should solve real problems; that's why we focus on solutions that create lasting impact."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Office Building Card - Mobile Optimized */}
          <div className="mt-12 sm:mt-16 max-w-2xl mx-auto">
            <div className="relative bg-gradient-corporate rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{
                  backgroundImage: `url('${officeBuildingImage}')`,
                }}
              ></div>
              <div className="relative z-10">
                <Building2 className="h-12 w-12 sm:h-16 sm:w-16 mb-4 sm:mb-6 opacity-80" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Headquarters</h3>
                <p className="text-primary-foreground/90 mb-3 sm:mb-4 text-sm sm:text-base">
                 Based at Elysee Plaza in Nairobi, our space reflects our focus on thoughtful service, collaboration, and modern solutions.
                </p>
                <div className="text-xs sm:text-sm opacity-80">
                  <p>Elysee Plaza, 2nd Floor</p>
                  <p>Kilimani Road, Nairobi</p>
                  <p>P.O. Box 1455 – 00200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose - Mobile Optimized */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <Badge variant="outline" className="inline-block mb-3 text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full text-xs sm:text-sm">
              Our Foundation
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary leading-tight">
              Core <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">Principles</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              The bedrock of our operations and decision-making at OPPA Services
            </p>
          </motion.div>

          {/* Core Principles Image Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-corporate-blue/10 to-purple-600/10">
                <img 
                  src="/images/about/oppa-vision.png" 
                  alt="OPPA Services Core Values - Mission, Vision, and Purpose"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">Our Guiding Principles</h3>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg">
                      Purpose • Mission • Vision - The foundation of everything we do
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
                {
                  icon: Heart,
                  title: "Our Purpose",
                  description:
                    "To empower Africa's digital economy through exceptional ICT solutions that create lasting value for our clients and communities.",
                  color: "bg-gradient-to-r from-rose-500 to-pink-600 text-white",
                },
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "Deliver inclusive, client-focused ICT solutions that exceed expectations and drive tangible business transformation across industries.",
                  color: "bg-gradient-to-r from-blue-500 to-primary text-white",
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  description:
                    "To be Africa's undisputed leader in ICT innovation – recognized for excellence, reliability, and transformative impact.",
                  color: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white",
                },
              ]
              .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group perspective-1000 sm:col-span-1 lg:col-span-1"
              >
                <Card className="h-full border border-border/20 bg-background/80 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform-style-preserve-3d group-hover:rotate-x-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <CardContent className="relative p-6 sm:p-8 md:p-10 h-full flex flex-col">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mb-6 sm:mb-8 flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                      <item.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 font-poppins">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow text-sm sm:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Why Choose Us - Enhanced with Slide Animations */}
<section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-accent/5 to-background overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-12 sm:mb-16 md:mb-20"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Badge variant="outline" className="inline-block mb-3 text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full text-xs sm:text-sm">
          Competitive Edge
        </Badge>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary leading-tight"
      >
        The <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">OPPA Advantage</span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2"
      >
        Distinctive qualities that set us apart in the ICT landscape
      </motion.p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[
        {
          icon: Shield,
          title: "AGPO Certified",
          description: "Recognized as a government-compliant service provider, committed to inclusivity and responsible business practices.",
          color: "text-green-500",
          bgColor: "bg-green-500/10",
          image: "/images/kenya/agpo-certified.png"
        },
        {
          icon: Globe,
          title: "Rooted in Africa",
          description: "We blend global standards with a deep understanding of the East African business and ICT environment.",
          color: "text-blue-500",
          bgColor: "bg-blue-500/10",
          image: "/images/kenya/nairobi-skyline.jpg"
        },
        {
          icon: Users,
          title: "Skilled & Certified Team",
          description: "Led by professionals with vendor certifications and a hands-on approach to problem-solving.",
          color: "text-amber-500",
          bgColor: "bg-amber-500/10",
          image: "/images/kenya/tech-team.jpg"
        },
        {
          icon: Award,
          title: "Growing with Intention",
          description: "Early projects have laid a strong foundation for our mission: build solutions that last and relationships that matter.",
          color: "text-purple-500",
          bgColor: "bg-purple-500/10",
          image: "/images/kenya/growth.jpg"
        },
        {
          icon: Target,
          title: "Focused on Your Needs",
          description: "We take time to understand your goals, and tailor solutions that actually fit, no one-size-fits-all here.",
          color: "text-red-500",
          bgColor: "bg-red-500/10",
          image: "/images/kenya/client-meeting.jpg"
        },
        {
          icon: Building2,
          title: "Nairobi-Based, Region-Focused",
          description: "Strategically located in Nairobi's tech corridor, we're within reach and ready to support you as you grow.",
          color: "text-corporate-blue",
          bgColor: "bg-corporate-blue/10",
          image: "/images/kenya/oppa-office.jpg"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0, 
            x: -60,
            scale: 0.9 
          }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            scale: 1 
          }}
          transition={{ 
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ 
            scale: 1.03,
            y: -5,
            transition: { duration: 0.3 }
          }}
          className="sm:col-span-1 lg:col-span-1"
        >
          <Card className="h-full border border-border/20 bg-background/80 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-500 hover:border-primary/40 relative">
            {/* Enhanced Image Header with Parallax Effect */}
            <motion.div 
              className="relative h-40 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img 
                src={feature.image}
                alt={`Kenyan ${feature.title.toLowerCase()} context`}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              
              {/* Animated Gradient Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Animated Floating Icon */}
              <motion.div 
                className="absolute top-4 right-4"
                initial={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={`w-10 h-10 rounded-lg flex items-center justify-center bg-background/90 backdrop-blur-sm border border-border/30 ${feature.bgColor}`}
                  whileHover={{ 
                    boxShadow: `0 0 20px ${feature.color.includes('green') ? '#10b981' : feature.color.includes('blue') ? '#3b82f6' : feature.color.includes('amber') ? '#f59e0b' : feature.color.includes('purple') ? '#8b5cf6' : feature.color.includes('red') ? '#ef4444' : '#0ea5e9'}40`
                  }}
                >
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </motion.div>
              </motion.div>
              
              {/* Sliding Number Badge */}
              <motion.div
                className="absolute bottom-4 left-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            </motion.div>
            
            <CardContent className="p-4 sm:p-6 relative">
              {/* Animated Title */}
              <motion.h3 
                className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>
              
              {/* Animated Description */}
              <motion.p 
                className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
              
              {/* Animated Divider */}
              <motion.div 
                className="h-px w-full bg-gradient-to-r from-transparent via-border/40 to-transparent my-3 sm:my-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.9 }}
                viewport={{ once: true }}
              />
              
              {/* Enhanced Footer with Slide Animation */}
              <motion.div 
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 1.1 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="text-xs font-mono text-muted-foreground/60 tracking-wider"
                  whileHover={{ scale: 1.05 }}
                >
                  ADV#{String(index + 1).padStart(2, '0')}
                </motion.span>
                
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-primary font-medium">
                    Kenyan Certified
                  </span>
                </motion.div>
              </motion.div>
              
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${feature.color.includes('green') ? '#10b98130' : feature.color.includes('blue') ? '#3b82f630' : feature.color.includes('amber') ? '#f59e0b30' : feature.color.includes('purple') ? '#8b5cf630' : feature.color.includes('red') ? '#ef444430' : '#0ea5e930'} 0%, transparent 70%)`
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    
    {/* Additional Floating Elements */}
    <motion.div
      className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
      animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute bottom-20 right-10 w-16 h-16 bg-accent/5 rounded-full blur-lg"
      animate={{
        x: [0, -25, 0],
        y: [0, 15, 0],
        scale: [1, 0.8, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
  </div>
</section>
      {/* Team Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <Badge variant="outline" className="inline-block mb-3 text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full text-xs sm:text-sm">
              Leadership
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary leading-tight">
              Meet Our <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">Visionaries</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              The strategic minds shaping OPPA's trajectory
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
            {[
              {
                name: "Rachel Muthoga",
                position: "Chief Executive Officer",
                expertise: "Strategic Leadership | Human Rights Advocacy | Public Policy",
                experience: "15+ years across legal, non-profit & private sector leadership",
                initials: "RM",
                photo: "/images/about/rachel-muthoga.jpg",
                color: "bg-gradient-to-br from-purple-600 to-pink-600"
              },
              {
                name: "Tyler David Wambua",
                position: "Finance Director", 
                expertise: "Financial Strategy | Risk Management | Corporate Governance",
                experience: "4+ years in financial leadership roles",
                initials: "TDW",
                photo: "/images/about/tyler-wambua.jpg",
                color: "bg-gradient-to-br from-blue-600 to-corporate-blue"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="sm:col-span-1"
              >
                <Card className="h-full border-0 overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <div className="relative h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-95"
                      />
                    ) : (
                      <div className={`w-full h-full ${member.color} flex items-center justify-center text-white font-bold text-4xl sm:text-5xl md:text-6xl absolute inset-0`}>
                        {member.initials}
                      </div>
                    )}
                    
                    <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-8 md:p-10">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-blue-400 sm:text-blue-600 font-semibold text-lg sm:text-xl mb-4 sm:mb-6">{member.position}</p>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">{member.expertise}</p>
                        <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm">
                          {member.experience}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
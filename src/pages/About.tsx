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

     {/* Why Choose Us - With Kenyan Images */}
<section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-accent/5 to-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12 sm:mb-16 md:mb-20"
    >
      <Badge variant="outline" className="inline-block mb-3 text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full text-xs sm:text-sm">
        Competitive Edge
      </Badge>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary leading-tight">
        The <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">OPPA Advantage</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
        Distinctive qualities that set us apart in the ICT landscape
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[
        {
          icon: Shield,
          title: "AGPO Certified",
          description: "Recognized as a government-compliant service provider, committed to inclusivity and responsible business practices.",
          color: "text-green-500",
          image: "/images/kenya/agpo-certified.jpg" // Kenyan government building
        },
        {
          icon: Globe,
          title: "Rooted in Africa",
          description: "We blend global standards with a deep understanding of the East African business and ICT environment.",
          color: "text-blue-500",
          image: "/images/kenya/nairobi-skyline.jpg" // Nairobi skyline
        },
        {
          icon: Users,
          title: "Skilled & Certified Team",
          description: "Led by professionals with vendor certifications and a hands-on approach to problem-solving.",
          color: "text-amber-500",
          image: "/images/kenya/tech-team.jpg" // Kenyan tech professionals
        },
        {
          icon: Award,
          title: "Growing with Intention",
          description: "Early projects have laid a strong foundation for our mission: build solutions that last and relationships that matter.",
          color: "text-purple-500",
          image: "/images/kenya/growth.jpg" // African business growth imagery
        },
        {
          icon: Target,
          title: "Focused on Your Needs",
          description: "We take time to understand your goals, and tailor solutions that actually fit, no one-size-fits-all here.",
          color: "text-red-500",
          image: "/images/kenya/client-meeting.jpg" // Kenyan business meeting
        },
        {
          icon: Building2,
          title: "Nairobi-Based, Region-Focused",
          description: "Strategically located in Nairobi's tech corridor, we're within reach and ready to support you as you grow.",
          color: "text-corporate-blue",
          image: "/images/kenya/oppa-office.jpg" // OPPA office exterior
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="sm:col-span-1 lg:col-span-1"
        >
          <Card className="h-full border border-border/20 bg-background/80 backdrop-blur-sm overflow-hidden group hover:shadow-lg transition-all duration-300 hover:border-primary/30">
            {/* Image Header */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={feature.image}
                alt={`Kenyan ${feature.title.toLowerCase()} context`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${feature.color.includes('text-') ? 'bg-background' : 'bg-accent/10'} backdrop-blur-sm`}>
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
              </div>
            </div>
            
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-border/40 to-transparent my-3 sm:my-4"></div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-muted-foreground/60 tracking-wider">
                  ADV#{index + 1}
                </span>
                <span className="text-xs text-primary font-medium">
                  Kenyan Certified
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
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
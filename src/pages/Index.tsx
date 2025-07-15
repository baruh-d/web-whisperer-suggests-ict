import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TechMascot from '@/components/TechMascot';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
// import Tilt from "react-parallax-tilt";
import { 
  useHeroAnimation, 
  useServicesAnimation, 
  usePartnersAnimation,
  useCounterAnimation,
  useAnimation,
  useStaggerAnimation 
} from '@/hooks/useAnimations';
import { iconMap, serviceCategories } from '@/config/services';
import { 
  ArrowRight, 
  ArrowLeft,
  Shield, 
  Zap, 
  Users, 
  Trophy,
  Star,
  CheckCircle,
  Sparkles,
  Award,
  Globe,
  Phone,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import ServicesGrid from '@/components/ServiceGrid';

// Import images
import professionalMeetingImage from '@/assets/professional-meeting.jpg';
import techworkspaceImage from '@/assets/tech-workspace.jpg';

// Partner Logos
import microsoftLogo from '@/assets/partners/microsoft-logo.png';
import ciscoLogo from '@/assets/partners/cisco-logo.png';
import hpLogo from '@/assets/partners/hp-logo.png';
import dellLogo from '@/assets/partners/dell-logo.png';
import lenovoLogo from '@/assets/partners/lenovo-logo.png';
import intelLogo from '@/assets/partners/intel-logo.png';
import vmwareLogo from '@/assets/partners/vmware-logo.png';
import canonLogo from '@/assets/partners/canon-logo.png';
import fortinetLogo from '@/assets/partners/fortinet-logo.png';
import ubiquitiLogo from '@/assets/partners/ubiquiti-logo.png';
import epsonLogo from '@/assets/partners/epson-logo.png';
import mikrotikLogo from '@/assets/partners/mikrotik-logo.png';
import adobeLogo from '@/assets/partners/adobe-logo.png';
import autodeskLogo from '@/assets/partners/autodesk-logo.png';
import oracleLogo from '@/assets/partners/oracle-logo.png';
import sapLogo from '@/assets/partners/sap-logo.png';

const Index: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  // const statsRef = useRef<HTMLElement>(null);
  
  const [mascotMessage, setMascotMessage] = useState("Welcome to OPPA Tech!");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Animation hooks
  useHeroAnimation(heroRef);
  useServicesAnimation(servicesRef);
  usePartnersAnimation(partnersRef);
  
  // Counter animations
  const clientCountRef = useRef<HTMLSpanElement>(null);
  const projectCountRef = useRef<HTMLSpanElement>(null);
  const satisfactionRef = useRef<HTMLSpanElement>(null);
  
  useCounterAnimation(clientCountRef, 500);
  useCounterAnimation(projectCountRef, 1000);
  useCounterAnimation(satisfactionRef, 98);

  // Stagger animations
  const testimonialsRef = useStaggerAnimation('.testimonial-card', 'up');
  const featuresRef = useRef<HTMLDivElement | null>(null);
  useStaggerAnimation('.feature-card', 'left');

  // Animations for individual elements
  const { ref: ctaRef } = useAnimation('scaleIn', { delay: 0.5 });
  const { ref: aboutRef } = useAnimation('fadeIn', { delay: 0.3 });

  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "IT Director",
      company: "Kenya Commercial Bank",
      content: "OPPA Services transformed our network infrastructure completely. Their team's expertise and professionalism exceeded our expectations. The 24/7 support has been invaluable.",
      rating: 5,
      image: "SK"
    },
    {
      name: "James Mwangi",
      role: "Operations Manager",
      company: "Nairobi Hospital",
      content: "The CCTV and access control system installation was flawless. OPPA's attention to detail and commitment to quality is unmatched. Highly recommend their services.",
      rating: 5,
      image: "JM"
    },
    {
      name: "Grace Wanjiku",
      role: "CEO",
      company: "Safaricom Foundation",
      content: "From video conferencing setup to complete office automation, OPPA Services delivered beyond our expectations. Their AGPO certification was crucial for our procurement process.",
      rating: 5,
      image: "GW"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Enterprise Security",
      description: "Advanced security solutions protecting your business assets"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "High Performance",
      description: "Cutting-edge technology for optimal system performance"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Expert Support",
      description: "24/7 technical support from certified professionals"
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-500" />,
      title: "Award Winning",
      description: "Recognized excellence in IT solutions across East Africa"
    }
  ];

  // const stats = [
  //   { icon: Users, label: 'Happy Clients', value: '500+' },
  //   { icon: Award, label: 'Years Experience', value: '10+' },
  //   { icon: Zap, label: 'Services Offered', value: '24+' },
  //   { icon: Globe, label: 'Projects Completed', value: '1000+' },
  // ];

  // Partner logos with names for better accessibility
  const partners = [
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'Cisco Systems', logo: ciscoLogo },
    { name: 'HP Inc.', logo: hpLogo },
    { name: 'Dell Technologies', logo: dellLogo },
    { name: 'Lenovo', logo: lenovoLogo },
    { name: 'Intel Corporation', logo: intelLogo },
    { name: 'VMware', logo: vmwareLogo },
    { name: 'Canon', logo: canonLogo },
    { name: 'Fortinet', logo: fortinetLogo },
    { name: 'Ubiquiti Networks', logo: ubiquitiLogo },
    { name: 'Epson', logo: epsonLogo },
    { name: 'MikroTik', logo: mikrotikLogo },
    { name: 'Adobe', logo: adobeLogo },
    { name: 'Autodesk', logo: autodeskLogo },
    { name: 'Oracle', logo: oracleLogo },
    { name: 'SAP', logo: sapLogo },
  ];

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleMascotClick = () => {
    const messages = [
      "Ready to transform your business?",
      "Let's build something amazing together!",
      "Your tech partner since 2010!",
      "Innovation meets reliability!"
    ];
    setMascotMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-hero text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${techworkspaceImage}')`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-corporate-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <Badge className="hero-badge mb-6 bg-gradient-corporate text-white border-0 px-6 py-2 text-sm font-semibold animate-[fade-in_0.6s_ease-out]">
            <Sparkles className="w-4 h-4 mr-2" />
            Kenya's Leading ICT Systems Integrator
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white font-display animate-[fade-in_0.8s_ease-out_0.2s_both] tracking-tight">
            Let us get you, your solutions
          </h1>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-[fade-in_1s_ease-out_0.4s_both] font-body leading-relaxed">
            Kenya's leading ICT systems integrator delivering future-proof solutions across Africa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in_1s_ease-out_0.6s_both]">
            <Button size="lg" className="bg-gradient-corporate hover:shadow-glow text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105" asChild>
              <Link to="/contact">Get Your Solution Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-black hover:bg-white/20 text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
        
        {/* Tech Mascot */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <TechMascot 
            speechBubble={mascotMessage}
            onClick={handleMascotClick}
            className="animate-[float_3s_ease-in-out_infinite]"
          />
        </div>
      </section>

     
{/* Pure Floating Logos Marquee */}
<section className="py-20 bg-background overflow-hidden relative">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-display">
        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Leading Organizations</span>
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Partnering with global innovators to deliver exceptional solutions
      </p>
    </div>

    {/* Logo Marquee Container */}
    <div className="relative h-28 flex items-center overflow-x-visible">
      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Animated Logos - Pure Floating */}
      <div className="flex items-center animate-carousel-infinite-scroll space-x-16">
        {[...partners, ...partners].map((partner, i) => (
          <img
            key={`${partner.name}-${i}`}
            src={partner.logo}
            alt={partner.name}
            className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </div>
</section>
      {/* Premium Services Showcase */}
<section ref={servicesRef} className="py-20 lg:py-28 bg-gradient-to-b from-background to-background/80">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="inline-block mb-3 text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full">
        TRANSFORM YOUR BUSINESS
      </span>
      <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
        Enterprise-Grade ICT Solutions
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Cutting-edge technology services designed to propel African businesses forward
      </p>
    </div>

    {/* Services Grid */}
    <ServicesGrid serviceCategories={serviceCategories} />
      

    {/* CTA */}
    <div className="text-center mt-16">
      <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-md transition-all group">
        <Link to="/services">
          Discover All Solutions <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      <p className="mt-4 text-sm text-muted-foreground">
        Schedule a free consultation to discuss your needs
      </p>
    </div>
  </div>
</section>
      {/* Why Choose OPPA - Enhanced */}
      <section ref={aboutRef} className="py-20 lg:py-24 bg-accent/20 relative overflow-hidden">
  {/* Enhanced background with subtle patterns */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>
  
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
    style={{
      backgroundImage: `url('${professionalMeetingImage}')`,
    }}
  ></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 animate-[fade-in_0.6s_ease-out]">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/20 backdrop-blur-sm text-accent-blue-foreground rounded-full text-sm font-medium mb-6">
        <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
        Kenya's #1 ICT Partner
      </div>
      
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight font-poppins">
        Why Choose 
        <span className="bg-gradient-corporate bg-clip-text text-transparent"> OPPA Services</span>?
      </h2>
      
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Kenya's most trusted ICT systems integrator with a proven track record of excellence
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={featuresRef}>
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="feature-card group text-center bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-accent-blue/50 hover:shadow-elite transition-all duration-500 hover:-translate-y-2 opacity-0 translate-x-10 data-[visible=true]:opacity-100 data-[visible=true]:translate-x-0"
          style={{ transitionDelay: `${index * 100}ms` }}
          data-visible={true}
        >
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative w-16 h-16 bg-gradient-corporate rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-corporate">
            {feature.icon}
            <div className="absolute inset-0 rounded-2xl bg-primary-glow/20 group-hover:bg-primary-glow/30 transition-colors duration-300"></div>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-blue transition-colors duration-300">
            {feature.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {feature.description}
          </p>
          
          {/* Optional: Add a small indicator dot */}
          <div className="w-2 h-2 bg-accent-blue rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Animated Testimonials Carousel */}
<section className="py-24 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
  {/* Floating decorative elements */}
  <div className="absolute top-20 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float-1"></div>
  <div className="absolute bottom-10 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-2"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-20">
      <span className="inline-block mb-4 text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full tracking-wider animate-fade-in">
        CLIENT SUCCESS STORIES
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary animate-fade-in [animation-delay:100ms]">
        Trusted by Industry Leaders
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
        Join 500+ satisfied clients who transformed their business with our solutions
      </p>
    </div>

    {/* Animated Testimonials Grid */}
    <div className="relative">
      {/* Navigation arrows for mobile */}
      <div className="md:hidden flex justify-between mb-6">
        <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-border/20 hover:bg-white/20 transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-border/20 hover:bg-white/20 transition-colors">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="h-full border border-border/20 hover:border-primary/30 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <CardContent className="p-8 h-full flex flex-col">
                {/* Rating */}
                <div className="flex mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`} 
                    />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-lg text-muted-foreground mb-6 italic leading-relaxed flex-1">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Client info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border/20">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold overflow-hidden">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span>{testimonial.name.charAt(0)}</span>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-card flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View more button */}
      <div className="text-center mt-16 animate-fade-in [animation-delay:800ms]">
        <Button 
          variant="outline" 
          size="lg" 
          className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/50 px-10 py-5 font-medium group"
        >
          View All Testimonials
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  </div>
</section>
      {/* OPPA Premium Services Showcase */}
<section className="py-24 bg-gradient-to-b from-background to-background/90">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <span className="inline-block mb-4 text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full tracking-wide animate-fade-in">
        INTEGRATED ICT SOLUTIONS
      </span>
      <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary animate-fade-in [animation-delay:100ms]">
        Let Us Get You, Your Solutions.
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
        From smart automation to secure communication systems — we design with intention, build with precision, and support with heart.
      </p>
    </div>

    {/* Feature image and CTA */}
    <div className="relative rounded-3xl overflow-hidden shadow-elite hover:shadow-hover transition-all duration-500 group">
      
      {/* Full-bleed image */}
      <div className="h-[500px] overflow-hidden">
        <img 
          src="/ict-integration.png" 
          alt="OPPA ICT Systems in Action" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-12">
        <div className="max-w-2xl">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Scalable, Reliable,
            </span> Built for Africa
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Explore our real-time, AI-powered, and energy-efficient ICT solutions - customized for enterprises, institutions, and organizations that demand performance.
          </p>
        </div>
      </div>

      {/* Animated Tech Highlights */}
      <div className="absolute top-8 right-8 flex flex-wrap gap-3">
        <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white flex items-center">
          <Shield className="h-3 w-3 mr-1.5 text-emerald-400" />
          Secure by Design
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white flex items-center">
          <Zap className="h-3 w-3 mr-1.5 text-amber-400" />
          Power-Efficient Builds
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white flex items-center">
          <Globe className="h-3 w-3 mr-1.5 text-blue-400" />
          Nationwide Deployments
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Simplified CTA Section */}
<section ref={ctaRef} className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
  {/* Background overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
  
  {/* Floating icon balls - better spaced */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Top Left */}
    <div className="absolute top-20 left-20 w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center animate-float-1">
      <Shield className="h-6 w-6 text-white" />
    </div>
    
    {/* Top Right */}
    <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center animate-float-2">
      <CheckCircle className="h-5 w-5 text-white" />
    </div>
    
    {/* Bottom Left */}
    <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center animate-float-3">
      <Award className="h-7 w-7 text-white" />
    </div>
    
    {/* Bottom Right */}
    <div className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center animate-float-4">
      <Star className="h-6 w-6 text-white" />
    </div>
    
    {/* Middle Left */}
    <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center animate-float-5">
      <Sparkles className="h-5 w-5 text-white" />
    </div>
    
    {/* Middle Right */}
    <div className="absolute top-1/2 right-10 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-float-6">
      <Globe className="h-6 w-6 text-white" />
    </div>
  </div>

  <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
      Let's build something great
    </h2>
    <p className="text-lg text-primary-foreground/90 mb-8 mx-auto">
      Get started with our ICT solutions today
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 font-bold hover:scale-105" asChild>
        <Link to="/contact">
          <Phone className="h-5 w-5 mr-2" />
          Contact Us
        </Link>
      </Button>
      <Button variant="outline" size="lg" className="border-white/30 text-black hover:bg-black/10 px-8 py-4 hover:scale-105" asChild>
        <Link to="/solutions">
          Our Solutions
          <ArrowRight className="h-5 w-5 ml-2" />
        </Link>
      </Button>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Index;
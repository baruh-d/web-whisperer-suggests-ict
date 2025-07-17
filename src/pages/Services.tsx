import { useState, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, ExternalLink, Home, ChevronRight,
  Phone, Clock, Zap, Check
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  serviceCategories, 
  services, 
  getServicesByCategory,
  iconMap
} from '@/config/services';
import { Service } from '@/config/services';
import { 
  useStaggerAnimation,
  useHoverAnimation,
  useScrollAnimation
} from '@/hooks/useAnimations';
import { motion } from 'framer-motion';

// Image imports
import servicesNetworkImage from '@/assets/services-network.jpg';
import servicesAudioVisualImage from '@/assets/services-audiovisual.jpg';
import servicesSecurityImage from '@/assets/services-security.jpg';
import servicesAutomationImage from '@/assets/services-automation.jpg';
import servicesSoftwareImage from '@/assets/services-software.jpg';
import noiseTexture from '@/assets/noise.jpg';

// Service Card Component
const ServiceCard = ({ service, image }: { service: Service, image: string }) => {
  const featuresRef = useRef(null);
  useScrollAnimation(() => console.log('Features section entered viewport'));

  return (
    <Card className="service-card group hover:shadow-glow transition-all duration-500 border-2 border-border/20 hover:border-primary/30 bg-gradient-to-br from-card to-card/50 overflow-hidden glass backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
      
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative h-52 overflow-hidden transform-3d">
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 z-10">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/30 text-black hover:bg-white/20 hover:text-white ml-auto backdrop-blur-sm"
              asChild
            >
              <Link to={`/services/${service.id}`}>
                View Details <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <img 
            src={image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.shortDescription}
            </p>
            
            <div ref={featuresRef} className="pt-4 mt-4 border-t border-border/20">
              <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
                <Zap className="w-4 h-4 text-primary mr-2 animate-pulse-slow" />
                Key Features
              </h4>
              <ul className="space-y-2 text-sm">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-4 w-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0 transform transition-transform group-hover:scale-110 group-hover:text-primary" />
                    <span className="transition-all group-hover:translate-x-1">{feature}</span>
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-primary text-xs font-medium flex items-center mt-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 animate-pulse-slow"></span>
                    +{service.features.length - 3} more features
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-border/20">
            <Button 
              asChild 
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-glow transition-all group"
            >
              <Link to={`/services/${service.id}`}>
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('infrastructure');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // // Consolidated animation refs
  // const { refs: animationRefs } = useAnimationSet({
  //   hero: { animation: 'fadeIn', delay: 0.2 },
  //   breadcrumb: { animation: 'slideLeft', delay: 0.1 },
  //   tabs: { animation: 'slideLeft', delay: 0.3 },
  //   categoryHeader: { animation: 'fadeIn', delay: 0.2 },
  //   cta: { animation: 'scaleIn', delay: 0.4 }
  // });

  // Memoized services by category
  const servicesByCategory = useMemo(() => {
    return serviceCategories.reduce((acc, category) => {
      acc[category.id] = getServicesByCategory(category.id);
      return acc;
    }, {} as Record<string, Service[]>);
  }, []);

  // Optimized image getter
  const getServiceImage = useCallback((categoryId: string) => {
    const imageMap = {
      'infrastructure': servicesNetworkImage,
      'communication': servicesAudioVisualImage,
      'security': servicesSecurityImage,
      'automation': servicesAutomationImage,
      'software': servicesSoftwareImage,
      'people': servicesNetworkImage,
    };
    return imageMap[categoryId as keyof typeof imageMap] || servicesNetworkImage;
  }, []);

  // Dynamic icon renderer
  const renderCategoryIcon = useCallback((categoryId: string) => {
    const category = serviceCategories.find(c => c.id === categoryId);
    const Icon = category ? iconMap[category.icon] : iconMap.Server;
    return <Icon className="w-5 h-5 group-hover:text-primary group-hover:drop-shadow-glow transition-all" />;
  }, []);

  // Handle tab hover with additional effects
  const handleTabHover = useCallback((categoryId: string | null) => {
    setHoveredTab(prev => {
      // Add any additional hover logic here
      return categoryId;
    });
  }, []);

  // Animation refs
  const servicesRef = useRef(null);
  const containerRef = useStaggerAnimation('.service-card', 'up');
  
  const ctaButtonRef = useRef(null);
  useHoverAnimation(
    ctaButtonRef,
    () => {
      if (ctaButtonRef.current) {
        ctaButtonRef.current.style.transform = 'translateY(-4px) scale(1.02)';
        ctaButtonRef.current.style.boxShadow = 'var(--shadow-glow)';
      }
    },
    () => {
      if (ctaButtonRef.current) {
        ctaButtonRef.current.style.transform = 'translateY(0) scale(1)';
        ctaButtonRef.current.style.boxShadow = 'var(--shadow-card)';
      }
    }
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Premium noise texture with subtle animation */}
      <div 
        className="fixed inset-0 opacity-[3%] pointer-events-none"
        style={{ 
          backgroundImage: `url(${noiseTexture})`,
          animation: 'text-gradient 15s ease infinite'
        }}
      ></div>
      
      <Navigation />
      
      {/* Glass breadcrumb with floating effect */}
      <section 
        // ref={animationRefs.breadcrumb}
        className="glass bg-gradient-to-r from-background/50 to-accent/5 py-4 border-b border-border/20 backdrop-blur-lg shadow-soft hover:shadow-glow transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-primary transition-all duration-300 group"
            >
              <Home className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground transform transition-transform duration-300 group-hover:translate-x-1" />
            <span className="text-foreground font-medium">Services</span>
          </nav>
        </div>
      </section>
      
      {/* Ultra-premium hero section */}
      <section 
        // ref={animationRefs.hero}
        className="relative text-white overflow-hidden isolate h-[60vh] lg:h-[70vh] flex items-center justify-center"
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-corporate-black/80 to-primary/5 z-[-2]"></div>
        
        {/* Dynamic background image with parallax */}
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url('${servicesNetworkImage}')`,
            transform: 'translateZ(-2px) scale(1.2)',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        ></div>
        
        {/* Floating light effects */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float-advanced"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-accent-blue/10 blur-3xl animate-float-advanced animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 rounded-full bg-secondary/10 blur-2xl animate-float-advanced animation-delay-3000"></div>
        
        {/* Content with 3D depth */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 tracking-tight"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Our ICT Services
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed tracking-wide"
          >
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-2"
            >
              Comprehensive ICT solutions designed to transform your business operations.
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              From infrastructure to software, we've got you covered.
            </motion.span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <div className="w-10 h-16 rounded-full border-2 border-primary/30 hover:border-primary/60 flex items-start justify-center p-1 mx-auto transition-all duration-500 group cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-primary group-hover:bg-accent-blue transform group-hover:scale-125 transition-all duration-300 animate-pulse-slow"></div>
            </div>
            <p className="text-xs text-primary-foreground/70 mt-2 tracking-widest uppercase">
              Scroll to explore
            </p>
          </motion.div>
        </div>
        
        {/* Floating particles - subtle animation */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ 
              duration: 1,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: Math.random() * 5
            }}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </section>

      {/* Services by Category with floating tabs */}
      <section 
        ref={servicesRef}
        className="py-16 lg:py-24 bg-background relative"
      >
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-accent-blue/5 blur-3xl animate-spin-slow animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* Enhanced Category Tabs with hover effects */}
            <div className="mb-12 lg:mb-16">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-3 bg-transparent">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className={`group relative flex flex-col items-center p-4 text-center rounded-xl border border-border/20 hover:border-primary/30 
                      data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary/10 data-[state=active]:to-primary/5 
                      data-[state=active]:border-primary/50 transition-all duration-500 overflow-hidden
                      ${hoveredTab === category.id ? 'shadow-glow' : 'shadow-card'}`}
                    onMouseEnter={() => handleTabHover(category.id)}
                    onMouseLeave={() => handleTabHover(null)}
                  >
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-all duration-500"></div>
                    
                    <div className="w-10 h-10 mb-2 flex items-center justify-center rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                      {renderCategoryIcon(category.id)}
                    </div>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Service Content with 3D cards */}
            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-10">
                {/* Category Header with animated underline */}
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-blue mx-auto rounded-full animate-border-pulse"></div>
                </div>

                {/* Enhanced Services Grid with glass cards */}
                <div 
                  ref={containerRef}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {servicesByCategory[category.id]?.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      image={getServiceImage(category.id)}
                    />
                  ))}
                </div>

                {/* Category CTA with animated border */}
                <div className="text-center pt-10 relative">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Need a custom solution in {category.title.toLowerCase()}?
                  </p>
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-glow transition-all group relative overflow-hidden"
                  >
                    <Link to="/contact">
                      <span className="relative z-10 flex items-center">
                        Get Custom Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Premium CTA Section with particle background */}
      <section 
        // ref={animationRefs.cta}
        className="relative py-24 lg:py-32 bg-gradient-to-br from-accent/5 to-accent/10 overflow-hidden"
      >
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite ${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          ></div>
        ))}
        
        {/* Animated border */}
        <div className="absolute inset-0 border-y border-primary/10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mb-4 inline-flex items-center justify-center px-6 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 animate-pulse-slow">
            <Zap className="h-4 w-4 mr-2 animate-pulse-slow" />
            Custom Solutions
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Need Something <span className="text-gradient bg-gradient-to-r from-primary to-accent-blue">Tailored</span> for Your Business?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team specializes in building custom ICT solutions that fit your exact requirements.
            Let's discuss how we can solve your unique challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              ref={ctaButtonRef}
              asChild 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-glow transition-all group relative overflow-hidden"
            >
              <Link to="/contact" className="font-medium">
                <span className="relative z-10 flex items-center">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-accent/50 hover:border-primary/30 transition-colors group glass backdrop-blur-sm"
            >
              <a href="tel:+254705576746" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 group-hover:animate-wave" />
                +254 705 576 746
              </a>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground/80 flex items-center justify-center gap-1.5">
            <Clock className="h-4 w-4 animate-pulse-slow" />
            <span>Available 24/7 for urgent inquiries</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
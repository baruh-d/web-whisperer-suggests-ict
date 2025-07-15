import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, 
  ExternalLink, 
  Home, 
  ChevronRight,
  Server,
  Shield,
  Mic,
  Cpu,
  Users,
  Code,
  Check,
  Phone,
  Clock
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { serviceCategories, services, getServicesByCategory } from '@/config/services';
import servicesNetworkImage from '@/assets/services-network.jpg';
import servicesAudioVisualImage from '@/assets/services-audiovisual.jpg';
import servicesSecurityImage from '@/assets/services-security.jpg';
import servicesAutomationImage from '@/assets/services-automation.jpg';
import servicesSoftwareImage from '@/assets/services-software.jpg';
import { 
  useAnimation, 
  useStaggerAnimation, 
  useHoverAnimation,
  useScrollAnimation,
  useServicesAnimation 
} from '@/hooks/useAnimations';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('infrastructure');

  const getServiceImage = (categoryId: string) => {
    const imageMap: { [key: string]: string } = {
      'infrastructure': servicesNetworkImage,
      'audiovisual': servicesAudioVisualImage,
      'security': servicesSecurityImage,
      'automation': servicesAutomationImage,
      'software': servicesSoftwareImage,
      'computing': servicesNetworkImage,
    };
    return imageMap[categoryId] || servicesNetworkImage;
  };

  // Icon mapping for categories
  const categoryIcons = {
    infrastructure: <Server className="w-5 h-5" />,
    audiovisual: <Mic className="w-5 h-5" />,
    security: <Shield className="w-5 h-5" />,
    automation: <Cpu className="w-5 h-5" />,
    people: <Users className="w-5 h-5" />,
    software: <Code className="w-5 h-5" />
  };

  // Animation hooks
  const { ref: heroRef } = useAnimation('fadeIn', {
    delay: 0.2,
    duration: 1,
    trigger: 'viewport'
  });

  const { ref: breadcrumbRef } = useAnimation('slideLeft', {
    delay: 0.1,
    trigger: 'viewport'
  });

  const { ref: tabsRef } = useAnimation('slideLeft', {
    delay: 0.3,
    trigger: 'viewport'
  });

  // Services section animation
  const servicesRef = useRef(null);
  useServicesAnimation(servicesRef);

  // For staggered animations on service cards
  const containerRef = useStaggerAnimation('.service-card', 'up');

  // CTA section animation
  const { ref: ctaRef } = useAnimation('scaleIn', {
    delay: 0.4,
    trigger: 'viewport'
  });

  // Category header animation
  const { ref: categoryHeaderRef } = useAnimation('fadeIn', {
    delay: 0.2,
    trigger: 'viewport'
  });

  // Scroll animation for features
  const featuresRef = useScrollAnimation(() => {
    console.log('Features section entered viewport');
  });

  // Button hover animations
  const ctaButtonRef = useRef(null);
  useHoverAnimation(
    ctaButtonRef,
    () => {
      if (ctaButtonRef.current) {
        ctaButtonRef.current.style.transform = 'translateY(-2px)';
        ctaButtonRef.current.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      }
    },
    () => {
      if (ctaButtonRef.current) {
        ctaButtonRef.current.style.transform = 'translateY(0)';
        ctaButtonRef.current.style.boxShadow = 'none';
      }
    }
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb Navigation - Enhanced with animation */}
      <section 
        ref={breadcrumbRef}
        className="bg-accent/10 py-4 border-b border-border/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Services</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section - Animated */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-hero text-white py-16 lg:py-24 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('${servicesNetworkImage}')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-corporate-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            Our ICT Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive ICT solutions designed to transform your business operations. 
            From infrastructure to software, we've got you covered.
          </p>
        </div>
      </section>

      {/* Enhanced Services by Category */}
      <section 
        ref={servicesRef}
        className="py-16 lg:py-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* Enhanced Category Tabs */}
            <div ref={tabsRef} className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-background">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex flex-col items-center p-4 text-center rounded-lg border border-border/20 hover:border-primary/30 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary/50 transition-all duration-200"
                  >
                    <div className="w-8 h-8 mb-2 flex items-center justify-center">
                      {categoryIcons[category.id] || <Server className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-medium">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Service Content */}
            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                {/* Category Header - Animated */}
                <div ref={categoryHeaderRef} className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Enhanced Services Grid */}
                <div 
                  ref={containerRef}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {getServicesByCategory(category.id).map((service) => (
                    <Card 
                      key={service.id}
                      className="service-card group hover:shadow-lg transition-all duration-300 border-2 border-border/20 hover:border-primary/30 bg-gradient-to-b from-card to-card/50 overflow-hidden"
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        {/* Service Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={getServiceImage(category.id)}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-corporate-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="border-white/30 text-black hover:bg-white/20 hover:text-white ml-auto"
                              asChild
                            >
                              <Link to={`/services/${service.id}`}>
                                View Details <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>

                        {/* Service Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex-1 space-y-4">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {service.shortDescription}
                            </p>
                            
                            {/* Features Preview - Animated */}
                            <div 
                              ref={featuresRef}
                              className="pt-4 mt-4 border-t border-border/20"
                            >
                              <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                Key Features
                              </h4>
                              <ul className="space-y-2 text-sm">
                                {service.features.slice(0, 3).map((feature, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <Check className="h-4 w-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0 transform transition-transform group-hover:scale-110" />
                                    <span className="transition-all group-hover:translate-x-1">{feature}</span>
                                  </li>
                                ))}
                                {service.features.length > 3 && (
                                  <li className="text-primary text-xs font-medium flex items-center">
                                    <span className="w-1 h-1 bg-primary rounded-full mr-1.5"></span>
                                    +{service.features.length - 3} more features
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t border-border/20">
                            <Button 
                              asChild 
                              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-md transition-all group"
                            >
                              <Link to={`/services/${service.id}`}>
                                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Category CTA */}
                <div className="text-center pt-8">
                  <p className="text-muted-foreground mb-4">
                    Need a custom solution in {category.title.toLowerCase()}?
                  </p>
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-md transition-all group"
                  >
                    <Link to="/contact">
                      Get Custom Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Elegant CTA Section - Animated */}
      <section 
        ref={ctaRef}
        className="relative py-16 lg:py-24 bg-gradient-to-br from-accent/5 to-accent/10"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-2">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Custom Solutions
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-balance">
            Need Something <span className="text-primary">Tailored</span> for Your Business?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team specializes in building custom ICT solutions that fit your exact requirements.
            Let's discuss how we can solve your unique challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              ref={ctaButtonRef}
              asChild 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-md transition-all group"
            >
              <Link to="/contact" className="font-medium">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-accent/50 hover:border-primary/30 transition-colors group"
            >
              <a href="tel:+254705576746" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                +254 705 576 746
              </a>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground/80 flex items-center justify-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>Available 24/7 for urgent inquiries</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
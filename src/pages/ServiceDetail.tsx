import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services, serviceCategories, getServicesByCategory } from '@/config/services';
import { ArrowLeft, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();

  const service = services.find(s => s.id === id);
  const category = serviceCategories.find(cat =>
    services.some(s => s.id === id && s.categoryId === cat.id)
  );
  
  if (!service || !category) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedServices = category
    ? getServicesByCategory(category.id).filter(s => s.id !== service.id).slice(0, 3)
    : [];

  const keyFeatures = [
    'Professional installation and setup',
    'Comprehensive training and support',
    '24/7 technical assistance',
    'Scalable solution architecture',
    'Integration with existing systems',
    'Warranty and maintenance packages'
  ];

  const benefits = [
    'Increased operational efficiency',
    'Enhanced security and reliability',
    'Cost-effective implementation',
    'Future-proof technology',
    'Expert ongoing support',
    'Improved business productivity'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Full-width Background */}
      <section className="relative py-32 lg:py-40 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('/service-covers/${service.id}-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button variant="ghost" size="sm" asChild className="group text-white hover:bg-white/10">
              <Link to="/services" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Services
              </Link>
            </Button>
          </div>

          <div className="max-w-2xl">
            <Badge className="bg-white/20 text-white mb-6 hover:bg-white/30">
              {category.title}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                <Phone className="h-5 w-5 mr-2" />
                Request Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10 px-8">
                <Mail className="h-5 w-5 mr-2" />
                Get More Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview with Premium Card */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Optimized {service.title} Solutions</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Our {service.title.toLowerCase()} services are engineered to deliver peak performance and reliability. 
                We implement industry-best practices tailored to your specific operational requirements.
              </p>
              <p>
                From initial consultation through deployment and beyond, we ensure seamless integration 
                with your existing infrastructure while maintaining strict security protocols.
              </p>
              <p>
                Our certified professionals provide comprehensive training and documentation, 
                empowering your team to leverage the full potential of your new system.
              </p>
            </div>
          </div>

          {/* Premium Service Card */}
          <div className="relative">
            <Card className="relative overflow-hidden h-full border-0 shadow-xl">
              <img
                src={`/service-covers/${service.id}-card.jpg`}
                alt="Premium Service"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
              <CardContent className="relative z-10 p-8 flex flex-col h-full justify-end text-white">
                <CardTitle className="text-2xl font-bold mb-4">Premium Service Package</CardTitle>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Expert installation & configuration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>12 months premium support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Priority response times</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Upgrade Your Package
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <div className="space-y-6">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Business Benefits</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Services */}
{relatedServices.length > 0 && (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0a0f2c] via-[#1e2b56] to-[#3c5a92]">
          Complementary Solutions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Enhance your setup with these perfectly paired services
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {relatedServices.map((relatedService) => (
          <Card
            key={relatedService.id}
            className="group relative overflow-hidden rounded-xl border border-border/20 hover:border-primary/30 transition-all duration-300 h-full hover:shadow-lg"
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={`/service-covers/${relatedService.id}-card.jpg`}
                alt={relatedService.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>
            
            {/* Content */}
            <CardContent className="relative z-10 p-6 flex flex-col h-full justify-between">
              <div>
                <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                  {serviceCategories.find(c => c.id === relatedService.categoryId)?.title}
                </Badge>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {relatedService.title}
                </h3>
                <p className="text-sm text-white/80 mb-6">
                  {relatedService.shortDescription}
                </p>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-white/30 text-black hover:bg-white/10 hover:border-primary/50 transition-all"
              >
                <span className="flex items-center">
                  Explore Service
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </CardContent>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Card>
        ))}
      </div>
    </div>
  </section>
)}

      {/* Premium Final CTA */}
<section className="relative py-28 overflow-hidden bg-gradient-to-br from-primary/90 to-primary-dark/90">
  {/* Floating background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-float"></div>
    <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float animation-delay-2000"></div>
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
  </div>

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Animated badge */}
    <div className="inline-flex items-center justify-center px-6 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-pulse-slow">
      <span className="text-sm font-medium text-white">Limited Availability</span>
    </div>
    
    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
      Ready to Transform <br className="hidden md:block" /> Your Business?
    </h2>
    
    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
      Our {service.title.toLowerCase()} solutions deliver <span className="font-semibold">measurable results</span> - 
      let's discuss how we can optimize your operations.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg" 
        className="relative overflow-hidden bg-white text-primary hover:bg-white/90 px-10 group"
      >
        <span className="relative z-10 flex items-center">
          <Phone className="h-5 w-5 mr-2" />
          Call +254 705 576 746
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </Button>
      
      <Button 
        variant="outline" 
        size="lg" 
        className="relative overflow-hidden border-2 border-white/30 text-black hover:border-white/50 hover:bg-white/10 px-10 group"
      >
        <span className="relative z-10 flex items-center">
          <Mail className="h-5 w-5 mr-2" />
          Get Custom Proposal
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </Button>
    </div>
    
    {/* Trust indicators */}
    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/80">
      <div className="flex items-center">
        <CheckCircle className="h-4 w-4 mr-2 text-white" />
        <span>24/7 Support Available</span>
      </div>
      <div className="hidden sm:block h-4 w-px bg-white/30"></div>
      <div className="flex items-center">
        <CheckCircle className="h-4 w-4 mr-2 text-white" />
        <span>Free Initial Consultation</span>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
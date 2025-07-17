import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  services, 
  serviceCategories, 
  getServicesByCategory, 
  getServiceById,
  getCategoryById,
  Service, 
  ServiceCategory,
  iconMap
} from '@/config/services';
import { ArrowLeft, CheckCircle, Phone, Mail, ArrowRight, ExternalLink } from 'lucide-react';

interface ServiceDetailProps {
  onContactClick?: () => void;
  onQuoteRequest?: (serviceId: string) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ onContactClick, onQuoteRequest }) => {
  const { id } = useParams<{ id: string }>();

  // Updated service and category lookup using the utility functions
  const { service, category, isValidService } = useMemo(() => {
    if (!id) {
      return { service: null, category: null, isValidService: false };
    }

    const foundService = getServiceById(id);
    if (!foundService) {
      return { service: null, category: null, isValidService: false };
    }

    const foundCategory = getCategoryById(foundService.categoryId);
    if (!foundCategory) {
      console.error(`Category not found for service ${id}:`, foundService.categoryId);
      return { service: foundService, category: null, isValidService: false };
    }

    return { service: foundService, category: foundCategory, isValidService: true };
  }, [id]);

  // Updated related services logic
  const relatedServices = useMemo(() => {
    if (!service || !category) return [];
    
    try {
      const categoryServices = getServicesByCategory(category.id);
      return categoryServices
        .filter(s => s.id !== service.id)
        .slice(0, 3);
    } catch (error) {
      console.error('Error fetching related services:', error);
      return [];
    }
  }, [service, category]);

  // Updated key features with proper validation
  const keyFeatures = useMemo(() => {
    const defaultFeatures = [
      'Professional installation and setup',
      'Comprehensive training and support',
      '24/7 technical assistance',
      'Scalable solution architecture',
      'Integration with existing systems',
      'Warranty and maintenance packages'
    ];

    if (service?.features && Array.isArray(service.features) && service.features.length > 0) {
      return service.features.map(feature => {
        const cleanFeature = typeof feature === 'string' ? feature.trim() : '';
        return cleanFeature || 'Professional service included';
      });
    }

    return defaultFeatures;
  }, [service]);

  // Updated benefits with proper validation
  const benefits = useMemo(() => {
    const defaultBenefits = [
      'Increased operational efficiency',
      'Enhanced security and reliability',
      'Cost-effective implementation',
      'Future-proof technology',
      'Expert ongoing support',
      'Improved business productivity'
    ];

    if (service?.benefits && Array.isArray(service.benefits) && service.benefits.length > 0) {
      return service.benefits.map(benefit => {
        const cleanBenefit = typeof benefit === 'string' ? benefit.trim() : '';
        return cleanBenefit || 'Business value delivered';
      });
    }

    return defaultBenefits;
  }, [service]);

  // Updated pricing display logic
  const pricingInfo = useMemo(() => {
    if (!service?.pricing) return null;
    
    const { startingPrice, currency = 'KSH', billingType = 'one-time' } = service.pricing;
    
    if (!startingPrice) return null;
    
    const formatPrice = (price: number) => {
      return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES',
        minimumFractionDigits: 0,
      }).format(price);
    };
    
    const billingText = {
      'one-time': 'Starting from',
      'monthly': 'per month',
      'annual': 'per year'
    };
    
    return {
      formatted: formatPrice(startingPrice),
      billing: billingText[billingType] || 'Starting from'
    };
  }, [service]);

  // Updated metadata display
  const metadata = useMemo(() => {
    if (!service?.metadata) return null;
    
    return {
      estimatedDelivery: service.metadata.estimatedDelivery,
      complexity: service.metadata.complexity,
      targetAudience: service.metadata.targetAudience,
      tags: service.metadata.tags
    };
  }, [service]);

  // Handler functions remain the same
  const handleQuoteRequest = () => {
    try {
      if (onQuoteRequest && service) {
        onQuoteRequest(service.id);
      } else {
        window.open(`mailto:info@company.com?subject=Quote Request for ${service?.title || 'Service'}`);
      }
    } catch (error) {
      console.error('Error handling quote request:', error);
    }
  };

  const handleContactClick = () => {
    try {
      if (onContactClick) {
        onContactClick();
      } else {
        window.open(`mailto:info@company.com?subject=Inquiry about ${service?.title || 'Service'}`);
      }
    } catch (error) {
      console.error('Error handling contact click:', error);
    }
  };

  const handlePhoneCall = () => {
    try {
      window.open('tel:+254705576746');
    } catch (error) {
      console.error('Error initiating phone call:', error);
    }
  };

  // Early return for invalid service ID
  if (!id) {
    return <Navigate to="/services" replace />;
  }

  // 404 Component for invalid services
  if (!isValidService || !service) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/services">Back to Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Go to Homepage</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Updated image URL generation to use the service.image field
  const getImageUrl = (fallback: string = '/placeholder-service.jpg') => {
    try {
      if (service.image && service.image.startsWith('http')) {
        return service.image;
      }
      return service.image || fallback;
    } catch (error) {
      console.error('Error generating image URL:', error);
      return fallback;
    }
  };

  // Get the service icon component
  const ServiceIcon = service.icon ? iconMap[service.icon] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Full-width Background */}
      <section className="relative py-32 lg:py-40 text-white" role="banner">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url('${getImageUrl()}')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center mb-8" aria-label="Breadcrumb">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="group text-white hover:bg-white/10"
            >
              <Link to="/services" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Services
              </Link>
            </Button>
          </nav>

          <div className="max-w-2xl">
            {category && (
              <Badge className="bg-white/20 text-white mb-6 hover:bg-white/30">
                {category.title}
              </Badge>
            )}
            
            <div className="flex items-center mb-6">
              {ServiceIcon && (
                <div className="flex-shrink-0 p-3 bg-white/20 rounded-lg mr-4">
                  <ServiceIcon className="h-8 w-8 text-white" />
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {service.title}
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              {service.shortDescription}
            </p>

            {/* Display pricing info if available */}
            {pricingInfo && (
              <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">{pricingInfo.billing}</span>
                  <span className="text-2xl font-bold text-white">{pricingInfo.formatted}</span>
                </div>
              </div>
            )}

            {/* Display metadata if available */}
            {metadata && (
              <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {metadata.estimatedDelivery && (
                  <div className="flex items-center text-white/80">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Delivery: {metadata.estimatedDelivery}</span>
                  </div>
                )}
                {metadata.complexity && (
                  <div className="flex items-center text-white/80">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Complexity: {metadata.complexity}</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8"
                onClick={handleQuoteRequest}
              >
                <Phone className="h-5 w-5 mr-2" />
                Request Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-black hover:bg-white/10 px-8"
                onClick={handleContactClick}
              >
                <Mail className="h-5 w-5 mr-2" />
                Get More Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview with Premium Card */}
      <section className="py-20 bg-background" role="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">
              Professional {service.title} Solutions
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>{service.fullDescription}</p>
              
              {metadata?.targetAudience && (
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Target Industries:</h3>
                  <div className="flex flex-wrap gap-2">
                    {metadata.targetAudience.map((audience, index) => (
                      <Badge key={index} variant="secondary">
                        {audience}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {metadata?.tags && (
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Service Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {metadata.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Premium Service Card */}
          <div className="relative">
            <Card className="relative overflow-hidden h-full border-0 shadow-xl">
              <img
                src={getImageUrl()}
                alt={`${service.title} Premium Service`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
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
                  {pricingInfo && (
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Transparent pricing from {pricingInfo.formatted}</span>
                    </li>
                  )}
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleQuoteRequest}
                >
                  Upgrade Your Package
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="py-20 bg-accent/5" role="region" aria-labelledby="features-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 id="features-title" className="text-3xl font-bold mb-8">Key Features</h2>
              <div className="space-y-6" role="list" aria-labelledby="features-title">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group" role="listitem">
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
              <h2 id="benefits-title" className="text-3xl font-bold mb-8">Business Benefits</h2>
              <div className="space-y-6" role="list" aria-labelledby="benefits-title">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group" role="listitem">
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
        <section className="py-20 bg-background" role="region" aria-labelledby="related-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="related-services" className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0a0f2c] via-[#1e2b56] to-[#3c5a92]">
                Complementary Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enhance your setup with these perfectly paired services
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => {
                const relatedCategory = getCategoryById(relatedService.categoryId);
                const RelatedServiceIcon = relatedService.icon ? iconMap[relatedService.icon] : null;
                
                return (
                  <Card
                    key={relatedService.id}
                    className="group relative overflow-hidden rounded-xl border border-border/20 hover:border-primary/30 transition-all duration-300 h-full hover:shadow-lg"
                  >
                    {/* Background Image with Gradient Overlay */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={relatedService.image || '/placeholder-service.jpg'}
                        alt={relatedService.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <CardContent className="relative z-10 p-6 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center mb-3">
                          {RelatedServiceIcon && (
                            <div className="flex-shrink-0 p-2 bg-primary/20 rounded-lg mr-3">
                              <RelatedServiceIcon className="h-4 w-4 text-primary" />
                            </div>
                          )}
                          {relatedCategory && (
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                              {relatedCategory.title}
                            </Badge>
                          )}
                        </div>
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
                        asChild
                      >
                        <Link to={`/services/${relatedService.id}`}>
                          <span className="flex items-center">
                            Explore Service
                            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Link>
                      </Button>
                    </CardContent>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Premium Final CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-primary/90 to-primary-dark/90" role="region">
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
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-white/80">
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
              onClick={handlePhoneCall}
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
              onClick={handleContactClick}
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
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services, serviceCategories, getServicesByCategory } from '@/config/services';
import { ArrowLeft, CheckCircle, Star, Phone, Mail, ArrowRight } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the service
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

  // Get related services from same category
  const relatedServices = category ? getServicesByCategory(category.id).filter(s => s.id !== service.id).slice(0, 3) : [];

  const keyFeatures = [
    "Professional installation and setup",
    "Comprehensive training and support",
    "24/7 technical assistance",
    "Scalable solution architecture",
    "Integration with existing systems",
    "Warranty and maintenance packages"
  ];

  const benefits = [
    "Increased operational efficiency",
    "Enhanced security and reliability",
    "Cost-effective implementation",
    "Future-proof technology",
    "Expert ongoing support",
    "Improved business productivity"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumbs */}
      <section className="py-4 bg-accent/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-corporate-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button variant="outline" size="sm" asChild className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              <Link to="/services">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4 text-sm px-3 py-1">
                {category.title}
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6 animate-fade-in">
                {service.title}
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in">
                {service.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20">
                  <Mail className="h-5 w-5 mr-2" />
                  Get More Info
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-48 bg-white/10 rounded-lg mb-6">
                    <Star className="h-24 w-24 text-white/70" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional Service</h3>
                  <p className="text-white/80">
                    Expert installation, configuration, and ongoing support for your {service.title.toLowerCase()} solution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">
                Service Overview
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Our {service.title.toLowerCase()} solution is designed to meet the demanding requirements 
                  of modern businesses. We combine cutting-edge technology with expert implementation 
                  to deliver a system that not only meets your current needs but scales with your future growth.
                </p>
                <p>
                  With years of experience in the ICT industry, OPPA Services brings unmatched expertise 
                  to every installation. Our certified technicians ensure seamless integration with your 
                  existing infrastructure while minimizing disruption to your operations.
                </p>
                <p>
                  Every solution comes with comprehensive training for your team, detailed documentation, 
                  and ongoing support to ensure you get the maximum value from your investment. We're 
                  not just installers – we're your technology partners.
                </p>
              </div>
            </div>

            <div>
              <Card className="sticky top-8 border-0 shadow-elite bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span>Quick Facts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium text-foreground">{category.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Installation:</span>
                    <span className="font-medium text-foreground">Professional</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support:</span>
                    <span className="font-medium text-foreground">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Warranty:</span>
                    <span className="font-medium text-foreground">Extended Options</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <Button className="w-full bg-gradient-corporate hover:shadow-glow">
                      Get Free Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 font-poppins">
                Key Features
              </h2>
              <div className="space-y-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 font-poppins">
                Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 font-poppins">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Card key={relatedService.id} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 bg-gradient-card group">
                  <CardContent className="p-6">
                    <Star className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {relatedService.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {relatedService.shortDescription}
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full group-hover:bg-accent transition-colors">
                      <Link to={`/services/${relatedService.id}`}>
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let our experts design the perfect {service.title.toLowerCase()} solution for your business. 
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
              <Phone className="h-5 w-5 mr-2" />
              Call +254 705 576 746
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20 px-8" asChild>
              <Link to="/contact">
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
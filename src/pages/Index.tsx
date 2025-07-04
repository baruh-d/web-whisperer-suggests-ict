import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Award, Globe, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { serviceCategories } from '@/config/services';

const Index = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Zap, label: 'Services Offered', value: '24+' },
    { icon: Globe, label: 'Projects Completed', value: '1000+' },
  ];

  const features = [
    'AGPO Certified Company',
    '24/7 Technical Support',
    'Professional Installation',
    'Future-Proof Solutions',
    'Kenya-Based Team',
    'Competitive Pricing'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                  Innovative ICT Solutions for Africa
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Delivering inclusive, customer-centric, future-proof ICT solutions 
                  across Africa. AGPO certified with 24+ specialized services.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
                  <Link to="/services">
                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">AGPO Certified</h3>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-mono text-lg tracking-wider">PVT-5JUEKP5J</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 4).map((stat, index) => (
                      <div key={index} className="text-center">
                        <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-200">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-blue rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our ICT Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive ICT solutions tailored for modern African businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={category.id} className="group hover:shadow-hover transition-all duration-300 animate-scale-in border-2 hover:border-primary/20" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${category.color} to-${category.color}-dark flex items-center justify-center`}>
                        <div className="w-6 h-6 text-white">
                          {/* Icon placeholder - will be replaced with actual icons */}
                          <div className="w-full h-full bg-white/30 rounded"></div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    
                    <Link 
                      to={`/services/category/${category.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      View Services <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-kenya hover:opacity-90 transition-opacity">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins">
                Why Choose OPPA Services?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience in the ICT industry, OPPA Services Ltd 
                has established itself as a leading provider of innovative technology 
                solutions across Kenya and beyond.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">AGPO Certified Excellence</h4>
                    <p className="text-muted-foreground">Certified by the Access to Government Procurement Opportunities program</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">24+ Specialized Services</h4>
                    <p className="text-muted-foreground">Comprehensive ICT solutions from infrastructure to software development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Future-Proof Solutions</h4>
                    <p className="text-muted-foreground">Technology that grows with your business needs</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-gradient-kenya hover:opacity-90 transition-opacity">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                    <CardContent className="p-0">
                      <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let's discuss how our ICT solutions can drive your business forward. 
            Get a free consultation with our expert team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              <Link to="/services">Browse Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
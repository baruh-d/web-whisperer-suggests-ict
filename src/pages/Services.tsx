import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { serviceCategories, services, getServicesByCategory } from '@/config/services';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('infrastructure');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            Our ICT Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive ICT solutions designed to transform your business operations. 
            From infrastructure to software, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* Category Tabs */}
            <div className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto p-1">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex flex-col items-center p-4 text-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <div className="w-8 h-8 mb-2">
                      {/* Icon placeholder */}
                      <div className="w-full h-full bg-current opacity-30 rounded"></div>
                    </div>
                    <span className="text-xs font-medium">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Service Content */}
            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                {/* Category Header */}
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getServicesByCategory(category.id).map((service, index) => (
                    <Card 
                      key={service.id} 
                      className="group hover:shadow-hover transition-all duration-300 animate-scale-in border-2 hover:border-primary/20"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <CardContent className="p-0">
                        {/* Service Image */}
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={`${service.image}?w=400&h=200&fit=crop`}
                            alt={service.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <Link
                                to={`/services/${service.id}`}
                                className="inline-flex items-center text-white text-sm font-medium"
                              >
                                View Details <ExternalLink className="ml-1 h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Service Content */}
                        <div className="p-6 space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {service.shortDescription}
                            </p>
                          </div>

                          {/* Features Preview */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                  <span>{feature}</span>
                                </li>
                              ))}
                              {service.features.length > 3 && (
                                <li className="text-primary text-xs">+{service.features.length - 3} more features</li>
                              )}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-border">
                            <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <Link to={`/services/${service.id}`}>
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
                  <Button asChild className="bg-gradient-kenya hover:opacity-90 transition-opacity">
                    <Link to="/contact">
                      Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We offer custom ICT solutions tailored to your specific business needs. 
            Let's discuss how we can help transform your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-kenya hover:opacity-90 transition-opacity">
              <Link to="/contact">
                Request Custom Solution <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+254700000000">Call Us Directly</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
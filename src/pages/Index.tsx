import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Award, Globe, Zap, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { serviceCategories } from '@/config/services';
import professionalMeetingImage from '@/assets/professional-meeting.jpg';
import dataCenterImage from '@/assets/data-center.jpg';

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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('src/assets/tech-workspace.jpg')`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-corporate-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white font-display animate-fade-in tracking-tight">
        Let us get you, your solutions
      </h1>
      <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in font-body leading-relaxed">
        Kenya's leading ICT systems integrator delivering future-proof solutions across Africa
      </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-corporate hover:shadow-glow text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105" asChild>
              <Link to="/contact">Get Your Solution Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section - COMMENTED OUT */}
      {/*
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-corporate rounded-full mb-4 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2 font-poppins">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Partners Logo Carousel */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We partner with global technology leaders to deliver world-class solutions
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* Partner logos - using placeholder elements */}
              {[
                'Microsoft', 'Cisco', 'HP', 'Dell', 'Lenovo', 'Motorola', 
                'Yamaha', 'JBL', 'Peavey', 'Kenwood', 'Codan', 'Icom'
              ].concat([
                'Microsoft', 'Cisco', 'HP', 'Dell', 'Lenovo', 'Motorola', 
                'Yamaha', 'JBL', 'Peavey', 'Kenwood', 'Codan', 'Icom'
              ]).map((partner, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-32 h-16 bg-gradient-card border border-border rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:shadow-card"
                >
                  <span className="text-sm font-semibold text-muted-foreground">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Kimani",
                position: "IT Director",
                company: "Kenya Commercial Bank",
                testimonial: "OPPA Services transformed our network infrastructure completely. Their team's expertise and professionalism exceeded our expectations. The 24/7 support has been invaluable.",
                rating: 5,
                image: "SK"
              },
              {
                name: "James Mwangi",
                position: "Operations Manager", 
                company: "Nairobi Hospital",
                testimonial: "The CCTV and access control system installation was flawless. OPPA's attention to detail and commitment to quality is unmatched. Highly recommend their services.",
                rating: 5,
                image: "JM"
              },
              {
                name: "Grace Wanjiku",
                position: "CEO",
                company: "Safaricom Foundation",
                testimonial: "From video conferencing setup to complete office automation, OPPA Services delivered beyond our expectations. Their AGPO certification was crucial for our procurement process.",
                rating: 5,
                image: "GW"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-elite hover:shadow-hover transition-all duration-300 hover:scale-105 bg-gradient-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400 fill-current">★</div>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-corporate rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-corporate-black/30"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins animate-fade-in">
            Reach out to us, baby—we've got you!
          </h2>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Ready to transform your business with cutting-edge ICT solutions? 
            Our expert team is standing by to make it happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl" asChild>
              <Link to="/contact">
                <Phone className="h-5 w-5 mr-2" />
                Call +254 705 576 746
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20 text-lg px-10 py-4 font-semibold transition-all duration-300 hover:scale-105" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Floating elements for visual appeal */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-0 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 tracking-tight">
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
                      <div className={`w-12 h-12 rounded-lg bg-gradient-corporate flex items-center justify-center`}>
                        <div className="w-6 h-6 text-white">
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
                      to={`/services`}
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
            <Button asChild size="lg" className="bg-gradient-corporate hover:shadow-glow transition-all duration-300">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose OPPA - Enhanced with Image */}
      <section className="py-16 lg:py-20 bg-accent/20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('${professionalMeetingImage}')`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Why Choose OPPA Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kenya's most trusted ICT systems integrator with a proven track record of excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">AGPO Certified</h3>
              <p className="text-muted-foreground">Government-certified excellence you can trust</p>
            </div>
            <div className="text-center bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">24+ Services</h3>
              <p className="text-muted-foreground">Comprehensive ICT solutions under one roof</p>
            </div>
            <div className="text-center bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Africa-Wide</h3>
              <p className="text-muted-foreground">Serving clients across Kenya and East Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Technology Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art facilities and cutting-edge technology solutions
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-elite hover:shadow-hover transition-all duration-300">
            <img 
              src={dataCenterImage} 
              alt="Advanced Data Center Infrastructure" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-corporate-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Advanced Infrastructure</h3>
              <p className="text-primary-foreground/90 mb-4">
                Our state-of-the-art data centers and network infrastructure ensure reliable, 
                scalable solutions for all your ICT needs.
              </p>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/20">
                Learn More About Our Infrastructure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free consultation with our expert team today
          </p>
          
          <Button size="lg" className="bg-gradient-corporate hover:shadow-glow text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105" asChild>
            <Link to="/contact">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Eye, Heart, Award, Building2, Globe, Shield } from 'lucide-react';
import teamCollaborationImage from '@/assets/team-collaboration.jpg';
import officeBuildingImage from '@/assets/office-building.jpg';

const About = () => {
  const stats = [
    { number: '500+', label: 'Satisfied Clients', icon: Users },
    { number: '24+', label: 'ICT Services', icon: Target },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${teamCollaborationImage}')`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-corporate-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-poppins mb-6 animate-fade-in">
            About OPPA Services
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Kenya's Leading ICT Systems Integrator - Delivering Future-Ready Solutions Across Africa
          </p>
          <Badge className="bg-white/20 text-white text-lg px-6 py-2 hover:bg-white/30 transition-colors">
            <Shield className="h-5 w-5 mr-2" />
            AGPO Certified: PVT-5JUEKP5J
          </Badge>
        </div>
      </section>

      {/* Stats Section - COMMENTED OUT */}
      {/*
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 bg-gradient-card">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Company Story */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded with a vision to transform Africa's ICT landscape, OPPA Services Limited 
                  has grown to become Kenya's most trusted systems integrator. We've built our 
                  reputation on delivering exceptional customer service and innovative solutions 
                  that drive business success.
                </p>
                <p>
                  From our headquarters in Nairobi's bustling business district, we serve clients 
                  across Kenya and East Africa, partnering with global technology leaders to 
                  bring world-class ICT solutions to the African market.
                </p>
                <p>
                  Our team of certified professionals combines deep technical expertise with 
                  an understanding of local business needs, ensuring every solution we deliver 
                  is both cutting-edge and culturally relevant.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-corporate rounded-2xl p-8 text-white overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                  style={{
                    backgroundImage: `url('${officeBuildingImage}')`,
                  }}
                ></div>
                <div className="relative z-10">
                  <Building2 className="h-16 w-16 mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Our Headquarters</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Located in the prestigious Elysee Plaza, our modern offices reflect 
                    our commitment to excellence and innovation.
                  </p>
                  <div className="text-sm opacity-80">
                    <p>Elysee Plaza, 2nd Floor</p>
                    <p>Kilimani Road, Nairobi</p>
                    <p>P.O. Box 1455 – 00200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything we do is guided by our core purpose, mission, and vision for the future
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-elite bg-gradient-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Purpose</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deliver exceptional customer service that fuels Africa's evolving ICT industry, 
                  creating lasting partnerships and driving technological advancement across the continent.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-elite bg-gradient-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Provide inclusive, customer-centered ICT solutions tailored to meet client needs 
                  and exceed expectations, ensuring every solution we deliver drives real business value.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-elite bg-gradient-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Become Africa's leader in cutting-edge ICT solutions — known for innovation, 
                  excellence, and our unwavering commitment to client success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Why Choose OPPA Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another ICT company - we're your technology transformation partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "AGPO Certified",
                description: "Officially certified and recognized by the government, ensuring compliance and quality standards in all our operations."
              },
              {
                icon: Globe,
                title: "Africa-Wide Reach",
                description: "Serving clients across Kenya and East Africa with localized solutions that understand regional business needs."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with deep technical expertise and years of experience in ICT systems integration."
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description: "Over 500 satisfied clients and countless successful projects across various industries and sectors."
              },
              {
                icon: Target,
                title: "Customer-Centric",
                description: "Every solution is tailored to your specific needs, with ongoing support and maintenance to ensure success."
              },
              {
                icon: Building2,
                title: "Strategic Location",
                description: "Centrally located in Nairobi's business district, making us easily accessible for consultations and support."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 bg-gradient-card">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The dedicated professionals behind OPPA's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "James Kiprotich",
                position: "Chief Executive Officer",
                expertise: "Strategic Leadership & Business Development",
                experience: "15+ years in ICT industry",
                initials: "JK"
              },
              {
                name: "Sarah Wanjiku",
                position: "Chief Technology Officer", 
                expertise: "Network Infrastructure & Systems Integration",
                experience: "12+ years in technical leadership",
                initials: "SW"
              },
              {
                name: "Michael Ochieng",
                position: "Head of Operations",
                expertise: "Project Management & Client Relations",
                experience: "10+ years in operations management",
                initials: "MO"
              },
              {
                name: "Grace Mutua",
                position: "Lead Network Engineer",
                expertise: "Cisco Systems & Network Security",
                experience: "8+ years in network engineering",
                initials: "GM"
              },
              {
                name: "David Mwangi",
                position: "Security Systems Specialist",
                expertise: "CCTV & Access Control Systems",
                experience: "9+ years in security solutions",
                initials: "DM"
              },
              {
                name: "Linda Akinyi",
                position: "Business Development Manager",
                expertise: "Client Acquisition & Market Development",
                experience: "7+ years in business development",
                initials: "LA"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.expertise}</p>
                  <Badge variant="outline" className="text-xs">
                    {member.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
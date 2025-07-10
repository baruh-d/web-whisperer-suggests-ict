import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Eye, Heart, Award, Building2, Globe, Shield } from 'lucide-react';
import teamCollaborationImage from '@/assets/team-collaboration.jpg';
import officeBuildingImage from '@/assets/office-building.jpg';
import { motion } from 'framer-motion'

const About = () => {

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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
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

      {/* Mission, Vision, Purpose - Enhanced with 3D Card Effect */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="outline" className="mb-6 bg-corporate-blue/10 text-corporate-blue border-corporate-blue/30">
              Our Foundation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              Core <span className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">Principles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The bedrock of our operations and decision-making at OPPA Services
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Our Purpose",
                description: "To empower Africa's digital economy through exceptional ICT solutions that create lasting value for our clients and communities.",
                color: "from-rose-500 to-pink-600"
              },
              {
                icon: Target,
                title: "Our Mission",
                description: "Deliver inclusive, client-focused ICT solutions that exceed expectations and drive tangible business transformation across industries.",
                color: "from-blue-500 to-corporate-blue"
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "To be Africa's undisputed leader in ICT innovation - recognized for excellence, reliability, and transformative impact.",
                color: "from-indigo-500 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group perspective-1000"
              >
                <Card className="h-full border border-border/20 bg-background/80 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform-style-preserve-3d group-hover:rotate-x-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <CardContent className="relative p-10 h-full flex flex-col">
                    <div className={`w-20 h-20 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                      <item.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced with Interactive Cards */}
      <section className="py-24 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="outline" className="mb-6 bg-corporate-blue/10 text-corporate-blue border-corporate-blue/30">
              Competitive Edge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              The <span className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">OPPA Advantage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Distinctive qualities that set us apart in the ICT landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "AGPO Certified",
                description: "Government-certified provider ensuring compliance with all regulatory standards and quality benchmarks.",
                color: "text-green-500"
              },
              {
                icon: Globe,
                title: "Pan-African Expertise",
                description: "Deep regional knowledge combined with global best practices for contextually relevant solutions.",
                color: "text-blue-500"
              },
              {
                icon: Users,
                title: "Certified Specialists",
                description: "Highly skilled professionals with vendor certifications and proven implementation experience.",
                color: "text-amber-500"
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description: "500+ successful implementations across diverse industries and organizational scales.",
                color: "text-purple-500"
              },
              {
                icon: Target,
                title: "Client-Centric Approach",
                description: "Tailored solutions designed around your specific business objectives and operational needs.",
                color: "text-red-500"
              },
              {
                icon: Building2,
                title: "Strategic Presence",
                description: "Prime location in Nairobi's business hub ensures rapid response and local support.",
                color: "text-corporate-blue"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full border border-border/20 bg-background/70 backdrop-blur-sm overflow-hidden group hover:shadow-lg transition-all duration-300 hover:border-corporate-blue/30">
                  <CardContent className="p-8">
                    <div className={`${feature.color} mb-6`}>
                      <feature.icon className="h-12 w-12 opacity-90" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-corporate-blue transition-colors duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{feature.description}</p>
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border/30 to-transparent my-4"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-muted-foreground/50">ADV#{index + 1}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced with Profile Cards */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="outline" className="mb-6 bg-corporate-blue/10 text-corporate-blue border-corporate-blue/30">
              Leadership
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              Meet Our <span className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">Visionaries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The strategic minds shaping OPPA's trajectory
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                name: "Rachel Muthoga",
                position: "Chief Executive Officer",
                expertise: "Strategic Leadership | Human Rights Advocacy | Public Policy",
                experience: "15+ years across legal, non-profit & private sector leadership",
                initials: "RM",
                photo: "src/images/rachel-muthoga.jpg",
                color: "bg-gradient-to-br from-purple-600 to-pink-600"
              },
              {
                name: "Tyler David Wambua",
                position: "Finance Director", 
                expertise: "Financial Strategy | Risk Management | Corporate Governance",
                experience: "4+ years in financial leadership roles",
                initials: "TDW",
                photo: "src/images/tyler-wambua.jpg",
                color: "bg-gradient-to-br from-blue-600 to-corporate-blue"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <div className="relative h-full min-h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-95"
                      />
                    ) : (
                      <div className={`w-full h-full ${member.color} flex items-center justify-center text-white font-bold text-6xl absolute inset-0`}>
                        {member.initials}
                      </div>
                    )}
                    
                    <div className="relative z-20 h-full flex flex-col justify-end p-10">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-corporate-blue-light font-semibold text-xl mb-6">{member.position}</p>
                        <p className="text-white/90 text-lg mb-6">{member.expertise}</p>
                        <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-sm">
                          {member.experience}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
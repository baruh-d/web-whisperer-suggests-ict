import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, CreditCard, HeadphonesIcon, Settings, Calendar, BarChart3, Bell, Shield, Home, ChevronRight } from 'lucide-react';
import clientPortalPreviewImage from '@/assets/client-portal-preview.jpg';

const ClientPortal = () => {
  const portalFeatures = [
    {
      icon: FileText,
      title: "Project Management",
      description: "Track your ICT projects in real-time, view progress updates, and access project documentation.",
      status: "Coming Soon"
    },
    {
      icon: CreditCard,
      title: "Invoice Management",
      description: "View and download invoices, track payment history, and manage billing information.",
      status: "Coming Soon"
    },
    {
      icon: HeadphonesIcon,
      title: "Support Tickets",
      description: "Submit support requests, track ticket status, and communicate directly with our technical team.",
      status: "Coming Soon"
    },
    {
      icon: Calendar,
      title: "Service Scheduling",
      description: "Schedule maintenance visits, consultations, and installation appointments online.",
      status: "Coming Soon"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Monitor your systems' performance with detailed analytics and reporting dashboards.",
      status: "Coming Soon"
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Get instant alerts about system updates, maintenance schedules, and important announcements.",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <section className="bg-accent/20 py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Client Portal</span>
          </nav>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('${clientPortalPreviewImage}')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-corporate-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white text-lg px-6 py-2 mb-6 hover:bg-white/30 transition-colors">
            <Settings className="h-5 w-5 mr-2" />
            Coming Soon
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold font-poppins mb-6 animate-fade-in">
            Client Portal
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Your centralized hub for managing projects, invoices, and support tickets with OPPA Services
          </p>
        </div>
      </section>

      {/* Portal Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              What You'll Get Access To
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our client portal will provide you with complete visibility and control over your ICT services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portalFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-elite hover:shadow-hover transition-all duration-300 hover:scale-105 bg-gradient-card relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {feature.status}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-corporate rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Preview */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
                Integrated with Odoo ERP
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Our client portal will be powered by Odoo ERP, providing you with enterprise-grade 
                  project management and customer relationship tools.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Secure Access</h4>
                      <p className="text-muted-foreground">Bank-level security with role-based access controls</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Team Collaboration</h4>
                      <p className="text-muted-foreground">Multiple user access for your organization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Advanced Reporting</h4>
                      <p className="text-muted-foreground">Detailed insights and performance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-glass backdrop-blur-sm border-primary/20 overflow-hidden">
                <div className="relative">
                  <img 
                    src={clientPortalPreviewImage} 
                    alt="Client Portal Preview" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Portal Preview</h3>
                    <p className="text-primary-foreground/90 mb-4">
                      Modern, intuitive interface designed for efficiency
                    </p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    We're working hard to bring you the most intuitive and powerful client portal experience.
                  </p>
                  <Badge className="bg-primary/20 text-primary px-4 py-2">
                    Launching Q3 2025
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientPortal;
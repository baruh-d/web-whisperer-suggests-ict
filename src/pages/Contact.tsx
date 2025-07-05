import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { services as serviceCategories } from '@/config/services';

const Contact = () => {
  const allServices = serviceCategories.flatMap(category => category.services);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-corporate-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-poppins mb-6 animate-fade-in">
            Reach Out to Us
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            We've got you covered with exceptional ICT solutions across Africa
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <Card className="shadow-elite border-0 bg-gradient-glass backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground font-poppins">
                  Get Your Solution Now
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                    <Input placeholder="John Doe" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                    <Input type="email" placeholder="john@company.com" className="h-12" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                    <Input placeholder="+254 700 000 000" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Company Name</label>
                    <Input placeholder="Your Company Ltd" className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Service Interest</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {allServices.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Preferred Contact Method</label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="meeting">In-Person Meeting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Budget Range</label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-100k">Under KES 100,000</SelectItem>
                        <SelectItem value="100k-500k">KES 100,000 - 500,000</SelectItem>
                        <SelectItem value="500k-1m">KES 500,000 - 1,000,000</SelectItem>
                        <SelectItem value="1m-5m">KES 1M - 5M</SelectItem>
                        <SelectItem value="over-5m">Over KES 5M</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Project Details</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button className="w-full h-12 bg-gradient-corporate hover:shadow-glow text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">Get In Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Ready to transform your business with cutting-edge ICT solutions? 
                  Our team of experts is here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-corporate rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone Numbers</h3>
                    <p className="text-muted-foreground">+254 705 576 746</p>
                    <p className="text-muted-foreground">+254 788 968 600</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-corporate rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Addresses</h3>
                    <p className="text-muted-foreground">info@oppaservices.com</p>
                    <p className="text-muted-foreground">sales@oppaservices.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-corporate rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Location</h3>
                    <p className="text-muted-foreground">Elysee Plaza, 2nd Floor</p>
                    <p className="text-muted-foreground">Kilimani Road, Nairobi, Kenya</p>
                    <p className="text-muted-foreground">P.O. Box 1455 – 00200</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-corporate rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card p-6 rounded-xl border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Quick WhatsApp</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Need immediate assistance? Send us a WhatsApp message for quick support.
                </p>
                <Button variant="outline" className="w-full hover:bg-accent transition-colors">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">Visit Our Office</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Nairobi's business district, we're easily accessible 
              and ready to welcome you for consultations and project discussions.
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-xl border border-border p-8 text-center">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map Coming Soon</h3>
            <p className="text-muted-foreground">
              We're working on adding an interactive map to help you find us easily.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
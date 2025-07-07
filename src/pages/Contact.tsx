import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { services } from '@/config/services';
import contactConsultationImage from '@/assets/contact-consultation.jpg';

const Contact = () => {
  const allServices = services;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    contactMethod: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.oppaservices.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          contactMethod: '',
          budget: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    // WhatsApp API integration
    const phoneNumber = '254705576746';
    const message = `Hello OPPA Services, I'm interested in your services.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const makePhoneCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const sendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('${contactConsultationImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex px-6 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-pulse-slow">
            <span className="text-sm font-medium text-white">Contact Us Today</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Let's Build Something Amazing
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our ICT experts are ready to discuss your project and provide tailored solutions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Interactive Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-background to-card/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold font-display mb-2">
                    Get Your Solution Now
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Complete this form and we'll respond within <span className="font-semibold text-primary">24 hours</span>
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          className="h-12 border-border/50 hover:border-primary/30 focus:border-primary/50 transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com" 
                          className="h-12 border-border/50 hover:border-primary/30 focus:border-primary/50 transition-colors"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
                        <Input 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+254 700 000 000" 
                          className="h-12 border-border/50 hover:border-primary/30 focus:border-primary/50 transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name</label>
                        <Input 
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd" 
                          className="h-12 border-border/50 hover:border-primary/30 focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-foreground">Service Interest</label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => handleSelectChange('service', value)}
                        required
                      >
                        <SelectTrigger className="h-12 border-border/50 hover:border-primary/30 focus:border-primary/50 transition-colors">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="border-border/50">
                          {allServices.map((service) => (
                            <SelectItem key={service.id} value={service.id} className="hover:bg-accent/10">
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="contactMethod" className="text-sm font-medium text-foreground">Preferred Contact Method</label>
                        <Select 
                          value={formData.contactMethod} 
                          onValueChange={(value) => handleSelectChange('contactMethod', value)}
                          required
                        >
                          <SelectTrigger className="h-12 border-border/50 hover:border-primary/30 focus:border-primary/50 transition-colors">
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent className="border-border/50">
                            <SelectItem value="email" className="hover:bg-accent/10">Email</SelectItem>
                            <SelectItem value="phone" className="hover:bg-accent/10">Phone Call</SelectItem>
                            <SelectItem value="whatsapp" className="hover:bg-accent/10">WhatsApp</SelectItem>
                            <SelectItem value="meeting" className="hover:bg-accent/10">In-Person Meeting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-foreground">Budget Range</label>
                        <Select 
                          value={formData.budget} 
                          onValueChange={(value) => handleSelectChange('budget', value)}
                        >
                          <SelectTrigger className="h-12 border-border/50 hover:border-primary/30 focus:border-primary/50 transition-colors">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent className="border-border/50">
                            <SelectItem value="under-100k" className="hover:bg-accent/10">Under KES 100,000</SelectItem>
                            <SelectItem value="100k-500k" className="hover:bg-accent/10">KES 100,000 - 500,000</SelectItem>
                            <SelectItem value="500k-1m" className="hover:bg-accent/10">KES 500,000 - 1M</SelectItem>
                            <SelectItem value="1m-5m" className="hover:bg-accent/10">KES 1M - 5M</SelectItem>
                            <SelectItem value="over-5m" className="hover:bg-accent/10">Over KES 5M</SelectItem>
                            <SelectItem value="discuss" className="hover:bg-accent/10">Let's discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Project Details *</label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements, timeline, and specific needs..."
                        rows={5}
                        className="border-border/50 hover:border-primary/30 focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>

                    {submitSuccess && (
                      <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                        Thank you! Your message has been sent successfully. We'll contact you soon.
                      </div>
                    )}

                    <Button 
                      type="submit"
                      className="w-full h-14 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-lg text-lg font-semibold transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Request'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Connect with us through multiple channels for consultations, support, or partnership inquiries.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone Card */}
                <Card className="border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">Call Us Directly</h3>
                      <p className="text-muted-foreground mb-1">+254 705 576 746</p>
                      <p className="text-muted-foreground">+254 788 968 600</p>
                      <div className="flex space-x-2 mt-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-primary/30 text-primary hover:bg-primary/5"
                          onClick={() => makePhoneCall('+254705576746')}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call Primary
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-primary/30 text-primary hover:bg-primary/5"
                          onClick={() => makePhoneCall('+254788968600')}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call Secondary
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-1">info@oppaservices.com</p>
                      <p className="text-muted-foreground">sales@oppaservices.com</p>
                      <div className="flex space-x-2 mt-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-primary/30 text-primary hover:bg-primary/5"
                          onClick={() => sendEmail('info@oppaservices.com')}
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Email Info
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-primary/30 text-primary hover:bg-primary/5"
                          onClick={() => sendEmail('sales@oppaservices.com')}
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Email Sales
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp Card */}
                <Card className="border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">WhatsApp Chat</h3>
                      <p className="text-muted-foreground mb-3">
                        Get instant responses from our support team via WhatsApp
                      </p>
                      <Button 
                        className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                        onClick={openWhatsApp}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Start WhatsApp Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours Card */}
                <Card className="border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">Business Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Visit Our Headquarters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our centrally located office in Nairobi is designed for productive meetings and consultations.
            </p>
          </div>
          
          {/* Map Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20 h-96">
            {/* Actual map would be embedded here */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              <div className="text-center p-8 max-w-md">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Elysee Plaza, 2nd Floor</h3>
                <p className="text-muted-foreground mb-4">
                  Kilimani Road, Nairobi, Kenya
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary/30 text-primary hover:bg-primary/5"
                  onClick={() => window.open('https://maps.google.com?q=Elysee+Plaza,+Kilimani+Road,+Nairobi')}
                >
                  Get Directions
                </Button>
              </div>
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-sm max-w-xs">
              <h4 className="font-semibold text-foreground mb-1">OPPA Services HQ</h4>
              <p className="text-sm text-muted-foreground mb-2">
                P.O. Box 1455 – 00200, Nairobi
              </p>
              <Button 
                variant="link" 
                size="sm" 
                className="text-primary h-auto p-0"
                onClick={() => window.open('/parking-info', '_blank')}
              >
                View parking information →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
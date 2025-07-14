import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { services } from '@/config/services';
import contactConsultationImage from '@/assets/contact-consultation.jpg';
import { LoadingSpinner } from '@/components/ui/loadingspinner';
import { motion } from 'framer-motion'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Add these constants above your component
const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -1.2921,  // Nairobi coordinates
  lng: 36.8219
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
} as const;

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100
    }
  }
} as const;

const backgroundVariants = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  }
} as const;

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        // Reset form after successful submission
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
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
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
    const phoneNumber = '254705576746';
    const message = `Hello OPPA Services, I'm interested in your services.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const makePhoneCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const sendEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
};

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 text-white overflow-hidden">
  <motion.div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{ backgroundImage: `url('${contactConsultationImage}')` }}
    initial="hidden"
    animate="visible"
    variants={backgroundVariants}
  />
  
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-0"></div>
  
  <motion.div 
    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <motion.div 
      className="inline-flex px-6 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-pulse-slow"
      variants={childVariants}
    >
      <span className="text-sm font-medium text-white">Contact Us Today</span>
    </motion.div>
    
    <motion.h1 
      className="text-5xl lg:text-7xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
      variants={childVariants}
    >
      Let's Build Something Amazing
    </motion.h1>
    
    <motion.p 
      className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
      variants={childVariants}
    >
      Our ICT experts are ready to discuss your project and provide tailored solutions.
    </motion.p>
  </motion.div>
</section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Enhanced Interactive Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 pointer-events-none bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-background to-card/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
                <CardHeader>
                  <CardTitle className="text-3xl md:text-3xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
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
                          type="tel"
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
                      <label htmlFor="service" className="text-sm font-medium text-foreground">Service Interest *</label>
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
                        <label htmlFor="contactMethod" className="text-sm font-medium text-foreground">Preferred Contact Method *</label>
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
                        className="border-border/50 hover:border-primary/30 focus:border-primary/50 transition-colors min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        required 
                        className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I consent to OPPA Services collecting my data for contact purposes
                      </label>
                    </div>

                    {submitSuccess && (
                      <div className="p-4 bg-green-50 border border-green-100 rounded-lg flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-green-800">Thank you!</h4>
                          <p className="text-green-700 text-sm">Your message has been sent successfully. We'll contact you soon.</p>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit"
                      className="w-full h-14 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-lg text-lg font-semibold transition-all duration-300 group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <LoadingSpinner size="sm" variant="corporate" />
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Submit Request
                          <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-3xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
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
                      <div className="flex flex-wrap gap-2 mt-3">
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
                      <div className="flex flex-wrap gap-2 mt-3">
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

      {/* Location Section - Responsive Design */}
<section className="py-12 md:py-20 bg-accent/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary sm:text-3xl md:text-4xl font-bold font-display mb-3 md:mb-4 bg-clip-text text-transparent">
        Visit Our Headquarters
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
        Our centrally located office in Nairobi is designed for productive meetings and consultations.
      </p>
    </div>
    
    <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl border border-border/20 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
      {/* Location Content - Responsive layout */}
      <div className="text-center p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto">
        <MapPin className="h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 mx-auto text-primary mb-3 md:mb-4" />
        
        <div className="space-y-1 md:space-y-2 mb-4 md:mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">OPPA Services HQ</h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            Elysee Plaza, Kilimani Road
          </p>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            P.O. Box 1455 – 00200, Nairobi
          </p>
        </div>
        
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 justify-center">
          <Button 
            variant="default"
            size="sm"
            className="w-full sm:w-auto text-xs sm:text-sm"
            onClick={() => window.open('https://maps.google.com?q=Elysee+Plaza,+Kilimani+Road,+Nairobi')}
          >
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            View on Maps
          </Button>
          <Button 
            variant="outline"
            size="sm"
            className="w-full sm:w-auto text-xs sm:text-sm"
            onClick={() => window.open('tel:+254705576746')}
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Call Directions
          </Button>
        </div>
      </div>
      
      {/* Bottom info box - Responsive positioning */}
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 bg-background/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg shadow-sm max-w-[180px] sm:max-w-xs">
        <h4 className="font-semibold text-foreground text-xs sm:text-sm md:text-base mb-1">Parking Available</h4>
        <Button 
          variant="link" 
          size="sm"
          className="text-primary h-auto p-0 text-xs sm:text-sm"
          onClick={() => window.open('https://maps.google.com?q=Elysee+Plaza,+Kilimani+Road,+Nairobi')}
        >
          View details →
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
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-corporate-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/95"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/233c08a7-ad64-4f31-bb2f-d741e2584a0f.png" 
                alt="OPPA Services Logo" 
                className="w-14 h-14 rounded-xl shadow-glow"
              />
              <div>
                <div className="font-poppins font-bold text-xl text-white">
                  OPPA Services
                </div>
                <div className="text-sm text-primary-foreground/80 font-medium">
                  ICT Systems Integration
                </div>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Kenya's leading ICT systems integrator delivering future-proof solutions 
              across Africa. AGPO certified with 24+ specialized services.
            </p>
            
            <div className="flex items-center space-x-2">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
                <Shield className="h-3 w-3 mr-1" />
                AGPO Certified
              </Badge>
              <Badge className="bg-primary-glow/20 text-white border-primary-glow/30">
                PVT-5JUEKP5J
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-poppins">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'About Us', href: '/about' },
                { label: 'News & Events', href: '/news' },
                { label: 'Contact', href: '/contact' },
                { label: 'Client Portal', href: '/client-portal' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-poppins">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Audio Visual Solutions',
                'Network Infrastructure', 
                'Security Systems',
                'Office Automation',
                'Computing Solutions',
                'Software Development'
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 hover:text-white transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-poppins">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-glow/20 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Visit Our Office</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Elysee Plaza, 2nd Floor<br />
                    Kilimani Road, Nairobi<br />
                    P.O. Box 1455 – 00200
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <div className="space-y-1">
                    <a href="tel:+254705576746" className="text-primary-foreground/80 hover:text-white transition-colors text-sm block">
                      +254 705 576 746
                    </a>
                    <a href="tel:+254788968600" className="text-primary-foreground/80 hover:text-white transition-colors text-sm block">
                      +254 788 968 600
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <div className="space-y-1">
                    <a href="mailto:info@oppaservices.com" className="text-primary-foreground/80 hover:text-white transition-colors text-sm block">
                      info@oppaservices.com
                    </a>
                    <a href="mailto:sales@oppaservices.com" className="text-primary-foreground/80 hover:text-white transition-colors text-sm block">
                      sales@oppaservices.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-2 font-poppins">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest news about our services and industry insights
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-6 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/80">
            <p>&copy; 2024 OPPA Services Limited. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-primary-foreground/40">|</span>
              <button className="hover:text-white transition-colors">Cookie Settings</button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-sm text-primary-foreground/80">Made with ❤️ in Kenya</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
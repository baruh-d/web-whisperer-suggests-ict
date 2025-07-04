import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kenya-black text-kenya-black-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-kenya rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <div>
                <div className="font-poppins font-bold text-xl">OPPA Services</div>
                <div className="text-sm text-gray-300">ICT Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering inclusive, customer-centric, future-proof ICT solutions across Africa. 
              AGPO Certified with over 24 specialized ICT services.
            </p>
            <div className="text-sm text-gray-300">
              <p className="font-semibold">AGPO Certified</p>
              <p>PVT-5JUEKP5J</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/services/category/infrastructure" className="text-gray-300 hover:text-primary transition-colors">ICT Infrastructure</Link></li>
              <li><Link to="/services/category/security" className="text-gray-300 hover:text-primary transition-colors">Security Solutions</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-primary transition-colors">News & Events</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Popular Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/network-infrastructure" className="text-gray-300 hover:text-primary transition-colors">Network Infrastructure</Link></li>
              <li><Link to="/services/cctv-surveillance" className="text-gray-300 hover:text-primary transition-colors">CCTV Surveillance</Link></li>
              <li><Link to="/services/video-conferencing" className="text-gray-300 hover:text-primary transition-colors">Video Conferencing</Link></li>
              <li><Link to="/services/erp-systems" className="text-gray-300 hover:text-primary transition-colors">ERP Systems</Link></li>
              <li><Link to="/services/building-automation" className="text-gray-300 hover:text-primary transition-colors">Building Automation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>Elysee Plaza</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+254700000000" className="text-gray-300 hover:text-primary transition-colors">
                  +254 700 000 000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@oppaservices.co.ke" className="text-gray-300 hover:text-primary transition-colors">
                  info@oppaservices.co.ke
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-medium">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 OPPA Services Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
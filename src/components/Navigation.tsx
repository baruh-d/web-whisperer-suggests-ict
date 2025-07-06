import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/news', label: 'News & Events' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/client-portal', label: 'Client Portal' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-elite text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+254705576746" className="flex items-center space-x-2 hover:text-primary-foreground/80 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+254 705 576 746</span>
              </a>
              <a href="mailto:info@oppaservices.com" className="flex items-center space-x-2 hover:text-primary-foreground/80 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@oppaservices.com</span>
              </a>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Elysee Plaza, Kilimani Road, Nairobi</span>
              </div>
            </div>
            <div className="text-xs text-primary-foreground/80">
              AGPO Certified: PVT-5JUEKP5J
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-card shadow-elite backdrop-blur-lg border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/233c08a7-ad64-4f31-bb2f-d741e2584a0f.png" 
                  alt="OPPA Services Logo" 
                  className="w-16 h-16 rounded-xl shadow-glow group-hover:shadow-hover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-blue rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                  OPPA <span className="text-primary">Services</span>
                </div>
                <div className="text-sm text-primary font-body font-semibold tracking-wide">
                  ICT Systems Integration
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative font-body font-medium text-base transition-all duration-300 group ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-corporate transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              
              <div className="flex items-center space-x-4">
                <div className="hidden xl:flex items-center space-x-4 text-sm text-muted-foreground">
                  <a href="tel:+254705576746" className="flex items-center space-x-2 hover:text-primary transition-all duration-300 hover:scale-105">
                    <div className="p-1 rounded-full bg-accent">
                      <Phone className="h-3 w-3" />
                    </div>
                      <span className="font-body font-medium">+254 705 576 746</span>
                  </a>
                  <div className="w-px h-4 bg-border"></div>
                  <a href="mailto:info@oppaservices.com" className="flex items-center space-x-2 hover:text-primary transition-all duration-300 hover:scale-105">
                    <div className="p-1 rounded-full bg-accent">
                      <Mail className="h-3 w-3" />
                    </div>
                      <span className="font-body font-medium">info@oppaservices.com</span>
                  </a>
                </div>

                <Button asChild className="bg-gradient-corporate text-white hover:shadow-glow hover:bg-primary-hover transition-all duration-300 hover:scale-105 font-body font-semibold px-6">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="relative"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-6 border-t border-border bg-gradient-glass backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`font-body font-medium px-4 py-3 rounded-lg transition-all duration-300 mx-4 ${
                      isActive(link.href)
                        ? 'bg-gradient-corporate text-white shadow-glow'
                        : 'text-foreground hover:text-primary hover:bg-accent hover:scale-105'
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="px-4 py-4 border-t border-border mt-4">
                  <div className="flex flex-col space-y-3 text-sm">
                    <a href="tel:+254705576746" className="flex items-center space-x-3 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent">
                      <div className="p-2 rounded-full bg-primary text-white">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span className="font-body font-medium">+254 705 576 746</span>
                    </a>
                    <a href="mailto:info@oppaservices.com" className="flex items-center space-x-3 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent">
                      <div className="p-2 rounded-full bg-primary text-white">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span className="font-body font-medium">info@oppaservices.com</span>
                    </a>
                    <div className="flex items-center space-x-3 text-muted-foreground p-2">
                      <div className="p-2 rounded-full bg-accent">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="font-body font-medium text-xs">Elysee Plaza, Kilimani Road</span>
                    </div>
                  </div>
                </div>

                <div className="px-4 pt-4">
                  <Button asChild className="w-full bg-gradient-corporate text-white hover:shadow-glow hover:bg-primary-hover transition-all duration-300 hover:scale-105 font-body font-semibold">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
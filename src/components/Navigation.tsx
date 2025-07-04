import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/news', label: 'News & Events' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card shadow-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-kenya rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-poppins font-bold text-xl text-foreground">OPPA Services</div>
              <div className="text-xs text-muted-foreground">ICT Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="tel:+254700000000" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+254 700 000 000</span>
              </a>
              <a href="mailto:info@oppaservices.co.ke" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@oppaservices.co.ke</span>
              </a>
            </div>

            <Button asChild className="bg-gradient-kenya hover:opacity-90 transition-opacity">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-primary bg-accent'
                      : 'text-foreground hover:text-primary hover:bg-accent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="px-4 py-2 border-t border-border">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <a href="tel:+254700000000" className="flex items-center space-x-2 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+254 700 000 000</span>
                  </a>
                  <a href="mailto:info@oppaservices.co.ke" className="flex items-center space-x-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>info@oppaservices.co.ke</span>
                  </a>
                </div>
              </div>

              <div className="px-4">
                <Button asChild className="w-full bg-gradient-kenya hover:opacity-90 transition-opacity">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
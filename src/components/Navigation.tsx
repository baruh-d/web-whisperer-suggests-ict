import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Award, Shield } from 'lucide-react';
import { serviceCategories } from '@/config/services'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { 
      href: '/services', 
      label: 'Services',
      submenu: serviceCategories.map(category => ({
        href: `/services#${category.id}`,
        label: category.title,
      }))
    },
    { href: '/news', label: 'News & Events' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/client-portal', label: 'Client Portal' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className={`bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-3 hidden lg:block transition-all duration-500 ${isScrolled ? 'py-2 opacity-90' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <a href="tel:+254705576746" className="flex items-center space-x-2 hover:text-blue-200 transition-all duration-300 hover:scale-105 group">
                <div className="p-1 rounded-full bg-blue-600 group-hover:bg-blue-500 transition-colors duration-300">
                  <Phone className="h-3 w-3" />
                </div>
                <span className="font-medium">+254 705 576 746</span>
              </a>
              <a href="mailto:info@oppaservices.com" className="flex items-center space-x-2 hover:text-blue-200 transition-all duration-300 hover:scale-105 group">
                <div className="p-1 rounded-full bg-blue-600 group-hover:bg-blue-500 transition-colors duration-300">
                  <Mail className="h-3 w-3" />
                </div>
                <span className="font-medium">info@oppaservices.com</span>
              </a>
              <div className="flex items-center space-x-2 text-blue-200">
                <MapPin className="h-4 w-4" />
                <span>Elysee Plaza, Kilimani Road, Nairobi</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs bg-emerald-600/90 hover:bg-emerald-600 px-3 py-1 rounded-full transition-colors duration-300">
                <Award className="h-3 w-3" />
                <span>AGPO Certified: PVT-5JUEKP5J</span>
              </div>
              <div className="flex items-center space-x-2 text-xs bg-blue-600/90 hover:bg-blue-600 px-3 py-1 rounded-full transition-colors duration-300">
                <Shield className="h-3 w-3" />
                <span>ISO 27001 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={`bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-lg shadow-gray-900/10' : 'shadow-md shadow-gray-900/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src="/logo-oppa-design.png" 
                  alt="OPPA Services Logo" 
                  className={`rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105 ${
                    isScrolled ? 'w-12 h-12' : 'w-16 h-16'
                  }`}
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-md border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300 ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}>
                  OPPA <span className="text-blue-600">Services</span>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div 
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.submenu ? index : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`relative font-medium text-base transition-all duration-300 flex items-center space-x-1 py-2 ${
                      isActive(link.href)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.submenu && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>
                  
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>

                  {link.submenu && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200/70 py-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 origin-top">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 transition-all duration-200 hover:pl-5"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex items-center space-x-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold px-6 py-2 rounded-lg group">
                  <Link to="/contact" className="flex items-center space-x-2">
                    <span>Get Quote</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse group-hover:animate-none group-hover:bg-blue-200 transition-all"></div>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-blue-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </Button>
            </div>
          </div>

          <div className={`lg:hidden mobile-menu overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
          }`}>
            <div className="border-t border-gray-200/50 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-b-xl shadow-inner">
              <div className="flex flex-col space-y-2 p-4">
                {navLinks.map((link) => (
                  <div key={link.href} className="group">
                    <Link
                      to={link.href}
                      className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                        isActive(link.href)
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-md'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                      {link.submenu && <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isActive(link.href) ? 'text-white' : 'text-gray-400'}`} />}
                    </Link>
                    
                    {link.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white/80 rounded-lg transition-all duration-200 hover:pl-5"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="px-4 py-4 border-t border-gray-200/50 mt-4 bg-white/80 rounded-lg shadow-sm">
                  <div className="flex flex-col space-y-3 text-sm">
                    <a href="tel:+254705576746" className="flex items-center space-x-3 hover:text-blue-600 transition-all duration-300 p-3 rounded-lg hover:bg-blue-50 group">
                      <div className="p-2 rounded-full bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">+254 705 576 746</span>
                    </a>
                    <a href="mailto:info@oppaservices.com" className="flex items-center space-x-3 hover:text-blue-600 transition-all duration-300 p-3 rounded-lg hover:bg-blue-50 group">
                      <div className="p-2 rounded-full bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">info@oppaservices.com</span>
                    </a>
                  </div>
                </div>

                <div className="px-4 pt-4">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] font-semibold py-3 rounded-lg">
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                      <span>Get Quote</span>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
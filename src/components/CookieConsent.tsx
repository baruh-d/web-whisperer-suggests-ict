import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cookie, Settings, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'essential') return; // Essential cookies can't be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <Card className="max-w-2xl w-full border-0 shadow-elite bg-card/95 backdrop-blur-sm pointer-events-auto animate-slide-in-right">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-corporate rounded-full flex items-center justify-center">
                <Cookie className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Cookie Preferences</h3>
                <p className="text-sm text-muted-foreground">We use cookies to enhance your experience</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {!showDetails ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to provide you with the best possible experience, analyze site performance, 
                and personalize content. By clicking "Accept All", you consent to our use of cookies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={handleAcceptAll}
                  className="bg-gradient-corporate hover:shadow-glow transition-all duration-300"
                >
                  Accept All Cookies
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowDetails(true)}
                  className="hover:bg-accent"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Customize
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={handleRejectAll}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Reject All
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-foreground">Essential Cookies</h4>
                      <Badge variant="outline" className="text-xs">Required</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Necessary for basic website functionality
                    </p>
                  </div>
                  <div className="w-10 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {[
                  { 
                    key: 'analytics' as const, 
                    title: 'Analytics Cookies', 
                    description: 'Help us understand how visitors use our website' 
                  },
                  { 
                    key: 'marketing' as const, 
                    title: 'Marketing Cookies', 
                    description: 'Used to show relevant advertisements' 
                  },
                  { 
                    key: 'preferences' as const, 
                    title: 'Preference Cookies', 
                    description: 'Remember your settings and preferences' 
                  }
                ].map((cookie) => (
                  <div key={cookie.key} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">{cookie.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{cookie.description}</p>
                    </div>
                    <button
                      onClick={() => togglePreference(cookie.key)}
                      className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                        preferences[cookie.key] 
                          ? 'bg-primary justify-end' 
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <Button 
                  onClick={handleAcceptSelected}
                  className="bg-gradient-corporate hover:shadow-glow transition-all duration-300"
                >
                  Save Preferences
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowDetails(false)}
                  className="hover:bg-accent"
                >
                  Back
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
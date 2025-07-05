import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, X, Phone, Mail, ArrowRight } from 'lucide-react';
import oppaMascot from '@/assets/oppa-mascot.png';

const TechMascot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {/* Mascot Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {/* Chat Bubble */}
        {isOpen && (
          <Card className="w-80 border-0 shadow-elite bg-card/95 backdrop-blur-sm animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src={oppaMascot} 
                    alt="OPPA Assistant" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground font-display">OPPA Assistant</h3>
                    <p className="text-xs text-muted-foreground">How can I help you today?</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  👋 Hi there! I'm here to help you with OPPA's ICT solutions. 
                  What are you looking for today?
                </p>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start text-left h-auto p-3 hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => window.location.href = '/services'}
                  >
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="font-body">Browse Our 24+ ICT Services</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start text-left h-auto p-3 hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="font-body">Get Free Consultation</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start text-left h-auto p-3 hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => window.open('tel:+254705576746')}
                  >
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="font-body">Call +254 705 576 746</span>
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
                  <p className="font-body">Need immediate help? We're here 24/7!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Mascot Avatar Button */}
        <div className="relative">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-gradient-corporate hover:shadow-glow transition-all duration-300 hover:scale-110 p-0 overflow-hidden"
          >
            <img 
              src={oppaMascot} 
              alt="OPPA Tech Assistant" 
              className="w-full h-full object-cover rounded-full"
            />
          </Button>
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechMascot;
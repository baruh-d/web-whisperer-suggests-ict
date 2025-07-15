import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Shield, Sparkles, Zap, Globe, Bell } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email) return;
    
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      const data = await response.json();
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
        
        <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-sm opacity-75"></div>
              <div className="relative bg-gradient-to-br from-white to-green-50 p-4 rounded-full shadow-lg">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Our Community!
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Thank you for subscribing! You'll receive our latest updates and insights soon.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1 text-blue-400" />
              <span>Privacy protected</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-4 w-4 mr-1 text-yellow-400" />
              <span>Weekly insights</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-1 text-purple-400" />
              <span>Industry updates</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
      
      {/* Floating icon balls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <Mail className="h-5 w-5 text-white" />
        </div>
        
        <div className="absolute top-16 right-16 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
          <CheckCircle className="h-4 w-4 text-white" />
        </div>
        
        <div className="absolute bottom-16 left-16 w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        
        <div className="absolute bottom-16 right-16 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
          <Bell className="h-5 w-5 text-white" />
        </div>
        
        <div className="absolute top-1/2 left-8 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
          <Zap className="h-4 w-4 text-white" />
        </div>
        
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3s' }}>
          <Globe className="h-5 w-5 text-white" />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur-sm opacity-75"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-50 p-4 rounded-full shadow-lg">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Informed
        </h2>
        
        <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
          Get the latest updates on our ICT solutions and industry insights delivered straight to your inbox.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full h-12 px-5 text-gray-900 bg-white/95 border-0 focus:ring-2 focus:ring-blue-400/50 rounded-full shadow-md placeholder:text-gray-500 focus:outline-none"
              disabled={isLoading}
            />
            <div className="absolute inset-0 rounded-full pointer-events-none border border-blue-300/30"></div>
          </div>
          
          <button 
            onClick={handleSubmit}
            disabled={isLoading || !email}
            className="h-12 px-6 bg-white text-blue-600 hover:bg-white/90 rounded-full font-semibold transition-all duration-300 group shadow-md hover:shadow-lg hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="flex items-center">
              {isLoading ? 'Subscribing...' : 'Subscribe'}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
        
        {error && (
          <div className="mb-4 text-red-400 text-sm">
            {error}
          </div>
        )}
        
        <div className="flex items-center justify-center text-sm text-white/70 mb-6">
          <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
          <span>No spam. Unsubscribe anytime.</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <div className="flex items-center">
            <Shield className="h-4 w-4 mr-1 text-blue-400" />
            <span>Privacy protected</span>
          </div>
          <div className="flex items-center">
            <Sparkles className="h-4 w-4 mr-1 text-yellow-400" />
            <span>Weekly insights</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1 text-purple-400" />
            <span>Industry updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
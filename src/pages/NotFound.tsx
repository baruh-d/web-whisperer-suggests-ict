import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-accent-blue/10 rounded-full animate-float-advanced"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-light/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-primary-glow/10 rounded-full animate-float-advanced"></div>
      </div>

      <div className="text-center z-10 max-w-2xl mx-auto px-6 animate-fade-in-up">
        {/* Large 404 Display */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 select-none animate-scale-in">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-8xl font-display font-bold bg-gradient-corporate bg-clip-text text-transparent animate-fade-in">
              404
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 animate-slide-in-right">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed animate-fade-in">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>
          <div className="text-sm text-muted-foreground/80 font-mono bg-muted/30 px-4 py-2 rounded-lg inline-block animate-fade-in">
            Path: {location.pathname}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-gradient-corporate rounded-xl shadow-corporate hover:shadow-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1 min-w-[200px]"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Return Home
          </Link>
          
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary border-2 border-primary bg-transparent rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1 min-w-[200px]"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Support
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-4">
            Or try one of these popular pages:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "News", path: "/news" },
              { name: "Client Portal", path: "/client-portal" }
            ].map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-primary hover:text-primary-dark underline underline-offset-4 hover:underline-offset-2 transition-all duration-200 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Fun Error Code */}
        <div className="mt-8 text-xs text-muted-foreground/50 font-mono animate-fade-in">
          Error Code: OPPA_404_PAGE_NOT_FOUND
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-blue/10 to-transparent"></div>
    </div>
  );
};

export default NotFound;
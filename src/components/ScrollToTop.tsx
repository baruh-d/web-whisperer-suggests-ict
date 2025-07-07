// components/ScrollToTop.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Don't scroll on the very first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Check if mobile menu is open (using your navigation's state)
    const mobileMenuOpen = document.querySelector('[aria-expanded="true"]');
    
    // Only scroll if path changed and mobile menu is not open
    if (previousPathname.current !== pathname && !mobileMenuOpen) {
      // Use instant scroll to prevent conflicts with smooth scrolling
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }

    previousPathname.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
import React, { useRef, useEffect, useState } from 'react';
import { useMascotFloat, useHoverAnimation } from '../hooks/useAnimations';

interface TechMascotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  floatingAnimation?: boolean;
  glowEffect?: boolean;
  speechBubble?: string;
  onClick?: () => void;
}

const TechMascot: React.FC<TechMascotProps> = ({
  className = '',
  size = 'md',
  interactive = true,
  floatingAnimation = true,
  glowEffect = false,
  speechBubble,
  onClick
}) => {
  const mascotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  };

  // Floating animation
  useEffect(() => {
    if (floatingAnimation && mascotRef.current) {
      mascotRef.current.classList.add('animate-[float_3s_ease-in-out_infinite]');
    }
  }, [floatingAnimation]);

  // Hover interaction
  useHoverAnimation(
    mascotRef,
    () => {
      setIsHovered(true);
      mascotRef.current?.classList.add(
        'scale-110',
        'rotate-2',
        'transition-transform',
        'duration-300',
        'ease-[back.out]'
      );
    },
    () => {
      setIsHovered(false);
      mascotRef.current?.classList.remove('scale-110', 'rotate-2');
    }
  );

  // Delayed speech bubble
  useEffect(() => {
    if (speechBubble && isHovered) {
      const timer = setTimeout(() => setShowSpeech(true), 400);
      return () => clearTimeout(timer);
    } else {
      setShowSpeech(false);
    }
  }, [speechBubble, isHovered]);

  const handleClick = () => {
    if (onClick) onClick();

    mascotRef.current?.classList.add('scale-95', 'transition-transform', 'duration-100');
    setTimeout(() => mascotRef.current?.classList.remove('scale-95'), 100);
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
      {/* Speech Bubble */}
      {speechBubble && showSpeech && (
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10 animate-[fade-in_0.3s_ease-out]">
          <div className="bg-white text-gray-800 text-sm font-medium rounded-lg px-4 py-2 shadow-lg border border-gray-200 relative whitespace-nowrap">
            {speechBubble}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
          </div>
        </div>
      )}

      {/* Mascot Avatar */}
      <div
        ref={mascotRef}
        className={`relative ${sizeClasses[size]} ${interactive ? 'cursor-pointer' : ''} ${
          glowEffect ? 'filter drop-shadow-lg' : ''
        } transition-all duration-300 ease-[back.out]`}
        onClick={handleClick}
        role="button"
        tabIndex={interactive ? 0 : -1}
        aria-label="Chatbot assistant"
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      >
        {/* Glow */}
        {glowEffect && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-md opacity-30 animate-pulse" />
        )}

        {/* Mascot Image */}
        <div className="relative z-10 w-full h-full">
          <img
            src="/assets/oppa-mascot.png"
            alt="OPPA Tech Mascot"
            className="w-full h-full object-contain"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
          />
        </div>

        {/* Decorative Particles + Rings */}
        {interactive && (
          <>
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-0 animate-ping"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '2s',
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-30 animate-pulse" />
              <div
                className="absolute inset-2 border border-purple-400 rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </>
        )}

        {/* Tooltip */}
        {isHovered && interactive && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-[fade-in_0.3s_ease-out]">
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
              Click me!
            </div>
          </div>
        )}
      </div>

      {/* Online Indicator */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm">
        <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default TechMascot;

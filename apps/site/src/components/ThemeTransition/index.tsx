import React, { useEffect, useState } from 'react';

interface ThemeTransitionProps {
  isDark: boolean;
  originX: number;
  originY: number;
}

const ThemeTransition: React.FC<ThemeTransitionProps> = ({ isDark, originX, originY }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, [isDark]);

  if (!isAnimating) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
      style={{
        clipPath: `circle(0% at ${originX}px ${originY}px)`,
        animation: 'expand 1s ease-out forwards',
      }}
    />
  );
};

export default ThemeTransition;

import { useEffect, useState } from "react";

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ParallaxElementProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setOffset(scrollTop * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
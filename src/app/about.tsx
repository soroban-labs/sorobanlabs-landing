'use client'
import { useState, useEffect } from "react";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden font-mono bg-black text-white">
      {/* Base grid - always visible */}
      <div className="fixed inset-0 grid-lines-base pointer-events-none" />
      
      {/* Glow effect - follows cursor */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'black',
          boxShadow: `0 0 50px 25px rgba(255, 255, 255, 0.15) inset`,
          maskImage: `radial-gradient(50px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(50px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      >
        <div className="w-full h-full grid-lines-glow" />
      </div>

      <style jsx global>{`
        .grid-lines-base {
          background-image: 
            linear-gradient(to right, rgba(50, 50, 50, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(50, 50, 50, 0.2) 1px, transparent 1px);
          background-size: 15px 15px;
        }
        
        .grid-lines-glow {
          background-image: 
            linear-gradient(to right, rgba(200, 200, 255, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 200, 255, 0.7) 1px, transparent 1px);
          background-size: 15px 15px;
        }
      `}</style>

      <main className="absolute inset-0 flex items-center justify-center z-0 p-10">
        <div className="text-center">
          Building GenAI Products from India for the World.
        </div>
      </main>
      <footer className="absolute bottom-8 left-0 right-0 p-4 text-center text-sm z-10">
        For more information or to get involved, contact{" "}
        <a 
          href="https://www.atharvaarya.com" 
          className="underline hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Atharva Arya
        </a>{" "}
        at{" "}
        <a 
          href="mailto:atharva@sorobanlabs.io"
          className="underline hover:text-gray-400"
        >
          atharva@sorobanlabs.io
        </a>
      </footer>
    </div>
  );
}

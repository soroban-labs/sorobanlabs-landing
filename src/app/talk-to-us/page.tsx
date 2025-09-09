'use client'
import { useState, useEffect } from "react";
import NavButton from '../../components/NavButton';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TalkToUs() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-auto font-mono bg-white text-[#171717]">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=STIX+Two+Text:ital,wght@0,400..700;1,400..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
      
      {/* Base grid with fade-out effect */}
      <div 
        className="fixed inset-0 grid-lines-fade pointer-events-none"
      />
      
      {/* Glow effect - follows cursor */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'white',
          boxShadow: `0 0 50px 25px rgba(0, 0, 0, 0.025) inset`,
          maskImage: `radial-gradient(40px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(40px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      >
        <div className="w-full h-full grid-lines-glow" />
      </div>

      <style jsx global>{`
        .grid-lines-base {
          background-image: 
            linear-gradient(to right, rgba(128, 128, 128, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.04) 1px, transparent 1px);
          background-size: 15px 15px;
        }
        
        .grid-lines-fade {
          background-image: 
            linear-gradient(to right, rgba(128, 128, 128, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.04) 1px, transparent 1px);
          background-size: 15px 15px;
          mask-image: linear-gradient(to bottom, black 0, black 2000px, rgba(0,0,0,0.8) 2040px, rgba(0,0,0,0.6) 2050px, rgba(0,0,0,0.4) 2060px, rgba(0,0,0,0.2) 2070px, transparent 2080px);
          -webkit-mask-image: linear-gradient(to bottom, black 0, black 2000px, rgba(0,0,0,0.8) 2040px, rgba(0,0,0,0.6) 2050px, rgba(0,0,0,0.4) 2060px, rgba(0,0,0,0.2) 2070px, transparent 2080px);
        }
        
        .grid-lines-glow {
          background-image: 
            linear-gradient(to right, rgba(50, 50, 50, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(50, 50, 50, 0.1) 1px, transparent 1px);
          background-size: 15px 15px;
        }
      `}</style>

      {/* Navbar */}
      <nav className="relative z-10 w-full px-4 sm:px-6 py-4 border-b" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <div className="text-base font-normal cursor-pointer" style={{ fontFamily: 'monospace', color: '#999999' }}>
              soroban labs
            </div>
          </Link>
          <div className="flex items-center gap-3 text-base" style={{ fontFamily: 'monospace', color: '#999999' }}>
            <Link href="/">
              <NavButton onClick={() => {}}>
                Home
              </NavButton>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-0 flex flex-col items-center justify-center min-h-screen p-4 sm:p-10 py-16 sm:py-32">
        <div className="text-center mb-20 sm:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-24 mb-8">
            <div className="lg:w-[40%] flex flex-col justify-center lg:min-h-[500px]">
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal leading-tight text-left">
                  <div style={{fontFamily: 'var(--font-libre-baskerville)', textTransform: 'capitalize', color: '#000000', fontStyle: 'italic', fontSize: 'clamp(50px, 10vw, 80px)'}}>Let&apos;s</div>
                  <div style={{fontFamily: 'var(--font-libre-franklin)', textTransform: 'capitalize', color: '#000000', fontWeight: '300', fontSize: 'clamp(40px, 8vw, 65px)'}}>Connect.</div>
                </h1>
                <p className="text-xl sm:text-2xl font-medium mb-12 text-left mt-6" style={{fontFamily: '"Libre Franklin", sans-serif', fontWeight: 400, color: '#343434ff', maxWidth: '1000px'}}>
                  Hi, I&apos;m Atharva, Founder of Soroban Labs. I&apos;d love to hear how we can make this tool more useful for you. No sales pitch—just a quick chat at a time that works best for you.
                </p>
              </div>
            </div>
            <div className="lg:w-[60%]">
              <div 
                className="rounded-lg shadow-lg w-[80%] h-[800px] overflow-hidden"
                style={{
                  border: '2px solid #6B6A9E',
                  boxShadow: '0 8px 24px rgba(107, 106, 158, 0.3)',
                  backgroundColor: 'white'
                }}
              >
                <iframe
                  src="https://calendly.com/aryaatharva18/new-meeting?embed_domain=localhost&embed_type=Inline"
                  width="100%"
                  height="100%"
                  title="Schedule a meeting"
                  style={{
                    border: 'none',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
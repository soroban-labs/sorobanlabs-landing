'use client'
import { useState, useEffect } from "react";
import Button from '../components/Button';
import NavButton from '../components/NavButton';
import Footer from '../components/Footer';
import DesmosGraph from '../components/DesmosGraph';
import DesmosGraph3D from '../components/DesmosGraph3D';
import { defaultExpressions, glucoseExpressions } from '../data/desmosExpressions';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const [currentSubject, setCurrentSubject] = useState('physics');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animateTextChange = (newSubject: string) => {
    if (isAnimating || currentSubject === newSubject) return;
    
    setIsAnimating(true);
    const currentText = currentSubject;
    const targetText = newSubject;
    const maxLength = Math.max(currentText.length, targetText.length);
    
    let step = 0;
    const interval = setInterval(() => {
      if (step <= maxLength) {
        const animatedText = targetText.slice(0, step) + currentText.slice(step);
        setCurrentSubject(animatedText.slice(0, maxLength));
        step++;
      } else {
        setCurrentSubject(targetText);
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, 50);
  };

  useEffect(() => {
    const cycleSubjects = () => {
      const subjects = ['physics', 'chemistry', 'math'];
      const currentIndex = subjects.indexOf(currentSubject);
      const nextSubject = subjects[(currentIndex + 1) % subjects.length];
      animateTextChange(nextSubject);
    };

    const interval = setInterval(cycleSubjects, 2000);
    return () => clearInterval(interval);
  }, [currentSubject, isAnimating]);

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
        
        .highlight-text {
          position: relative;
          display: inline-block;
        }
        
        .highlight-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #E6E6FA;
          z-index: -1;
        }
        
        .highlight-text:hover::before {
          background: #E6E6FA;
          transform: scaleX(0);
          transform-origin: left;
          animation: highlight-sweep 0.6s ease-out 0.1s forwards;
        }
        
        .video-container-mobile {
          transform: scale(1);
        }
        
        @media (min-width: 1024px) {
          .video-container-mobile {
            transform: scale(1.17);
          }
        }
        
        @keyframes highlight-sweep {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="relative z-10 w-full px-4 sm:px-6 py-4 border-b" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
        <div className="flex justify-between items-center w-full">
          <div className="text-base font-normal" style={{ fontFamily: 'monospace', color: '#999999' }}>
            soroban labs
          </div>
          <div className="flex items-center gap-3 text-base" style={{ fontFamily: 'monospace', color: '#999999' }}>
            <NavButton onClick={() => setIsCalendlyModalOpen(true)}>
              Book 1:1
            </NavButton>
            <NavButton onClick={() => setIsModalOpen(true)}>
              Simulate Now
            </NavButton>
          </div>
        </div>
      </nav>

      <main className="relative z-0 flex flex-col items-center justify-center min-h-screen p-4 sm:p-10 py-16 sm:py-32">
        <div className="text-center mb-20 sm:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-24 mb-8">
            <div className="flex-1 flex flex-col justify-center lg:min-h-[500px]">
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal leading-tight text-left">
                  <div style={{fontFamily: 'var(--font-libre-baskerville)', textTransform: 'capitalize', color: '#000000', fontStyle: 'italic', fontSize: 'clamp(50px, 10vw, 80px)'}}>Understanding</div>
                  <div style={{fontFamily: 'var(--font-libre-franklin)', textTransform: 'capitalize', color: '#000000', fontWeight: '300', fontSize: 'clamp(40px, 8vw, 65px)'}}><span className="highlight-text">{currentSubject}</span></div>
                  <div style={{fontFamily: 'var(--font-libre-franklin)', textTransform: 'capitalize', color: '#000000', fontWeight: '300', fontSize: 'clamp(40px, 8vw, 65px)'}}>was never easier.</div>
                </h1>
                <p className="text-xl sm:text-2xl font-medium mb-12 text-left mt-6" style={{fontFamily: '"Libre Franklin", sans-serif', fontWeight: 400, color: '#343434ff', maxWidth: '1000px'}}>Welcome to your own AI Science Lab.</p>
                <div className="flex justify-start">
                  <Button variant="dark" onClick={() => setIsModalOpen(true)}>
                    Simulate Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <DesmosGraph 
                expressions={defaultExpressions}
                width="500px"
                height="500px"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Centered x.mp4 video */}
        <div className="flex justify-center mb-12 sm:mb-20 w-full max-w-5xl px-2 pb-23">
          <div 
            className="rounded-lg w-[95%] lg:w-[98%] video-container-mobile"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
              overflow: 'hidden'
            }}
          >
            <video 
              src="/x.mp4" 
              autoPlay
              muted
              loop
              className="w-full h-auto block"
              style={{
                clipPath: 'inset(0 1.02% 0 1.02%)',
                transform: 'scale(1.0204)',
                filter: 'brightness(1.06) saturate(0.98)'
              }}
            />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-6 lg:gap-32 p-4 sm:p-8 rounded-lg mb-16 lg:mb-0" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
          {/* Left side - Items */}
          <div className="flex-1 flex justify-center w-full">
            <div 
              className="p-6 sm:p-12 rounded-lg w-full max-w-lg" 
              style={{
                backgroundColor: '#E6E6FA'
              }}
            >
              <div 
                className="font-normal text-center lg:text-left" 
                style={{
                  fontFamily: 'var(--font-libre-franklin)', 
                  color: '#000000',
                  fontSize: 'clamp(24px, 5vw, 40px)', 
                  letterSpacing: '-2%',
                  lineHeight: '1.1'
                }}
              >
                From prompts to visualizations, in <span style={{fontFamily: 'var(--font-libre-baskerville)', fontStyle: 'italic'}}>seconds</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Video */}
          <div className="flex-1 flex justify-center w-full overflow-hidden">
            <div 
              className="rounded-lg w-[90%] lg:w-full lg:max-w-lg flex items-center justify-center min-h-[300px] lg:min-h-[380px]"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                overflow: 'hidden',
                height: 'auto'
              }}
            >
              <video 
                src="/m2.mp4" 
                autoPlay
                muted
                loop
                className="w-full h-auto block"
                style={{
                  clipPath: 'inset(0 22% 0 22%)',
                  transform: 'scale(1.79)'
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-6 lg:gap-32 mt-16 lg:mt-32 p-4 sm:p-8 rounded-lg mb-16 lg:mb-0" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
          {/* Left side - Video */}
          <div className="flex-1 flex justify-center w-full order-2 lg:order-1">
            <video 
              src="/cursor.mp4" 
              autoPlay
              muted
              loop
              className="rounded-lg w-[90%] lg:w-full lg:max-w-lg"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                height: 'auto',
                aspectRatio: '1.1',
                objectFit: 'cover'
              }}
            />
          </div>
          
          {/* Right side - Text */}
          <div className="flex-1 flex justify-center w-full order-1 lg:order-2">
            <div 
              className="p-6 sm:p-12 rounded-lg w-full max-w-lg" 
              style={{
                backgroundColor: '#E6E6FA'
              }}
            >
              <div 
                className="font-normal text-center lg:text-left" 
                style={{
                  fontFamily: 'var(--font-libre-franklin)', 
                  color: '#000000',
                  fontSize: 'clamp(24px, 5vw, 40px)', 
                  letterSpacing: '-2%',
                  lineHeight: '1.1'
                }}
              >
                Pick components to <span style={{fontFamily: 'var(--font-libre-baskerville)', fontStyle: 'italic'}}>customize</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-6 lg:gap-32 mt-16 lg:mt-32 p-4 sm:p-8 rounded-lg" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
          {/* Left side - Text */}
          <div className="flex-1 flex justify-center w-full">
            <div 
              className="p-6 sm:p-12 rounded-lg w-full max-w-lg" 
              style={{
                backgroundColor: '#E6E6FA'
              }}
            >
              <div 
                className="font-normal text-center lg:text-left" 
                style={{
                  fontFamily: 'var(--font-libre-franklin)', 
                  color: '#000000',
                  fontSize: 'clamp(24px, 5vw, 40px)', 
                  letterSpacing: '-2%',
                  lineHeight: '1.1'
                }}
              >
                Built-in tools for <span style={{fontFamily: 'var(--font-libre-baskerville)', fontStyle: 'italic'}}>accurate</span> graphs, more to come!
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex-1 flex justify-center w-full">
            <img 
              src="/mcp.png" 
              alt="MCP Tools Interface"
              className="w-[90%] lg:w-full lg:max-w-lg h-auto rounded-lg"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)'
              }}
            />
          </div>
        </div>
        
        {/* Final CTA Section */}
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mt-16 lg:mt-32 p-4 sm:p-8 rounded-lg" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <div className="w-full mb-8">
            <div 
              className="p-6 sm:p-12 rounded-lg w-full" 
              style={{
                backgroundColor: '#E6E6FA'
              }}
            >
              <div 
                className="font-normal text-center" 
                style={{
                  fontFamily: 'var(--font-libre-franklin)', 
                  color: '#000000',
                  fontSize: 'clamp(24px, 5vw, 40px)', 
                  letterSpacing: '-2%',
                  lineHeight: '1.1'
                }}
              >
                A system that builds what you <span style={{fontFamily: 'var(--font-libre-baskerville)', fontStyle: 'italic'}}>imagine</span>,<br />one component at a time.
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="dark" onClick={() => setIsModalOpen(true)}>
              Simulate Now
            </Button>
          </div>
        </div>
        
        {/* Duplicate Simulate Almost Anything Section */}
        <div className="text-center mb-20 sm:mb-32 mt-16 lg:mt-32">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-24 mb-8">
            <div className="flex-1 flex flex-col justify-center lg:min-h-[500px]">
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal leading-tight text-left">
                  <div style={{fontFamily: 'var(--font-libre-baskerville)', textTransform: 'capitalize', color: '#000000', fontStyle: 'italic', fontSize: 'clamp(50px, 10vw, 80px)'}}>Simulate</div>
                  <div style={{fontFamily: 'var(--font-libre-franklin)', textTransform: 'capitalize', color: '#000000', fontWeight: '300', fontSize: 'clamp(40px, 8vw, 65px)'}}>Almost <span className="highlight-text">Anything</span>.</div>
                </h1>
                <p className="text-xl sm:text-2xl font-medium mb-12 text-left mt-6" style={{fontFamily: '"Libre Franklin", sans-serif', fontWeight: 400, color: '#343434ff', maxWidth: '1000px'}}>Create academic visualizations from text prompts.</p>
                <div className="flex justify-start">
                  <Button variant="dark" onClick={() => setIsModalOpen(true)}>
                    Simulate Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <DesmosGraph3D 
                expressions={glucoseExpressions}
                width="500px"
                height="500px"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>
      
      {/* Email Signup Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div 
            className="p-8 rounded-lg max-w-md w-full mx-4"
            style={{
              backgroundColor: 'white',
              border: '2px solid #6B6A9E',
              boxShadow: '0 8px 24px rgba(107, 106, 158, 0.3)'
            }}
          >
            <h2 
              className="text-2xl font-normal mb-4 text-center"
              style={{
                fontFamily: 'var(--font-libre-baskerville)',
                fontStyle: 'italic',
                color: '#000000'
              }}
            >
              Hi! We&apos;re glad you&apos;re interested
            </h2>
            <p 
              className="text-base mb-6 text-center"
              style={{
                fontFamily: '"Red Hat Mono", monospace',
                color: '#343434',
                lineHeight: '1.5'
              }}
            >
              Please type in your email address so we can send the link of the beta to you.
            </p>
            <form 
              action="https://formspree.io/f/xwpqjrwl"
              method="POST" 
              className="space-y-4"
              onSubmit={() => {
                setTimeout(() => setIsModalOpen(false), 1000);
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 border-2 rounded-none"
                style={{
                  fontFamily: '"Red Hat Mono", monospace',
                  backgroundColor: 'white',
                  borderColor: '#6B6A9E',
                  color: '#343434',
                  fontSize: '14px'
                }}
              />
              <div className="flex gap-3 justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-normal"
                  style={{
                    fontFamily: 'var(--font-libre-franklin)',
                    backgroundColor: 'white',
                    color: '#6B6A9E',
                    border: '2px solid #6B6A9E',
                    borderRadius: '0px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#6B6A9E';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#6B6A9E';
                  }}
                >
                  Send Me Access
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 text-sm font-normal"
                  style={{
                    fontFamily: 'var(--font-libre-franklin)',
                    backgroundColor: 'transparent',
                    color: '#999999',
                    border: '2px solid #999999',
                    borderRadius: '0px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#6B6A9E';
                    e.currentTarget.style.color = '#6B6A9E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#999999';
                    e.currentTarget.style.color = '#999999';
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Calendly Modal */}
      {isCalendlyModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={(e) => e.target === e.currentTarget && setIsCalendlyModalOpen(false)}
        >
          <div 
            className="p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col"
            style={{
              backgroundColor: 'white',
              border: '2px solid #6B6A9E',
              boxShadow: '0 8px 24px rgba(107, 106, 158, 0.3)'
            }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 
                  className="text-2xl font-normal mb-3"
                  style={{
                    fontFamily: 'var(--font-libre-baskerville)',
                    fontStyle: 'italic',
                    color: '#000000'
                  }}
                >
                  Let&apos;s Connect
                </h2>
                <p 
                  className="text-base mb-4"
                  style={{
                    fontFamily: '"Red Hat Mono", monospace',
                    color: '#343434',
                    lineHeight: '1.5'
                  }}
                >
                  Hi, I&apos;m Atharva, Founder of Soroban Labs. I&apos;d love to hear how we can make this tool more useful for you. No sales pitch—just a quick chat at a time that works best for you.
                </p>
              </div>
              <button
                onClick={() => setIsCalendlyModalOpen(false)}
                className="text-2xl"
                style={{
                  color: '#999999',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#6B6A9E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#999999';
                }}
              >
                ×
              </button>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://calendly.com/aryaatharva18/new-meeting?embed_domain=localhost&embed_type=Inline"
                width="100%"
                height="600"
                title="Schedule a meeting"
                style={{
                  border: 'none',
                  borderRadius: '4px'
                }}
              />
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
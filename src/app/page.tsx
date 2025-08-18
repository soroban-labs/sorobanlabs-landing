'use client'
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-auto font-mono bg-[#F5F5F5] text-[#171717]">
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      {/* Base grid - always visible */}
      <div className="fixed inset-0 grid-lines-base pointer-events-none" />
      
      {/* Glow effect - follows cursor */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: '#F5F5F5',
          boxShadow: `0 0 50px 25px rgba(0, 0, 0, 0.05) inset`,
          maskImage: `radial-gradient(50px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(50px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
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
        
        .grid-lines-glow {
          background-image: 
            linear-gradient(to right, rgba(50, 50, 50, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(50, 50, 50, 0.2) 1px, transparent 1px);
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
          <div className="text-xs font-normal" style={{ fontFamily: 'monospace', color: '#999999' }}>
            soroban labs
          </div>
          <div className="text-xs" style={{ fontFamily: 'monospace', color: '#999999' }}>
            <a 
              href="mailto:atharva@sorobanlabs.io"
              style={{color: '#999999'}}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#666666'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#999999'}
            >
              atharva@sorobanlabs.io
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-0 flex flex-col items-center justify-center min-h-screen p-4 sm:p-10 py-16 sm:py-32">
        <div className="text-center mb-20 sm:mb-32">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal mb-12 leading-tight text-left">
            <div style={{fontFamily: 'var(--font-libre-baskerville)', textTransform: 'capitalize', color: '#000000', fontStyle: 'italic', fontSize: 'clamp(60px, 12vw, 96px)'}}>Simulate</div>
            <div style={{fontFamily: 'var(--font-libre-franklin)', textTransform: 'capitalize', color: '#000000', fontWeight: '300', fontSize: 'clamp(50px, 10vw, 80px)'}}>Almost <span className="highlight-text">Anything</span>.</div>
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-12 text-left" style={{fontFamily: '"Red Hat Mono", monospace', color: '#343434ff', maxWidth: '1000px'}}>Create academic visualizations from text prompts.<br />No coding required.</p>
          <button 
            className="px-12 py-4 text-xl font-normal mb-20"
            style={{
              fontFamily: 'var(--font-libre-franklin)',
              backgroundColor: '#E6E6FA',
              color: '#6B6A9E',
              border: '2px solid #6B6A9E',
              borderRadius: '0px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(107, 106, 158, 0.3)'
            }}
            onClick={() => setIsModalOpen(true)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6B6A9E';
              e.currentTarget.style.color = '#E6E6FA';
              e.currentTarget.style.borderColor = '#6B6A9E';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(107, 106, 158, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E6E6FA';
              e.currentTarget.style.color = '#6B6A9E';
              e.currentTarget.style.borderColor = '#6B6A9E';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(107, 106, 158, 0.3)';
            }}
          >
            Simulate Now
          </button>
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
                transform: 'scale(1.0204)'
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
          
          <button 
            className="px-12 py-4 text-xl font-normal"
            style={{
              fontFamily: 'var(--font-libre-franklin)',
              backgroundColor: '#E6E6FA',
              color: '#6B6A9E',
              border: '2px solid #6B6A9E',
              borderRadius: '0px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(107, 106, 158, 0.3)'
            }}
            onClick={() => setIsModalOpen(true)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6B6A9E';
              e.currentTarget.style.color = '#E6E6FA';
              e.currentTarget.style.borderColor = '#6B6A9E';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(107, 106, 158, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E6E6FA';
              e.currentTarget.style.color = '#6B6A9E';
              e.currentTarget.style.borderColor = '#6B6A9E';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(107, 106, 158, 0.3)';
            }}
          >
            Simulate Now
          </button>
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
              backgroundColor: '#F5F5F5',
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
              Hi! We're glad you're interested
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
                  backgroundColor: '#F5F5F5',
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
                    backgroundColor: '#E6E6FA',
                    color: '#6B6A9E',
                    border: '2px solid #6B6A9E',
                    borderRadius: '0px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#6B6A9E';
                    e.currentTarget.style.color = '#E6E6FA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E6E6FA';
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
      
      <footer className="relative bottom-0 left-0 right-0 p-4 text-center z-10 mt-20 border-t" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
        <img 
          src="/heart.svg" 
          alt="heart" 
          className="inline-block"
          style={{ width: '12px', height: '12px', opacity: 0.6 }}
        />
      </footer>
    </div>
  );
}
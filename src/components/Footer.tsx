'use client'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 right-0 mt-20 z-10">
      
      <div className="relative">
        {/* Heart in center of border line */}
        <div className="relative w-full flex justify-center mb-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }} />
          </div>
          <div className="relative flex justify-center bg-white px-3">
            <img 
              src="/heart.svg" 
              alt="heart" 
              className="inline-block"
              style={{ width: '16px', height: '16px', opacity: 0.6 }}
            />
          </div>
        </div>

        <div className="p-12 pb-32">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 max-w-6xl mx-auto">
            {/* Left side - Company info */}
            <div className="flex flex-col gap-5">
              <div className="text-2xl font-normal" style={{ fontFamily: 'var(--font-libre-franklin)', color: '#171717' }}>
                Soroban Labs
              </div>
              <div className="text-base" style={{ fontFamily: 'monospace', color: '#171717' }}>
                © 2025 Soroban Labs. Bangalore, India
              </div>
              <div className="flex items-center gap-3 text-base" style={{ fontFamily: 'monospace', color: '#171717' }}>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                All services are online
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a 
                  href="https://x.com/sorobanlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base transition-colors duration-200"
                  style={{ fontFamily: 'monospace', color: '#171717', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#6B6A9E'}
                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#171717'}
                >
                  <FaXTwitter className="w-4 h-4" />
                  Follow us
                </a>
              </div>
            </div>

            {/* Right side - Links */}
            <div className="flex flex-col sm:flex-row gap-12 text-lg" style={{ fontFamily: 'monospace' }}>
              <div className="flex flex-col gap-5">
                <a 
                  href="mailto:atharva@sorobanlabs.io"
                  style={{color: '#171717', textDecoration: 'none'}}
                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'underline'}
                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'none'}
                >
                  Contact Us
                </a>
                <a 
                  href="#"
                  style={{color: '#171717', textDecoration: 'none'}}
                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'underline'}
                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'none'}
                >
                  Careers
                </a>
                <a 
                  href="#"
                  style={{color: '#171717', textDecoration: 'none'}}
                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'underline'}
                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'none'}
                >
                  Blog
                </a>
              </div>
              <div className="flex flex-col gap-5">
                <a 
                  href="#"
                  style={{color: '#171717', textDecoration: 'none'}}
                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'underline'}
                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'none'}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#"
                  style={{color: '#171717', textDecoration: 'none'}}
                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'underline'}
                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'none'}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
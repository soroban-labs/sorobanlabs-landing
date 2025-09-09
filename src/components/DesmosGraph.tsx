'use client';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Desmos: {
      GraphingCalculator: (element: HTMLElement, options?: Record<string, unknown>) => {
        setExpression: (expr: Record<string, unknown>) => void;
        setBlank: () => void;
        setMathBounds: (bounds: Record<string, unknown>) => void;
        setViewport: (bounds: number[]) => void;
        resize: () => void;
      };
    };
  }
}

interface DesmosGraphProps {
  expressions: Record<string, unknown>[];
  width?: string;
  height?: string;
  className?: string;
}

export default function DesmosGraph({ 
  expressions = [], 
  width = "400px", 
  height = "300px", 
  className = "" 
}: DesmosGraphProps) {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const calculatorInstance = useRef<ReturnType<typeof window.Desmos.GraphingCalculator> | null>(null);

  useEffect(() => {
    const loadDesmos = () => {
      if (window.Desmos && calculatorRef.current) {
        calculatorInstance.current = window.Desmos.GraphingCalculator(calculatorRef.current, {
          expressions: false,
          settingsMenu: false,
          zoomButtons: false,
          expressionsCollapsed: true,
          autosize: true,
          keypad: false,
          graphpaper: true,
          showGrid: false,
          showXAxis: true,
          showYAxis: false
        });

        // Load expressions
        if (expressions.length > 0) {
          expressions.forEach((expr, index) => {
            try {
              calculatorInstance.current?.setExpression(expr);
            } catch (error) {
              console.error(`Error adding expression ${index + 1}:`, error);
            }
          });

          // Set viewport and resize
          setTimeout(() => {
            if (calculatorInstance.current?.setViewport) {
              calculatorInstance.current.setViewport([-5, 45, -10, 25]);
            }
            if (calculatorInstance.current?.resize) {
              calculatorInstance.current.resize();
            }
          }, 100);
        }
      }
    };

    // Check if Desmos is already loaded
    if (window.Desmos) {
      loadDesmos();
    } else {
      // Load Desmos script
      const script = document.createElement('script');
      script.src = `https://www.desmos.com/api/v1.12/calculator.js?apiKey=${process.env.NEXT_PUBLIC_DESMOS_API_KEY}`;
      script.onload = loadDesmos;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [expressions]);

  return (
    <div 
      className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <div 
        ref={calculatorRef} 
        className="w-full h-full"
      />
    </div>
  );
}
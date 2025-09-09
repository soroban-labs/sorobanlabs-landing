'use client';
import { useEffect, useRef } from 'react';

// Type for 3D Calculator (extending the existing global declaration)
interface Calculator3D {
  setExpression: (expr: any) => void;
  setBlank: () => void;
  setMathBounds: (bounds: any) => void;
  setViewport: (bounds: number[]) => void;
  setGraphSettings: (settings: any) => void;
  resize: () => void;
  viewport?: {
    zoomFit: () => void;
  };
}

interface DesmosGraph3DProps {
  expressions: any[];
  width?: string;
  height?: string;
  className?: string;
}

export default function DesmosGraph3D({ 
  expressions = [], 
  width = "400px", 
  height = "300px", 
  className = "" 
}: DesmosGraph3DProps) {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const calculatorInstance = useRef<Calculator3D | null>(null);

  useEffect(() => {
    const loadDesmos = () => {
      if (window.Desmos && calculatorRef.current) {
        calculatorInstance.current = (window.Desmos as any).Calculator3D(calculatorRef.current, {
          expressions: false,
          settingsMenu: false,
          zoomButtons: false,
          expressionsCollapsed: true,
          autosize: true,
          showZAxis: true
        });

        // Apply 3D graph settings
        const graphSettings = {
          viewport: {
            xmin: -5,
            ymin: -5,
            zmin: -5,
            xmax: 5,
            ymax: 5,
            zmax: 5
          },
          backgroundColor: "#FFFFFF",
          translucentSurfaces: true,
          threeDMode: true,
          showGrid: false,
          showXAxis: false,
          showYAxis: false,
          showAxis3D: false,
          showAxisLabels3D: false,
          expressionsCollapsed: true,
          worldRotation3D: [
            -0.6360389936275824,
            -0.716086684523776,
            -0.2875313180037111,
            0.6525095142378109,
            -0.698011361116522,
            0.29497707297583436,
            -0.4119292808411922,
            5.039637986926923e-16,
            0.911215818335948
          ],
          axis3D: [
            -0.7160866845256874,
            -0.6980113611185002,
            2.5871827421438157e-14
          ]
        };

        try {
          calculatorInstance.current.setGraphSettings(graphSettings);
        } catch (error) {
          console.error('Error applying graph settings:', error);
        }

        // Load expressions
        if (expressions.length > 0) {
          expressions.forEach((expr, index) => {
            try {
              calculatorInstance.current.setExpression(expr);
            } catch (error) {
              console.error(`Error adding expression ${index + 1}:`, error);
            }
          });

          // Resize after loading expressions
          setTimeout(() => {
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
'use client'

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className = "" }: ButtonProps) {
  return (
    <button 
      className={`px-12 py-4 text-xl font-normal ${className}`}
      style={{
        fontFamily: 'var(--font-libre-franklin)',
        backgroundColor: 'transparent',
        color: '#6B6A9E',
        border: '2px solid #6B6A9E',
        borderRadius: '0px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 12px rgba(107, 106, 158, 0.2)'
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#6B6A9E';
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.borderColor = '#6B6A9E';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(107, 106, 158, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#6B6A9E';
        e.currentTarget.style.borderColor = '#6B6A9E';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(107, 106, 158, 0.2)';
      }}
    >
      {children}
    </button>
  );
}
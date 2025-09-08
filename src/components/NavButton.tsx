'use client'

interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function NavButton({ onClick, children }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 text-xs"
      style={{
        fontFamily: 'var(--font-libre-franklin)',
        backgroundColor: 'transparent',
        color: '#6B6A9E',
        border: '1px solid #6B6A9E',
        borderRadius: '0px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 12px rgba(107, 106, 158, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#6B6A9E';
        e.currentTarget.style.color = '#F5F5F5';
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
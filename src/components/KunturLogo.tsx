interface KunturLogoProps {
  className?: string;
}

const KunturLogo = ({ className = "" }: KunturLogoProps) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <svg 
        width="80" 
        height="48" 
        viewBox="0 0 120 72" 
        fill="none" 
        className="text-foreground"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Elegant kuntur silhouette with thin lines */}
        <path 
          d="M60 12 C45 8, 25 15, 8 28 C15 25, 25 22, 35 25 C25 30, 15 38, 10 48 C20 42, 35 38, 50 42 C55 45, 58 50, 60 55 C62 50, 65 45, 70 42 C85 38, 100 42, 110 48 C105 38, 95 30, 85 25 C95 22, 105 25, 112 28 C95 15, 75 8, 60 12 Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Wing details */}
        <path 
          d="M35 25 C30 35, 25 42, 20 45" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round"
        />
        <path 
          d="M85 25 C90 35, 95 42, 100 45" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round"
        />
        {/* Body line */}
        <path 
          d="M60 15 L60 50" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round"
        />
      </svg>
      <span className="text-3xl font-light tracking-[0.2em] text-foreground">KUNTUR</span>
    </div>
  );
};

export default KunturLogo;
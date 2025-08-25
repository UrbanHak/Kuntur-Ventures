import condorImage from "@/assets/condor-logo.png";

interface CondorLogoProps {
  className?: string;
}

const CondorLogo = ({ className = "" }: CondorLogoProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img 
        src={condorImage} 
        alt="Condor Logo" 
        className="h-16 w-auto filter brightness-0 invert"
      />
      <span className="text-2xl font-bold tracking-wider">CONDOR</span>
    </div>
  );
};

export default CondorLogo;
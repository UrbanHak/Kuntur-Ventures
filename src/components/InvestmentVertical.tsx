interface InvestmentVerticalProps {
  title: string;
  description: string;
  color: string;
  index: number;
  useWhiteLine?: boolean;
}

const InvestmentVertical = ({ title, description, color, index, useWhiteLine = false }: InvestmentVerticalProps) => {
  return (
    <div className="flex items-start gap-6 group">
      <div className={`w-1 h-16 ${useWhiteLine ? 'bg-white' : color} flex-shrink-0 mt-1`}></div>
      <div className="flex-1">
        <h3 className="text-xl font-light text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InvestmentVertical;
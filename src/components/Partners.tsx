import ldaCapitalLogo from "@/assets/partners/lda-capital-logo.png";
import kpmgLogo from "@/assets/partners/kpmg-logo.png";
import ftcLogo from "@/assets/partners/ftc-logo.avif";
import rayoLogo from "@/assets/partners/rayo-logo.jpg";
import bitbaselLogo from "@/assets/partners/bitbasel-logo.jpg";
import refidaoLogo from "@/assets/partners/refidao-logo.png";
import ethereumAllianceLogo from "@/assets/partners/ethereum-alliance-logo.jpg";
import anchorageDigitalLogo from "@/assets/partners/anchorage-digital-logo.png";
import womenInTechColombiaLogo from "@/assets/partners/women-in-tech-colombia.jpg";

const Partners = () => {
  const partners = [
    {
      name: "LDA Capital",
      logo: ldaCapitalLogo,
      alt: "LDA Capital logo"
    },
    {
      name: "KPMG",
      logo: kpmgLogo,
      alt: "KPMG logo"
    },
    {
      name: "FTC",
      logo: ftcLogo,
      alt: "FTC logo"
    },
    {
      name: "Rayo",
      logo: rayoLogo,
      alt: "Rayo logo"
    },
    {
      name: "BitBasel",
      logo: bitbaselLogo,
      alt: "BitBasel logo"
    },
    {
      name: "ReFi DAO",
      logo: refidaoLogo,
      alt: "ReFi DAO logo"
    },
    {
      name: "Enterprise Ethereum Alliance",
      logo: ethereumAllianceLogo,
      alt: "Enterprise Ethereum Alliance logo"
    },
    {
      name: "Anchorage Digital",
      logo: anchorageDigitalLogo,
      alt: "Anchorage Digital logo"
    },
    {
      name: "Women in Tech Colombia",
      logo: womenInTechColombiaLogo,
      alt: "Women in Tech Colombia logo"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 tracking-tight">
          Our Strategic Partners
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent w-20 mx-auto mb-6"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-4xl mx-auto">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-center ${
              index === partners.length - 1 && partners.length % 3 !== 0 
                ? 'md:col-start-2' 
                : ''
            }`}
          >
            <img
              src={partner.logo}
              alt={partner.alt}
              className={`object-contain rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300 p-4 ${
                partner.name === "Anchorage Digital"
                  ? "h-48 w-48"
                  : partner.name === "Women in Tech Colombia"
                  ? "h-32 w-32"
                  : "h-40 w-40"
              } ${
                partner.name === "Rayo" || partner.name === "Anchorage Digital"
                  ? "bg-white" 
                  : partner.name === "Women in Tech Colombia"
                  ? "bg-[#1d1dc8]"
                  : "bg-gradient-to-br from-muted/20 to-muted/10"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
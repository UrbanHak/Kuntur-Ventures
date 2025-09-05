import bitbaselLogo from "@/assets/partners/bitbasel-white.png";
import ldaCapitalLogo from "@/assets/partners/lda-capital-white.png";
import coinfundLogo from "@/assets/partners/coinfund-white.png";
import kpmgLogo from "@/assets/partners/kpmg-white.png";
import crackedLabsLogo from "@/assets/partners/cracked-labs-white.png";

const Partners = () => {
  const partners = [
    {
      name: "BitBasel",
      logo: bitbaselLogo,
      url: "https://www.bitbasel.miami/"
    },
    {
      name: "LDA Capital",
      logo: ldaCapitalLogo,
      url: "https://ldacap.com/"
    },
    {
      name: "CoinFund",
      logo: coinfundLogo,
      url: "https://coinfund.io/"
    },
    {
      name: "KPMG",
      logo: kpmgLogo,
      url: "https://kpmg.com/"
    },
    {
      name: "Cracked Labs",
      logo: crackedLabsLogo,
      url: "https://crackedlabs.org/"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 tracking-tight">
          Our Strategic Partners
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent w-20 mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm">
          Collaborating with leading organizations to accelerate Web3 innovation across Latinamerica, Andean and Caribbean regions
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all duration-300 hover:scale-105 opacity-70 hover:opacity-100"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-12 md:h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
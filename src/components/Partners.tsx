import ldaCapitalLogo from "@/assets/partners/lda-capital-logo.png";
import kpmgLogo from "@/assets/partners/kpmg-logo.png";
import ftcLogo from "@/assets/partners/ftc-logo.avif";
import rayoLogo from "@/assets/partners/rayo-logo.png";

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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center max-w-4xl mx-auto">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={partner.logo}
              alt={partner.alt}
              className="h-40 w-40 object-contain rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300 p-4 bg-gradient-to-br from-muted/20 to-muted/10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
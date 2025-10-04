import { useState } from "react";
import InvestmentVertical from "@/components/InvestmentVertical";
import SignupForm from "@/components/SignupForm";
import Partners from "@/components/Partners";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const objectives = [
    {
      title: "Sign the Pledge",
      description: "Join our one-page pledge commitment to invest up to $1 Billion USD into Latinamerica, Andean and Caribbean regions over the next 5 years. Support the Kuntur Initiative and its momentum to empower Latinamerica's talent pool and resources from the Web3 and Industry 4.0 sectors.",
      color: "bg-tge-blue"
    },
    {
      title: "TGE Acceleration Program",
      description: "TGE Acceleration program located in Colombia for latinamerican scaleups ready to launch their tokens and scale across the region with strategic partnerships and institutional backing.",
      color: "bg-edtech-yellow"
    },
    {
      title: "Ecosystem Mapping & Tracking",
      description: "Comprehensive mapping of startups, support systems, incubators, accelerators as well as Venture Capital investment across Latinamerica, Andean and Caribbean region to identify opportunities and track progress toward our $1B commitment goal.",
      color: "bg-refi-green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 relative">
      {/* DRAFT Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 overflow-hidden">
        <div className="text-[20vw] font-bold text-muted-foreground/10 rotate-[-45deg] select-none tracking-widest">
          DRAFT
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
        </header>

        {!showForm ? (
          <>
            {/* Main Content */}
            <main className="max-w-5xl mx-auto text-center mb-16">
              <div className="mb-12">
                <h1 className="text-5xl md:text-8xl font-light text-foreground mb-6 tracking-tight leading-none">
                  <span className="text-6xl md:text-9xl font-bold tracking-wider">222 ETH</span>
                  <br />
                  <span className="text-sm md:text-lg font-light tracking-wide text-muted-foreground">$1.000.000.000 USD</span>
                  <br />
                  <span className="text-4xl md:text-6xl font-extralight tracking-[0.15em]">COMMITMENT</span>
                </h1>
                
                <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent w-32 mx-auto mb-8"></div>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                  <span className="text-foreground font-normal">ACCELERATING</span>
                  <br />
                  <span className="text-foreground font-normal">LATINAMERICA, ANDEAN AND CARIBBEAN TECH ECOSYSTEMS</span>
                  <br />
                  <span className="text-sm md:text-base tracking-[0.2em] mt-2 block">PRESENTED BY JORGE CORTES</span>
                </p>
              </div>

              {/* Phase 1 Objectives */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
                {objectives.map((objective, index) => (
                  <InvestmentVertical
                    key={index}
                    title={objective.title}
                    description={objective.description}
                    color={objective.color}
                    index={index}
                    useWhiteLine={true}
                  />
                ))}
              </div>

              {/* Focus Areas */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
                    Areas of Focus
                  </h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent w-24 mx-auto mb-6"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  <InvestmentVertical
                    title="Human Capital"
                    description="A network of mentors, executives and investors looking to positively impact the quality of life for 8 billion people around the world by addressing challenges directly into Latinamerica's talent and its biodiversity."
                    color="bg-edtech-yellow"
                    index={0}
                    useWhiteLine={true}
                  />
                  <InvestmentVertical
                    title="Education, Financial Inclusion and Decentralized Finance"
                    description="Empowering financial access and educational opportunities through decentralized technologies and innovative economic models."
                    color="bg-tge-blue"
                    index={1}
                  />
                  <InvestmentVertical
                    title="Regenerative Economies and Environmental Sustainability"
                    description="Supporting environmental restoration and sustainable development through blockchain-based regenerative finance solutions."
                    color="bg-refi-green"
                    index={2}
                  />
                  <InvestmentVertical
                    title="Art, Culture and Creators Economy"
                    description="Fostering creative expression and cultural preservation through NFTs, DAOs, and creator-focused blockchain platforms."
                    color="bg-culture-purple"
                    index={3}
                  />
                  <InvestmentVertical
                    title="Industry 4.0 Innovations For Public Goods"
                    description="Advancing manufacturing, IoT, and industrial automation technologies that serve the public interest and community benefit."
                    color="bg-industry-red"
                    index={4}
                  />
                  <InvestmentVertical
                    title="Decentralized Telecommunications and Aerospace"
                    description="Building decentralized communication networks and aerospace innovations that enhance connectivity across the region."
                    color="bg-telecom-yellow"
                    index={5}
                  />
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mb-16">
                <Button 
                  onClick={() => setShowForm(true)}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-light tracking-wide"
                >
                  One Click Pledge
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Join Kuntur Ventures' initiative for Latinamerica, Andean and Caribbean tech ecosystems growth
                </p>
              </div>

              {/* Partners Section */}
              <Partners />
            </main>
          </>
        ) : (
          <>
            {/* Back Button */}
            <div className="mb-8">
              <Button 
                onClick={() => setShowForm(false)}
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground"
              >
                ← Back to Overview
              </Button>
            </div>
            
            {/* Signup Form */}
            <SignupForm />
          </>
        )}

        {/* Footer */}
        <footer className="text-center pt-16 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Presented by Jorge Cortes | Kuntur Ventures Initiative @2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
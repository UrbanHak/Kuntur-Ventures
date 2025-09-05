import { useState } from "react";
import InvestmentVertical from "@/components/InvestmentVertical";
import SignupForm from "@/components/SignupForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const objectives = [
    {
      title: "Sign the Pledge",
      description: "Join our one-page commitment document for the public good of Latinamerica, Andean and Caribbean regions. Support Condor Ventures' movement building toward Web3 ecosystem growth.",
      color: "bg-tge-blue"
    },
    {
      title: "Colombia Acceleration Program",
      description: "Pre-TGE acceleration for Colombian scaleups and SMEs in Web3 and Industry 4.0. Colombia serves as our strategic starting point for regional expansion.",
      color: "bg-edtech-yellow"
    },
    {
      title: "Ecosystem Mapping & Tracking",
      description: "Comprehensive mapping of startups, incubators, and accelerators across Latinamerica, Andean and Caribbean regions. Building intelligence to track and achieve our $1B investment goal.",
      color: "bg-refi-green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
        </header>

        {!showForm ? (
          <>
            {/* Main Content */}
            <main className="max-w-5xl mx-auto text-center mb-16">
              <div className="mb-12">
                <h1 className="text-5xl md:text-8xl font-light text-foreground mb-6 tracking-tight leading-none">
                  <span className="text-6xl md:text-9xl font-bold tracking-wider">$1B</span>
                  <br />
                  <span className="text-4xl md:text-6xl font-extralight tracking-[0.15em]">COMMITMENT</span>
                </h1>
                
                <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent w-32 mx-auto mb-8"></div>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                  <span className="text-foreground font-normal">ACCELERATING</span>
                  <br />
                  <span className="text-foreground font-normal">LATINAMERICA, ANDEAN AND CARIBBEAN TECH ECOSYSTEMS</span>
                  <br />
                  <span className="text-sm md:text-base tracking-[0.2em] mt-2 block">PRESENTED BY CONDOR VENTURES</span>
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
                  <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    Strategic investment verticals driving Web3 innovation across Latinamerica, Andean and Caribbean tech ecosystems
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  <InvestmentVertical
                    title="Education, Financial Inclusion, Economic Stability and Decentralized Finance"
                    description="Empowering financial access and educational opportunities through decentralized technologies and innovative economic models."
                    color="bg-tge-blue"
                    index={0}
                  />
                  <InvestmentVertical
                    title="Regenerative Economies and Environmental Sustainability"
                    description="Supporting environmental restoration and sustainable development through blockchain-based regenerative finance solutions."
                    color="bg-refi-green"
                    index={1}
                  />
                  <InvestmentVertical
                    title="Art, Culture and Creators Economy"
                    description="Fostering creative expression and cultural preservation through NFTs, DAOs, and creator-focused blockchain platforms."
                    color="bg-culture-purple"
                    index={2}
                  />
                  <InvestmentVertical
                    title="Industry 4.0 Innovations For Public Goods"
                    description="Advancing manufacturing, IoT, and industrial automation technologies that serve the public interest and community benefit."
                    color="bg-industry-red"
                    index={3}
                  />
                  <InvestmentVertical
                    title="Decentralized Telecommunications and Aerospace"
                    description="Building decentralized communication networks and aerospace innovations that enhance connectivity across the region."
                    color="bg-telecom-yellow"
                    index={4}
                  />
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Button 
                  onClick={() => setShowForm(true)}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-light tracking-wide"
                >
                  One Click Pledge
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Join Condor Ventures' initiative for Latinamerica, Andean and Caribbean tech ecosystems growth
                </p>
              </div>
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
            Condor Ventures Initiative © 2024
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
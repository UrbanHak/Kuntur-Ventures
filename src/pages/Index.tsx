import { useState } from "react";
import InvestmentVertical from "@/components/InvestmentVertical";
import SignupForm from "@/components/SignupForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const verticals = [
    {
      title: "Acceleration of projects in TGE phase",
      description: "Supporting promising Web3 projects approaching Token Generation Events with strategic investment and guidance.",
      color: "bg-tge-blue"
    },
    {
      title: "Education and transfer of knowledge Web3 EdTech", 
      description: "Fostering blockchain education and knowledge transfer through innovative educational technology platforms.",
      color: "bg-edtech-yellow"
    },
    {
      title: "Regeneration ReFi",
      description: "Investing in regenerative finance solutions that create positive environmental and social impact.",
      color: "bg-refi-green"
    },
    {
      title: "Financial Inclusion DeFi",
      description: "Democratizing financial services through decentralized finance solutions for underserved communities.",
      color: "bg-defi-red"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-lg font-light tracking-[0.3em] text-muted-foreground">CONDOR VENTURES</h2>
          </div>
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
                  <span className="text-foreground font-normal">INTO LATAM AND THE CARIBBEAN</span>
                  <br />
                  <span className="text-sm md:text-base tracking-[0.2em] mt-2 block">FROM THE WEB3 SECTOR</span>
                </p>
              </div>

              {/* Investment Verticals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 text-left">
                {verticals.map((vertical, index) => (
                  <InvestmentVertical
                    key={index}
                    title={vertical.title}
                    description={vertical.description}
                    color={vertical.color}
                    index={index}
                  />
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Button 
                  onClick={() => setShowForm(true)}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-light tracking-wide"
                >
                  Join the Commitment
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  For executives, enterprises, investors and investment firms
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
            Condor Investment Commitment © 2024
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
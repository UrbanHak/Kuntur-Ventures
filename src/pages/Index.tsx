import { useState } from "react";
import CondorLogo from "@/components/CondorLogo";
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
          <CondorLogo className="justify-center mb-8" />
        </header>

        {!showForm ? (
          <>
            {/* Main Content */}
            <main className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                $1 BILLION
                <br />
                <span className="text-5xl md:text-6xl font-light">COMMITMENT</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
                TO INVEST IN LATIN AMERICA
                <br />
                AND THE CARIBBEAN
                <br />
                IN TECH AND WEB3
              </p>

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
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
      description: "Join our commitment to invest up to $1 Billion USD into Latinamerica over the next 5 years. Support the LDA Capital Initiative to empower Latinamerica's talent pool from the Web3 and Industry 4.0 sectors.",
      color: "bg-tge-blue"
    },
    {
      title: "TGE Acceleration Program",
      description: "TGE Acceleration program located in Colombia for latinamerican startups ready for TGE and scaling across the region with strategic partnerships and institutional backing.",
      color: "bg-edtech-yellow"
    },
    {
      title: "Ecosystem Mapping & Tracking",
      description: "Comprehensive mapping of the ecosystem at large. Identifying support systems, incubators, accelerators as well tracking Venture Capital and investment towards our $1 Billion USD commitment goal.",
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
                <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 tracking-tight leading-relaxed">
                  <span className="text-5xl md:text-7xl font-semibold tracking-wide">$1 Billion USD</span>
                  <br />
                  <span className="text-3xl md:text-5xl font-light tracking-wide">Investment Initiative</span>
                </h1>
                
                <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent w-32 mx-auto mb-8"></div>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                  <span className="text-foreground font-normal">ACCELERATING</span>
                  <br />
                  <span className="text-foreground font-normal">LATINAMERICA, ANDEAN AND CARIBBEAN TECH ECOSYSTEMS</span>
                  <br />
                  <span className="text-sm md:text-base tracking-[0.2em] mt-2 block">Presented by LDA Capital</span>
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
                    description="A network of mentors, executives and investors looking to positively impact the quality of life for 8 billion people around the world by addressing challenges directly into Latinamerica's talent pool and bio-diversity."
                    color="bg-edtech-yellow"
                    index={0}
                    useWhiteLine={true}
                  />
                  <InvestmentVertical
                    title="Education, Financial Inclusion & Decentralized Finance"
                    description="Empowering financial literacy, access and educational opportunities for decentralized finance, financial technologies, tokenomics, cross-chain payments and TGE."
                    color="bg-tge-blue"
                    index={1}
                  />
                  <InvestmentVertical
                    title="Regenerative Economies & Environmental Sustainability"
                    description="Supporting environmental restoration and sustainable development through blockchain-based regenerative finance solutions. Advocating for Real World Natural Assets."
                    color="bg-refi-green"
                    index={2}
                  />
                  <InvestmentVertical
                    title="Art, Culture & Creators Economy"
                    description="Fostering creative expressions and cultural preservation through Proof of Provenance Protocols. NFTs, DAO formations and creator-focused blockchain platforms."
                    color="bg-culture-purple"
                    index={3}
                  />
                  <InvestmentVertical
                    title="Industry 4.0 & Decentralized Science for Public Goods"
                    description="AI, Quantum Computing, Advanced Manufacturing, IoT and DePIN For Public Goods. Solving for privacy, inequality, public health or bio-technology."
                    color="bg-industry-red"
                    index={4}
                  />
                  <InvestmentVertical
                    title="Decentralized Telecom & Aerospace"
                    description="Building censorship-resistant systems and decentralized networks of telecommunications. Accelerating open-source space exploration while protecting data from third parties or government surveillance."
                    color="bg-telecom-yellow"
                    index={5}
                  />
                </div>
              </div>

              {/* Kuntur Accelerator Program */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
                    Kuntur Accelerator Program
                  </h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent w-24 mx-auto mb-6"></div>
                </div>
                
                {/* Cultural Story */}
                <div className="max-w-3xl mx-auto mb-8">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
                    <h3 className="text-2xl font-light text-foreground mb-4 text-center tracking-wide">The Spirit of the Kuntur</h3>
                    <p className="text-muted-foreground text-base mb-4 text-center leading-relaxed">
                      <span className="text-foreground font-semibold italic">"Kuntur"</span> — Condor of the Andes in Quechua, the ancient language of the Andean people.
                    </p>
                    <p className="text-muted-foreground text-sm text-center leading-relaxed">
                      The condor soars above the highest peaks of Latinamerica, symbolizing vision, freedom, and connection between earth and sky. 
                      By naming our program Kuntur, we honor the rich indigenous heritage, cultural wisdom, and natural biodiversity that defines our region. 
                      Like the condor, we seek to elevate Latinamerican innovation to new heights.
                    </p>
                  </div>
                </div>
                
                {/* Program Details */}
                <div className="max-w-4xl mx-auto mb-12">
                  <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-10 shadow-lg">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-2xl"></div>
                    
                    <h3 className="text-3xl font-light text-foreground mb-10 text-center tracking-wide">Program Overview</h3>
                    
                    <div className="space-y-8">
                      <div className="group relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300">
                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20"></div>
                        <div className="space-y-2">
                          <p className="text-foreground font-semibold text-lg tracking-wide">Program Start</p>
                          <p className="text-muted-foreground">Q1 2026</p>
                        </div>
                      </div>
                      
                      <div className="group relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300">
                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20"></div>
                        <div className="space-y-2">
                          <p className="text-foreground font-semibold text-lg tracking-wide">Duration & Location</p>
                          <p className="text-muted-foreground">4 months program in Colombia</p>
                        </div>
                      </div>
                      
                      <div className="group relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300">
                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20"></div>
                        <div className="space-y-2">
                          <p className="text-foreground font-semibold text-lg tracking-wide">Curriculum Focus</p>
                          <p className="text-muted-foreground leading-relaxed">Capital Markets, DeFi, RWA & Digital Asset Management, Tokenomics, Growth Strategies and TGE</p>
                        </div>
                      </div>
                      
                      <div className="group relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300">
                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20"></div>
                        <div className="space-y-2">
                          <p className="text-foreground font-semibold text-lg tracking-wide">First Cohort & Investment</p>
                          <p className="text-muted-foreground leading-relaxed">5 Companies across Education, Regeneration, Creator's Economy, Public Goods, and Space Economy. Each company receives $20,000 USD investment.</p>
                        </div>
                      </div>
                      
                      <div className="group relative pl-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300">
                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20"></div>
                        <div className="space-y-2">
                          <p className="text-foreground font-semibold text-lg tracking-wide">Mentor Network & Human Capital</p>
                          <p className="text-muted-foreground leading-relaxed">Access to a network of experienced mentors, company builders, and growth experts aligned with our Human Capital area of focus, providing strategic guidance and hands-on support throughout the program.</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  Join LDA Capital Initiative for the growth of Latinamerica Web3 and Industry 4.0 ecosystems.
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
            Presented by Jorge Cortes | LDA Capital Initiative @2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
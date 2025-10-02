import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please read and agree to the pledge commitment terms to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Pledge Commitment Confirmed",
      description: "Thank you for your commitment to accelerating Latinamerica, Andean and Caribbean tech ecosystems. You are now part of the Kuntur Ventures $1B initiative.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Pledge Header */}
      <Card className="bg-card border-border">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl md:text-4xl font-light text-foreground mb-4">
            $1B Commitment Pledge
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A formal commitment to accelerating Latinamerica, Andean and Caribbean tech ecosystems presented by Jorge Cortes
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Pledge Terms */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-xl font-medium text-foreground">Commitment Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p className="mb-4">By signing this pledge, I commit to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Supporting the growth and development of Web3 and Industry 4.0 technologies across Latinamerica, Andean and Caribbean regions</li>
              <li>Contributing to the ecosystem mapping and intelligence gathering efforts to achieve the $1B investment goal</li>
              <li>Advocating for public good initiatives that benefit regional tech ecosystems</li>
              <li>Participating in knowledge sharing and collaboration within the Kuntur Ventures network</li>
              <li>Promoting sustainable and regenerative economic models in technology development</li>
              <li>Fostering Human Capital development by empowering a network of mentors, executives, and investors dedicated to positively impacting the quality of life for communities worldwide, while directly addressing challenges and opportunities within Latinamerica's exceptional talent pool and rich biodiversity</li>
            </ul>
            <p className="mt-4 text-sm">
              This pledge represents a serious commitment to regional tech ecosystem development and will be publicly recognized as part of the Kuntur Ventures initiative.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Signatory Information */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-xl font-medium text-foreground">Signatory Information</CardTitle>
          <CardDescription>
            Please provide your details for the official pledge record
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground font-medium">First Name *</Label>
                <Input id="firstName" required className="bg-input border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground font-medium">Last Name *</Label>
                <Input id="lastName" required className="bg-input border-border" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
              <Input id="email" type="email" required className="bg-input border-border" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="text-foreground font-medium">Organization / Company</Label>
              <Input id="organization" placeholder="Optional" className="bg-input border-border" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-foreground font-medium">Your Role</Label>
              <Select>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="founder">Founder / CEO</SelectItem>
                  <SelectItem value="investor">Investor / VC</SelectItem>
                  <SelectItem value="developer">Developer / Engineer</SelectItem>
                  <SelectItem value="researcher">Researcher / Academic</SelectItem>
                  <SelectItem value="government">Government / Policy</SelectItem>
                  <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                  <SelectItem value="consultant">Consultant / Advisor</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Formal Agreement */}
            <div className="border border-border rounded-lg p-4 bg-muted/30">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="agreement" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  className="mt-1"
                />
                <div className="space-y-2">
                  <Label htmlFor="agreement" className="text-sm font-medium text-foreground cursor-pointer">
                    I formally agree to the commitment terms outlined above *
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    By checking this box, I understand this is a serious commitment to supporting Latinamerica, Andean and Caribbean tech ecosystems presented by Jorge Cortes.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-medium"
              disabled={isSubmitting || !agreedToTerms}
            >
              {isSubmitting ? "Processing Commitment..." : "Sign Official Pledge"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;
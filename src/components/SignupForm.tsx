import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted",
      description: "We'll be in touch soon regarding your participation in the Condor commitment.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card border-border">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-light">Join the Commitment</CardTitle>
        <CardDescription className="text-muted-foreground">
          Apply to participate in the $1 Billion investment commitment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" required className="bg-input border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" required className="bg-input border-border" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required className="bg-input border-border" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" required className="bg-input border-border" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select>
              <SelectTrigger className="bg-input border-border">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="executive">Executive</SelectItem>
                <SelectItem value="investor">Investor</SelectItem>
                <SelectItem value="fund-manager">Fund Manager</SelectItem>
                <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interest">Primary Interest Area</Label>
            <Select>
              <SelectTrigger className="bg-input border-border">
                <SelectValue placeholder="Select investment vertical" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tge">TGE Phase Acceleration</SelectItem>
                <SelectItem value="edtech">Web3 EdTech</SelectItem>
                <SelectItem value="refi">Regeneration ReFi</SelectItem>
                <SelectItem value="defi">Financial Inclusion DeFi</SelectItem>
                <SelectItem value="multiple">Multiple Areas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Apply Now"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignupForm;
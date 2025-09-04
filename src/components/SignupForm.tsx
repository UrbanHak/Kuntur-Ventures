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
      title: "Pledge Submitted",
      description: "Thank you for joining the Condor Ventures foundation initiative. Together we're building the future of LATAM Web3.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card border-border">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-light">One Click Pledge</CardTitle>
        <CardDescription className="text-muted-foreground">
          Sign our commitment document for the public good of Latinamerica and the Caribbean
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
          
          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Pledge"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignupForm;
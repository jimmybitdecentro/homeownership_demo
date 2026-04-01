import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-navy text-hero-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make Your Texas Dream Home a Reality?
        </h2>
        <p className="text-hero-muted mb-8 max-w-xl mx-auto">
          Let's discuss your mortgage options and find the perfect solution for your needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-gold-light gap-2">
            <a href="https://apply.barrettfinancial.com/apply/austindellabate">
              Start Your Application <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-hero-muted text-hero-foreground hover:bg-hero-foreground/10 gap-2">
            <a href="tel:512-825-7007">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

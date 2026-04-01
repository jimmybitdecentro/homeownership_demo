import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              22 years of Excellence
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6">
              Your Path to{" "}
              <span className="text-gold">Homeownership</span>{" "}
              Starts Here
            </h1>

            <p className="text-hero-muted text-lg leading-relaxed mb-8 max-w-xl">
              With 22 years of high-performance lending experience, I'm a Texas-born powerhouse in both residential and commercial mortgage strategy—delivering results where others deliver excuses.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-gold-light gap-2">
                <a href="https://apply.barrettfinancial.com/apply/austindellabate">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-hero-muted text-hero-foreground hover:bg-hero-foreground/10">
                <a href="#cta">Contact Me</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-2xl shadow-2xl p-8 text-center max-w-sm mx-auto lg:ml-auto"
          >
            <img
              src={profilePhoto}
              alt="Austin Dell'Abate"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-muted"
              width={512}
              height={512}
            />
            <h3 className="text-xl font-bold text-card-foreground">Austin Dell'Abate</h3>
            <p className="text-muted-foreground text-sm mt-1">Producing Branch Manager</p>
            <p className="text-muted-foreground text-xs mt-1">Gavin Lending Powered by Barrett Financial LLC</p>
            <p className="text-xs text-muted-foreground mt-3 font-medium">NMLS #184155</p>

            <div className="mt-5 space-y-3">
              <a href="tel:512-825-7007" className="flex items-center justify-center gap-2 text-sm text-card-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> 512-825-7007
              </a>
              <a href="mailto:Austind@barrettfinancial.com" className="flex items-center justify-center gap-2 text-sm text-card-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> Austind@barrettfinancial.com
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">Proud Member</p>
              <span className="inline-flex items-center gap-1 mt-1 text-sm font-semibold text-destructive">
                ❤️ Homes for Heroes
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

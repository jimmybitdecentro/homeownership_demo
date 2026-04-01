import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Loan Programs", href: "#services" },
  { label: "Resources", href: "#heroes" },
  { label: "Contact", href: "#cta" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div>
          <span className="text-lg font-heading font-bold text-foreground">Austin Dell'Abate</span>
          <p className="text-xs text-muted-foreground">Gavin Lending | NMLS #184155</p>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:512-825-7007" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="w-4 h-4" />
            512-825-7007
          </a>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-gold-light">
            <a href="https://apply.barrettfinancial.com/apply/austindellabate">Apply Now</a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-2 w-full bg-primary text-primary-foreground">
            <a href="https://apply.barrettfinancial.com/apply/austindellabate">Apply Now</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

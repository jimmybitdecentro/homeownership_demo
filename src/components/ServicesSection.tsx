import { motion } from "framer-motion";
import { Home, RefreshCw, Building2, Shield, FileCheck, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Lending",
    desc: "Expert guidance for purchasing your dream home with competitive rates and personalized service.",
    items: ["First-time homebuyer programs", "Conventional loans", "Jumbo loans", "Quick pre-approval process"],
  },
  {
    icon: RefreshCw,
    title: "Refinancing Solutions",
    desc: "Lower your monthly payments, reduce interest rates, or access your home's equity.",
    items: ["Rate and term refinancing", "Cash-out refinancing", "Streamline refinancing", "No-cost refinance options"],
  },
  {
    icon: Building2,
    title: "Commercial Lending",
    desc: "Comprehensive commercial mortgage solutions for investors and business owners.",
    items: ["Multi-family properties", "Commercial real estate", "Investment properties", "Flexible terms available"],
  },
  {
    icon: Shield,
    title: "VA Loans",
    desc: "Exclusive benefits for military heroes with zero down payment options and competitive rates.",
    items: ["Zero down payment", "No PMI required", "Competitive interest rates", "Flexible credit requirements"],
  },
  {
    icon: FileCheck,
    title: "FHA Loans",
    desc: "Accessible homeownership with low down payment options backed by the Federal Housing Administration.",
    items: ["Low down payment (3.5%)", "Flexible credit scores", "Gift funds allowed", "Government-backed security"],
  },
  {
    icon: TrendingUp,
    title: "Investment Properties",
    desc: "Build your real estate portfolio with specialized financing for investment and rental properties.",
    items: ["Single and multi-family", "Portfolio loans", "Cash-out options", "Expert investment advice"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Texas Mortgage Solutions</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Expert guidance for every step of your mortgage journey, from first-time homebuyers to seasoned investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svc.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{svc.desc}</p>
              <ul className="space-y-2">
                {svc.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

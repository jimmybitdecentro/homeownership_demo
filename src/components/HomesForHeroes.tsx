import { motion } from "framer-motion";
import { Shield, Flame, BadgeCheck, HeartPulse, GraduationCap, Siren } from "lucide-react";
import happyHomeowners from "@/assets/happy-homeowners.jpg";

const heroes = [
  { icon: Shield, label: "Military & Veterans" },
  { icon: Flame, label: "Firefighters" },
  { icon: BadgeCheck, label: "Law Enforcement" },
  { icon: HeartPulse, label: "Healthcare Workers" },
  { icon: GraduationCap, label: "Teachers" },
  { icon: Siren, label: "EMS/Paramedics" },
];

const HomesForHeroes = () => {
  return (
    <section id="heroes" className="py-20 bg-navy text-hero-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gold bg-gold/15 px-4 py-1.5 rounded-full mb-4">
            ❤️ Homes for Heroes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Serving Those Who Serve</h2>
          <p className="text-hero-muted mt-3 max-w-2xl mx-auto">
            As a proud Homes for Heroes affiliate, I'm committed to giving back to the heroes who protect and serve our communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {heroes.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-navy-light rounded-xl p-4 text-center"
                >
                  <h.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-xs font-medium text-hero-muted">{h.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gold/15 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-gold">Save $3,000+</p>
              <p className="text-sm text-hero-muted mt-1">on Average when buying or selling your home through the Homes for Heroes program.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={happyHomeowners}
              alt="Happy homeowners"
              className="rounded-2xl shadow-xl w-full object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
            <div className="mt-4 bg-navy-light rounded-xl p-4 text-center">
              <p className="text-sm font-semibold text-hero-foreground">Hero Benefits Include:</p>
              <p className="text-xs text-hero-muted mt-1">Lender Credits • Agent Rebates • Closing Cost Assistance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomesForHeroes;

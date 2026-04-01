import { motion } from "framer-motion";
import { Clock, Zap, Heart, UserCheck } from "lucide-react";

const reasons = [
  { icon: Clock, title: "22+ Years Experience", desc: "Decades of proven success in Texas mortgage lending with deep market expertise." },
  { icon: Zap, title: "Fast Approvals", desc: "Quick pre-approval process with rapid closing times to secure your dream home." },
  { icon: Heart, title: "Homes for Heroes Member", desc: "Dedicated to serving those who serve our community with exclusive benefits." },
  { icon: UserCheck, title: "Personalized Service", desc: "Tailored solutions that fit your unique financial situation and goals." },
];

const WhyChooseMe = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Why Choose Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Path to Homeownership</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We streamline the mortgage process to make buying your Texas home as smooth and stress-free as possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;

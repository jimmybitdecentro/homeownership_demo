import { motion } from "framer-motion";

const stats = [
  { value: "$500M+", label: "Loans Funded" },
  { value: "2,000+", label: "Happy Homeowners" },
  { value: "22", label: "Years Experience" },
  { value: "4.9", label: "Average Rating" },
];

const StatsBar = () => {
  return (
    <section className="relative z-10 -mt-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-stat-bg rounded-xl p-6 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-gold">{stat.value}</p>
              <p className="text-sm text-hero-muted mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    type: "Conventional",
    name: "Sarah & Mike Johnson",
    location: "Austin, TX",
    quote: "Austin made our first home purchase incredibly smooth! His expertise and dedication helped us navigate the process with confidence. We couldn't have asked for a better mortgage professional.",
    time: "2 months ago",
  },
  {
    type: "Commercial",
    name: "Robert Martinez",
    location: "Round Rock, TX",
    quote: "Working with Austin was a game-changer for our investment property purchase. His knowledge of commercial lending and quick turnaround time helped us secure the deal before the competition.",
    time: "3 months ago",
  },
  {
    type: "VA Loan",
    name: "Jennifer Lee",
    location: "Cedar Park, TX",
    quote: "As a veteran, I appreciated Austin's understanding of VA loans. He went above and beyond to ensure I got the best rate and terms. True professional who cares about his clients!",
    time: "1 month ago",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Real Texas Families, Real Results</h2>
          <p className="text-muted-foreground mt-3">Don't just take my word for it. See what my clients have to say.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
            >
              <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                {t.type}
              </span>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.quote}"</p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <span className="text-xs text-muted-foreground">{t.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

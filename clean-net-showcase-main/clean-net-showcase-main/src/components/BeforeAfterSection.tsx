import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import beforeSofa from "@/assets/before-sofa.jpg";
import afterSofa from "@/assets/after-sofa.jpg";
import beforeMattress from "@/assets/before-mattress.jpg";
import afterMattress from "@/assets/after-mattress.jpg";

const comparisons = [
  {
    id: 1,
    title: "Canapé",
    before: beforeSofa,
    after: afterSofa,
  },
  {
    id: 2,
    title: "Matelas",
    before: beforeMattress,
    after: afterMattress,
  },
];

function ComparisonSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="relative group">
      <div
        ref={containerRef}
        className="relative w-full aspect-square rounded-3xl overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After image (background) */}
        <img
          src={after}
          alt={`${title} - Après`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${title} - Avant`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[hsl(0,0%,97%)] shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[hsl(0,0%,97%)] rounded-full shadow-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-[hsl(0,0%,5%)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-[hsl(0,0%,5%,0.7)] backdrop-blur-sm rounded-full text-sm font-medium text-[hsl(0,0%,97%)]">
          Avant
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-[hsl(102,81%,60%,0.9)] backdrop-blur-sm rounded-full text-sm font-medium text-[hsl(0,0%,5%)]">
          Après
        </div>
      </div>
      <p className="text-center mt-4 text-lg font-medium text-foreground">{title}</p>
    </div>
  );
}

export function BeforeAfterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="avant-apres" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[hsl(204,100%,39%,0.05)] to-transparent" />

      <div className="container-tight relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[hsl(204,100%,39%)] bg-[hsl(204,100%,39%,0.1)] rounded-full">
            Résultats
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Avant / Après
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez la transformation spectaculaire de vos textiles 
            grâce à notre expertise professionnelle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              <ComparisonSlider
                before={comparison.before}
                after={comparison.after}
                title={comparison.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

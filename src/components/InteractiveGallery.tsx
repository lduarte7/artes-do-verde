import { useState } from "react";
import { motion } from "framer-motion";

interface GalleryItem {
  tag: string;
  title: string;
  image: string;
}

interface InteractiveGalleryProps {
  items: GalleryItem[];
}

export default function InteractiveGallery({ items }: InteractiveGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <motion.div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={false}
              animate={{
                scale: isHovered ? 1.08 : isOtherHovered ? 0.95 : 1,
                zIndex: isHovered ? 10 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              style={{
                filter: isOtherHovered ? "blur(3px) brightness(0.6)" : "none",
              }}
            >
              {/* Image Container */}
              <div className="absolute inset-0">
                {item.image && (
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    animate={{
                      scale: isHovered ? 1.15 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      duration: 0.4,
                    }}
                  />
                )}
                
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"
                  animate={{
                    opacity: isHovered ? 0.85 : 0.75,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{
                    x: isHovered ? "100%" : "-100%",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-6 z-10">
                <motion.span
                  className="chip text-xs mb-2 bg-white/30 text-white border-white/40 backdrop-blur-md px-3 py-1"
                  animate={{
                    y: isHovered ? 0 : 15,
                    opacity: isHovered ? 1 : 0.7,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {item.tag}
                </motion.span>
                
                <motion.p
                  className="font-display font-semibold text-white text-sm sm:text-base md:text-lg text-center"
                  animate={{
                    y: isHovered ? 0 : 15,
                    opacity: isHovered ? 1 : 0.85,
                  }}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.05,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {item.title}
                </motion.p>
              </div>

              {/* Hover Effect Border with Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-white/50 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  boxShadow: isHovered ? "0 0 20px rgba(255, 255, 255, 0.3)" : "0 0 0px rgba(255, 255, 255, 0)",
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Corner Accents */}
              <motion.div
                className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/50 rounded-tl-xl"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/50 rounded-tr-xl"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


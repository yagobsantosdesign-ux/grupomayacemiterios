import { motion } from "motion/react";

const cemeteries = [
  "Lajeado",
  "Lapa",
  "Campo Grande",
  "Parelheiros",
  "Saudade",
];

export function Partners() {
  const items = [...cemeteries, ...cemeteries, ...cemeteries, ...cemeteries, ...cemeteries, ...cemeteries, ...cemeteries, ...cemeteries, ...cemeteries, ...cemeteries];

  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{
        height: "80px",
      }}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <motion.div
          className="flex items-center whitespace-nowrap"
          style={{ gap: "48px" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 160,
              ease: "linear",
            },
          }}
        >
          {items.map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center" style={{ gap: "48px" }}>
              <span
                className="text-[#b5b5b2] flex-shrink-0"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Cemitério {name}
              </span>
              <span
                className="text-[#C8963E] flex-shrink-0"
                style={{ fontSize: "8px" }}
              >
                ●
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
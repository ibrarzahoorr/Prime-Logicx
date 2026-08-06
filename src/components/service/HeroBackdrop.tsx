"use client";

import { motion } from "framer-motion";
import type { ServiceCategory } from "@/data/services";

const fade = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.2 } } };

function WebDevBackdrop() {
  return (
    <motion.svg initial="hidden" animate="visible" variants={fade} className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
      <defs>
        <pattern id="grid-wd" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#111111" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#grid-wd)" />
      {[
        { d: "M120 90 L60 130 L120 170", x: 90, y: 130 },
        { d: "M1060 420 L1120 460 L1060 500", x: 1090, y: 460 },
      ].map((b, i) => (
        <motion.path
          key={i}
          d={b.d}
          fill="none"
          stroke="#111111"
          strokeOpacity="0.14"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <motion.circle cx="1100" cy="120" r="3" fill="#111111" fillOpacity="0.25" animate={{ opacity: [0.25, 0.6, 0.25] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="90" cy="480" r="4" fill="#111111" fillOpacity="0.2" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />
    </motion.svg>
  );
}

function AiDataBackdrop() {
  const nodes = [
    [140, 100], [260, 60], [340, 160], [180, 220], [80, 180],
    [1040, 480], [1140, 420], [1080, 350], [960, 400], [1000, 500],
  ];
  return (
    <motion.svg initial="hidden" animate="visible" variants={fade} className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
      {nodes.slice(0, 5).flatMap((n, i) =>
        nodes.slice(0, 5).slice(i + 1).map((m, j) => (
          <motion.line
            key={`a-${i}-${j}`}
            x1={n[0]} y1={n[1]} x2={m[0]} y2={m[1]}
            stroke="#111111" strokeOpacity="0.08" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
        ))
      )}
      {nodes.slice(5).flatMap((n, i) =>
        nodes.slice(5).slice(i + 1).map((m, j) => (
          <motion.line
            key={`b-${i}-${j}`}
            x1={n[0]} y1={n[1]} x2={m[0]} y2={m[1]}
            stroke="#111111" strokeOpacity="0.08" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        ))
      )}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n[0]} cy={n[1]} r="4"
          fill="#111111" fillOpacity="0.3"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5 + (i % 3) * 0.5, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </motion.svg>
  );
}

function MarketingBackdrop() {
  return (
    <motion.svg initial="hidden" animate="visible" variants={fade} className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
      <motion.path
        d="M40 500 L220 440 L360 470 L520 320 L680 360 L860 180 L1020 220 L1160 90"
        fill="none" stroke="#111111" strokeOpacity="0.12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      {[[220, 440], [520, 320], [860, 180], [1160, 90]].map((p, i) => (
        <motion.circle
          key={i}
          cx={p[0]} cy={p[1]} r="5"
          fill="#111111" fillOpacity="0.35"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.25, ease: "backOut" }}
        />
      ))}
      <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <path d="M1160 90 L1145 100 M1160 90 L1150 75" stroke="#111111" strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
}

function CloudBackdrop() {
  return (
    <motion.svg initial="hidden" animate="visible" variants={fade} className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
      {[
        { cx: 150, cy: 130, r: 46 },
        { cx: 1080, cy: 460, r: 60 },
      ].map((c, i) => (
        <motion.circle
          key={i}
          cx={c.cx} cy={c.cy} r={c.r}
          fill="none" stroke="#111111" strokeOpacity="0.08" strokeWidth="1.5"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
        />
      ))}
      {[
        [150, 130], [1080, 460],
      ].map((c, i) => (
        <motion.circle
          key={`d-${i}`}
          cx={c[0]} cy={c[1]} r="3"
          fill="#111111" fillOpacity="0.3"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}
      <motion.rect
        x="1030" y="410" width="14" height="14" rx="3"
        fill="none" stroke="#111111" strokeOpacity="0.16" strokeWidth="1.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "1037px 417px" }}
      />
    </motion.svg>
  );
}

export default function HeroBackdrop({ category }: { category: ServiceCategory }) {
  switch (category) {
    case "Web & App Development":
      return <WebDevBackdrop />;
    case "AI & Data":
      return <AiDataBackdrop />;
    case "Digital Marketing":
      return <MarketingBackdrop />;
    case "Cloud & Infrastructure":
      return <CloudBackdrop />;
    default:
      return null;
  }
}

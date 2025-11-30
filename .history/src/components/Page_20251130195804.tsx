import { motion } from "framer-motion";
import React from "react";

type Props = { children: React.ReactNode };

export default function Page({ children }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      {children}
    </motion.section>
  );
}
import { motion } from "framer-motion";

export default function ServiceCard({ Icon, title }) {
  return (
    <motion.div
      className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:scale-105 transition cursor-pointer"
      whileHover={{ y: -5 }}
    >
      <Icon className="text-blue-800 w-10 h-10 mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </motion.div>
  );
}

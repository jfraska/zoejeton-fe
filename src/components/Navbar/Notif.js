import { motion } from "framer-motion";

export default function Notif() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      className="fixed z-50 bottom-10 left-5 px-5 py-2 bg-black rounded-lg text-white"
    >
      Your shopping cart is empty
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
        
        {/* Left: Phone Mockup */}
        <motion.div
          className="flex-1 mb-12 md:mb-0 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/phone.png"
            alt="PinPay App"
            className="w-[280px] md:w-[340px] lg:w-[380px] rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Everything You Need in One App
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            From mobile recharge to travel booking and insurance — PinPay is your
            all-in-one solution for seamless digital payments.
          </p>
          <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

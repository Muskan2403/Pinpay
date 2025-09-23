import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white text-gray-900 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
        
        {/* Left: Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            All Payments in One App: <br />
            <span className="text-indigo-600">PinPay</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Recharge, book, and pay bills instantly with India’s most convenient payment app.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition">
              Get on Google Play
            </button>
            <button className="px-6 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-lg hover:bg-gray-800 transition">
              Get on App Store
            </button>
          </div>
        </motion.div>

        {/* Right: Phone Mockup */}
        <motion.div
          className="flex-1 mt-12 md:mt-0 relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
          <img
            src="/images/phone.png"
            alt="PinPay App Preview"
            className="relative w-[280px] md:w-[320px] lg:w-[360px] rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

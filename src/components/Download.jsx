// import { motion } from "framer-motion";

// export default function Download() {
//   return (
//     <motion.section
//       className="py-20 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="text-3xl font-bold mb-6">Get the PinPay App Now</h2>
//       <div className="space-x-4">
//         <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
//           Google Play
//         </button>
//         <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
//           App Store
//         </button>
//       </div>
//     </motion.section>
//   );
// }


export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-6">Download PinPay Today</h2>
        <p className="mb-8 text-lg">
          Experience fast, secure, and rewarding payments. Join millions of users already on PinPay.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold shadow-lg hover:bg-gray-100 transition">
            Google Play
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-lg hover:bg-gray-800 transition">
            App Store
          </button>
        </div>
      </div>
    </section>
  );
}

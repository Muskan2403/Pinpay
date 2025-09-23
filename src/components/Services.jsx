// import { motion } from "framer-motion";
// import { CreditCard, Plane, Shield, Smartphone, Tv } from "lucide-react";

// const services = [
//   { icon: Smartphone, title: "Mobile Recharge" },
//   { icon: Tv, title: "DTH Services" },
//   { icon: CreditCard, title: "BBPS Payments" },
//   { icon: Plane, title: "Travel Booking" },
//   { icon: Shield, title: "Insurance" },
// ];

// export default function Services() {
//   return (
//     <section className="py-16 max-w-6xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-12">Our Services</h2>
//       <div className="grid md:grid-cols-5 gap-6">
//         {services.map((s, i) => (
//           <motion.div
//             key={i}
//             className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//           >
//             <s.icon className="mx-auto mb-4 text-indigo-600" size={40} />
//             <h3 className="font-semibold">{s.title}</h3>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { CreditCard, Plane, Shield, Smartphone, Tv } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <ServiceCard Icon={Smartphone} title="Mobile Recharge" />
          <ServiceCard Icon={Tv} title="DTH Recharge" />
          <ServiceCard Icon={CreditCard} title="BBPS Bill Payments" />
          <ServiceCard Icon={Plane} title="Travel Booking" />
          <ServiceCard Icon={Shield} title="Insurance" />
        </div>
      </div>
    </section>
  );
}

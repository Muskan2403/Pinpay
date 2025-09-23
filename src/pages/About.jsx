import { motion } from "framer-motion";
import { Award, Shield, Users, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      desc: "End-to-end encryption ensures your data and money stay safe.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Recharges and payments happen instantly — no delays.",
    },
    {
      icon: Users,
      title: "Made for Everyone",
      desc: "From students to families, we simplify payments for all.",
    },
    {
      icon: Award,
      title: "Rewarding",
      desc: "Enjoy cashback, loyalty rewards, and exclusive offers.",
    },
  ];

  

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            About <span className="text-indigo-600">PinPay</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
  PinPay is your all-in-one digital payment app for 
  <strong> recharge, bill payments, travel booking, and insurance</strong>. 
  No need to juggle multiple apps — we bring it all under one simple, secure, 
  and rewarding platform. With cashback on every payment, instant UPI 
  transfers, and 24×7 customer support, PinPay ensures that your 
  transactions are not only fast and safe but also rewarding. From 
  utility bills to entertainment recharges, ticket bookings to policy renewals, 
  everything you need is just a tap away.
</p>
          
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/phone-mock.png"
            alt="PinPay App Preview"
            className="w-72 md:w-96 drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Why Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Why PinPay?
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Other apps make you switch between platforms for different needs.
          PinPay combines <strong>all essentials in one app</strong>, saving you time, money,
          and effort. With <strong>bank-grade security, lightning speed, and
          cashback</strong>, every payment feels effortless.
        </p>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="p-6 bg-white/70 backdrop-blur rounded-2xl shadow hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Icon className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Vision */}
      <motion.div
        className="bg-indigo-600 text-white py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            At PinPay, we believe digital payments should be <strong>simple,
            trustworthy, and rewarding</strong>. Our vision is to empower every Indian
            with a <strong>single app for all essential payments</strong>, while making
            finance smarter and more accessible for everyone.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

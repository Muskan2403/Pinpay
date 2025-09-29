import { Gift, Headphones, Shield, Zap } from "lucide-react";

const features = [
  { icon: Shield, title: "Secure Payments", desc: "Your transactions are protected with bank-grade encryption." },
  { icon: Zap, title: "Lightning Fast", desc: "Instant recharges, bookings, and bill payments in seconds." },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help, whenever you need assistance." },
  { icon: Gift, title: "Exclusive Rewards", desc: "Earn cashback, discounts, and exciting offers on every payment." },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">Why Choose PinPay?</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-50 shadow hover:shadow-lg transition">
              <f.icon className="w-10 h-10 text-blue-800 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

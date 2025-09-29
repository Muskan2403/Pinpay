import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is PinPay?",
    answer:
      "PinPay is a modern digital payment app that allows you to recharge, pay bills, book travel, and buy insurance — all in one secure platform.",
  },
  {
    question: "Is PinPay safe to use?",
    answer:
      "Absolutely! PinPay uses bank-grade encryption and secure payment gateways to ensure your transactions and data remain safe.",
  },
  {
    question: "Do I get rewards on payments?",
    answer:
      "Yes! PinPay offers cashback, rewards, and exclusive discounts on recharges, bill payments, and bookings.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply download the PinPay app, sign up with your mobile number, and start recharging or paying bills instantly.",
  },
  {
    question: "Does PinPay support all operators?",
    answer:
      "Yes, PinPay supports all major mobile operators, DTH providers, and utility billers registered under BBPS.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Quick answers to help you get the most out of PinPay.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? "rotate-180 text-blue-800" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

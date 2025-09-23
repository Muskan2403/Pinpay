import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Have questions or feedback? Reach out to us and we’ll get back to you promptly.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-2xl shadow hover:shadow-xl transition">
            <MapPin className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p className="text-gray-600 text-center">123 PinPay Street, Mumbai, India</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-2xl shadow hover:shadow-xl transition">
            <Mail className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600 text-center">support@pinpay.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-2xl shadow hover:shadow-xl transition">
            <Phone className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600 text-center">+91 98765 43210</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur rounded-2xl shadow-lg p-10">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

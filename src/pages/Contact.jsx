// import { Mail, MapPin, Phone } from "lucide-react";
// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState(""); // "", "loading", "success", "error"

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setStatus("success");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("error");
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setStatus("error");
//     }
//   };
//   return (
//     <section className="bg-gray-50 py-24">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
//           <p className="text-gray-600 text-lg">
//             Have questions or feedback? Reach out to us and we’ll get back to you promptly.
//           </p>
//         </div>

//         {/* Contact Info Cards */}
//         <div className="grid gap-8 md:grid-cols-3 mb-16">
//           <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-2xl shadow hover:shadow-xl transition">
//             <MapPin className="w-10 h-10 text-blue-800 mb-4" />
//             <h3 className="font-semibold text-lg mb-2">Address</h3>
//             <p className="text-gray-600 text-center">Hi-Tech city colony, Jankapur, Asifabad Dist: Kumuram Bheem Asifabad 504293
// </p>
//           </div>
//           <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-2xl shadow hover:shadow-xl transition">
//             <Mail className="w-10 h-10 text-blue-800 mb-4" />
//             <h3 className="font-semibold text-lg mb-2">Email</h3>
//             <p className="text-gray-600 text-center">support@pinpay.in</p>
//           </div>
//           <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-2xl shadow hover:shadow-xl transition">
//             <Phone className="w-10 h-10 text-blue-800 mb-4" />
//             <h3 className="font-semibold text-lg mb-2">Phone</h3>
//             <p className="text-gray-600 text-center">+91 83330 13869</p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur rounded-2xl shadow-lg p-10">
//           <form className="space-y-6">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows="5"
//                 placeholder="Your Message"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-900 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    }
  };

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
            <MapPin className="w-10 h-10 text-blue-800 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p className="text-gray-600 text-center">
              Hi-Tech city colony, Jankapur, Asifabad Dist: Kumuram Bheem Asifabad 504293
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-2xl shadow hover:shadow-xl transition">
            <Mail className="w-10 h-10 text-blue-800 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600 text-center">support@pinpay.in</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur rounded-2xl shadow hover:shadow-xl transition">
            <Phone className="w-10 h-10 text-blue-800 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600 text-center">+91 83330 13869</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur rounded-2xl shadow-lg p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-900 transition disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-green-600 text-center">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center">❌ Failed to send message. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

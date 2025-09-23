
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer - White Background */}
      {/* //<div className="bg-gray-900 text-white py-12"> */}
      <div className="bg-gray-900 text-white py-6 text-center text-sm border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">PinPay - Recharge App</h2>
            <p className="text-white">
              Our user-friendly interface allows you to easily recharge your mobile phones and DTH services from the comfort of your own home.
            </p>
          </div>

          {/*Important Links*/}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Important Links</h2>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/privacy-policy" className="hover:text-indigo-500 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-500 transition">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-indigo-500 transition">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
<div>
  <h2 className="text-2xl font-bold text-indigo-600 mb-4">Contact Details</h2>
  <div className="space-y-2 text-white">
    <div className="flex items-center justify-center space-x-2">
      <MapPin className="w-5 h-5 text-indigo-600" />
      <span className="w-[160px]">Gwalior, Madhya Pradesh</span>
    </div>
    <div className="flex items-center justify-center space-x-2">
      <Mail className="w-5 h-5 text-indigo-600" />
      <span className="w-[150px]">officialpinpay@gmail.com</span>
    </div>
    <div className="flex items-center justify-center space-x-2">
      <Phone className="w-5 h-5 text-indigo-600" />
      <span className="w-[150px]">+91 98765 43210</span>
    </div>
  </div>
</div>

        </div>
      </div>


      {/* Copyright - Gray Background */}
      <div className="bg-gray-900 text-white py-6 text-center text-sm border-t border-gray-300">
        <p>© {new Date().getFullYear()} PinPay. All Rights Reserved.</p>
      </div>
    </footer>
  );
}



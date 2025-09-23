
// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-indigo-600">PinPay</h1>
//         <div className="space-x-6">
//           <a href="/" className="hover:text-indigo-600">Home</a>
//           <a href="/about" className="hover:text-indigo-600">About</a>
//           <a href="#download" className="hover:text-indigo-600">Download</a> {/* scrolls to Download section */}
//           <a href="#faqs" className="hover:text-indigo-600">FAQs</a>           {/* scrolls to FAQ section */}
//           <a href="/contact" className="hover:text-indigo-600">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // Scroll to Download section on Home
  const goToDownload = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const element = document.getElementById("download");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Scroll to FAQs section on Home
  const goToFaqs = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const element = document.getElementById("faqs");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="bg-indigo-600 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">PinPay</h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-white font-medium">Home</a>
          <a href="/about" className="hover:text-white font-medium">About</a>
          <button
            onClick={goToDownload}
            className="hover:text-white font-medium"
          >
            Download
          </button>
          <button
            onClick={goToFaqs}
            className="hover:text-white font-medium"
          >
            FAQs
          </button>
          <a href="/contact" className="hover:text-white font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}

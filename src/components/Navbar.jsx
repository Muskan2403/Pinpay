import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const goToDownload = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const element = document.getElementById("download");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goToFaqs = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const element = document.getElementById("faqs");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="bg-blue-900 shadow-md sticky top-0 z-50 h-16">
      <div className="max-w-6xl mx-auto px-4 h-full flex justify-between items-center">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <img 
            src="/logo2.jpg"
            alt="PinPay Logo" 
            className="h-12 object-contain" 
          />
          <h1 className="text-2xl font-bold text-white">PinPay</h1>
        </div>

        {/* Nav Links */}
        <div className="space-x-6 flex items-center h-full">
          <a href="/" className="text-white font-medium">Home</a>
          <a href="/about" className="text-white font-medium">About</a>
          <button onClick={goToDownload} className="text-white font-medium">
            Download
          </button>
          <button onClick={goToFaqs} className="text-white font-medium">
            FAQs
          </button>
          <a href="/contact" className="text-white font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}

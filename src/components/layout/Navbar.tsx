import { useState, useRef, useEffect } from "react";
import schoolLogo from "../../assets/logo.svg"; // Adjust the path as necessary
import { Link, useLocation } from "react-router-dom"; // Add useLocation
import { Menu, X } from "../Icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const loginMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        loginMenuRef.current &&
        !loginMenuRef.current.contains(event.target as Node)
      ) {
        setIsLoginMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Profil Sekolah", href: "/profile" },
    { name: "Fasilitas", href: "/facilities" },
    { name: "Ekstrakurikuler", href: "/extracurricular" },
    { name: "Berita", href: "/news" },
    { name: "Kontak", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={schoolLogo} alt="School Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                SMP IP Yakin
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Login Menu */}
            <div className="relative" ref={loginMenuRef}>
              <button
                onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                aria-haspopup="true"
                aria-expanded={isLoginMenuOpen}
              >
                Login
              </button>
              {isLoginMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                  <Link
                    to="/login/student"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsLoginMenuOpen(false)}
                  >
                    Masuk sebagai Siswa
                  </Link>
                  <Link
                    to="/login/osis"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsLoginMenuOpen(false)}
                  >
                    Masuk sebagai OSIS
                  </Link>
                  <Link
                    to="/login/teacher"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsLoginMenuOpen(false)}
                  >
                    Masuk sebagai Kesiswaan
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Login Menu */}
            <div className="border-t border-gray-200 pt-4">
              <div className="text-sm font-medium text-gray-500 px-3 py-2">
                Login Sebagai
              </div>
              <Link
                to="/login/student"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Masuk sebagai Siswa
              </Link>
              <Link
                to="/login/osis"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Masuk sebagai OSIS
              </Link>
              <Link
                to="/login/teacher"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Masuk sebagai Kesiswaan
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

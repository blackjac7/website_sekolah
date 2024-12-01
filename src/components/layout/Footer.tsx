import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SMP IP Yakin Jakarta</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <p>
                  Jl. Bangun Nusa Raya No. 10 Cengkareng Timur, Cengkareng,
                  Jakarta Barat
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <p>+62 21 6194 381</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <p>info@smpipyakinjakarta.sch.id</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/profile" className="hover:text-blue-400">
                  Profil Sekolah
                </a>
              </li>
              <li>
                <a href="/facilities" className="hover:text-blue-400">
                  Fasilitas
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-blue-400">
                  Berita
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
            <ul className="space-y-2">
              <li>Senin - Jumat: 07:00 - 15:00</li>
              <li>Sabtu: 07:00 - 12:00</li>
              <li>Minggu: Tutup</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} SMP IP Yakin Jakarta. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

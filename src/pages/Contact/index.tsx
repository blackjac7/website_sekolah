import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Silakan hubungi kami untuk informasi lebih lanjut tentang SMP IP Yakin
          Jakarta. Kami siap membantu Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">Informasi Kontak</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Alamat</h3>
                  <p className="text-gray-600">
                    Jl. Bangun Nusa Raya No. 10 Cengkareng Timur
                    <br />
                    Kota Jakarta Barat
                    <br />
                    DKI Jakarta 11730
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Telepon</h3>
                  <p className="text-gray-600">+62 21 6194 381</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@smpipyakinjakarta.sch.id</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Jam Operasional</h3>
                  <ul className="text-gray-600">
                    <li>Senin - Jumat: 07:00 - 15:00</li>
                    <li>Sabtu: 07:00 - 12:00</li>
                    <li>Minggu: Tutup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">Lokasi Kami</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8484168365208!2d106.72726907478243!3d-6.15104966029221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7f0d771e7b9%3A0x135d3b582e175213!2sSekolah%20Menengah%20Kejuruan%20IP%20Yakin!5e0!3m2!1sid!2sid!4v1732845062463!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

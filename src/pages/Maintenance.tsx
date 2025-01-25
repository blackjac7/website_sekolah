import { motion } from "framer-motion";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center bg-white rounded-lg shadow-2xl p-8 md:p-12 border border-purple-100"
      >
        {/* Icon atau Gambar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-6"
        >
          <svg
            className="w-20 h-20 mx-auto text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Website Sedang Dalam Pemeliharaan
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-lg text-gray-600 mb-6"
        >
          Kami sedang melakukan perbaikan dan peningkatan untuk memberikan
          pengalaman yang lebih baik. Silakan kembali lagi nanti!
        </motion.p>

        {/* Informasi Jadwal Kembali Aktif */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="bg-yellow-50 rounded-lg p-4 mb-6"
        >
          <p className="text-lg text-yellow-800 font-semibold">
            Website akan aktif kembali pada:
          </p>
          <p className="text-xl text-yellow-900 font-bold mt-2">
            27 Januari 2025, jam 08:00 WIB
          </p>
        </motion.div>

        {/* Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="bg-purple-50 rounded-lg p-4 text-left inline-block"
        >
          <p className="text-gray-700">
            Jika ada pertanyaan mendesak, hubungi kami di:
          </p>
          <ul className="list-disc list-inside text-purple-600 mt-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@smpipyakinjakarta.sch.id"
                className="hover:underline"
              >
                info@smpipyakinjakarta.sch.id
              </a>
            </li>
            <li>
              Telepon:{" "}
              <a href="tel:+62216194381" className="hover:underline">
                +62 21 6194 381
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/smpyakinku"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @smpyakinku
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Animasi atau Pesan Tambahan */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8"
        >
          <p className="text-sm text-gray-500">
            Terima kasih atas pengertiannya. Kami akan segera kembali!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Maintenance;

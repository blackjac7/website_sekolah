import { useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  Download,
  Eye,
} from "../components/Icons";
import { useState, useEffect } from "react";

// Dummy data - Idealnya dari API/Database
const announcements = {
  "1": {
    title: "Pendaftaran Siswa Baru 2024/2025",
    date: "15 Mar 2024",
    time: "08:00 WIB",
    location: "SMP IP Yakin Jakarta",
    content: `
      <h2>Informasi Pendaftaran</h2>
      <p>Dengan ini kami sampaikan bahwa pendaftaran siswa baru tahun ajaran 2024/2025 telah dibuka. Berikut informasi lengkapnya:</p>
      
      <h3>Persyaratan Pendaftaran:</h3>
      <ul>
        <li>Fotokopi Akte Kelahiran</li>
        <li>Fotokopi Kartu Keluarga</li>
        <li>Rapor SD/MI (semester 1-5)</li>
        <li>Pas foto 3x4 (3 lembar)</li>
      </ul>

      <h3>Jadwal Penting:</h3>
      <ul>
        <li>Pendaftaran Online: 15 Maret - 30 April 2024</li>
        <li>Tes Masuk: 5 Mei 2024</li>
        <li>Pengumuman: 10 Mei 2024</li>
      </ul>

      <h3>Biaya Pendaftaran:</h3>
      <p>Rp. 350.000 (termasuk seragam dan buku)</p>
    `,
    attachments: [
      { name: "Formulir_Pendaftaran.pdf", size: "1.2 MB" },
      { name: "Brosur_Sekolah.pdf", size: "2.5 MB" },
    ],
    views: 1250,
    priority: "high",
  },
  // ...tambahkan data dummy lainnya
};

const AnnouncementDetail = () => {
  const { id } = useParams();
  const [announcement] = useState(
    announcements[id as keyof typeof announcements]
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!announcement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Pengumuman tidak ditemukan
          </h1>
          <p className="text-gray-600 mt-2">
            Pengumuman yang Anda cari mungkin telah dihapus atau tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 text-blue-600 text-sm mb-4">
            <span
              className={`px-2 py-1 rounded ${
                announcement.priority === "high"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100"
              }`}
            >
              {announcement.priority === "high" ? "Penting" : "Informasi"}
            </span>
            <Eye className="h-4 w-4" />
            <span>{announcement.views} views</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {announcement.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{announcement.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{announcement.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{announcement.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: announcement.content }}
          />
        </div>

        {/* Attachments */}
        {announcement.attachments && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Lampiran</h3>
            <div className="space-y-3">
              {announcement.attachments.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{file.name}</span>
                    <span className="text-sm text-gray-500">({file.size})</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Share Button */}
        <div className="flex justify-center">
          <button
            onClick={() =>
              navigator.share({
                title: announcement.title,
                text: announcement.title,
                url: window.location.href,
              })
            }
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Share2 className="h-5 w-5" />
            Bagikan Pengumuman
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;

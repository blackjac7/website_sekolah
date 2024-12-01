import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { News } from "../../types";
import { Calendar, Share2 } from "lucide-react";

const newsData: News[] = [
  {
    id: "1",
    title: "Juwita Meraih Juara 2 Tari Tradisional Nasional di TMII",
    date: "15 Okt 2024",
    content: `
      <p>Selamat dan bangga! Juwita, peserta didik SMP IP YAKIN, telah meraih prestasi luar biasa dengan meraih juara kedua dalam kompetisi tari tradisional nasional yang diselenggarakan di Taman Mini Indonesia Indah (TMII).</p>
      <p>Juwita telah menunjukkan kemampuan dan dedikasi yang luar biasa dalam menampilkan tarian tradisional yang indah dan menginspirasi. Prestasi ini tidak hanya membanggakan dirinya, tetapi juga membanggakan sekolah dan semua pihak yang terlibat dalam pendidikannya.</p>
      <p>Kami selalu mendorong siswa-siswi kami untuk terus berkarya dan mencapai prestasi tertinggi di berbagai bidang. Kesuksesan Juwita adalah bukti nyata bahwa dengan kerja keras, dedikasi, dan dukungan yang tepat, semua hal mungkin tercapai.</p>
      <p>Marilah kita berterima kasih kepada Juwita atas prestasinya dan terus mendukung semua siswa SMP IP YAKIN dalam mengejar cita-cita dan mencapai kesuksesan.</p>
      <p>Jaya terus, Juwita! Jaya terus, SMP IP YAKIN!</p>
    `,
    image:
      "https://res.cloudinary.com/dvnyimxmi/image/upload/t_My%20Logo/q_auto/f_auto/v1732849513/tari_prestasi_m3qzce.webp",
    category: "achievement",
  },
  // ...other news items
];

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<News | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundNews = newsData.find((item) => item.id === id);
    setTimeout(() => {
      setNews(foundNews);
      setIsLoading(false);
    }, 1000);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Berita tidak ditemukan
          </h1>
          <p className="text-gray-600 mt-2">
            Berita yang Anda cari mungkin telah dihapus atau tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {news.title}
          </h1>

          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="text-sm">{news.date}</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="aspect-video w-full bg-gray-100">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-6">
            <div
              className="prose prose-sm sm:prose lg:prose-lg mx-auto"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </div>

        {/* Share Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() =>
              navigator.share({
                title: news.title,
                text: news.title,
                url: window.location.href,
              })
            }
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
          >
            <Share2 className="h-4 w-4" />
            Bagikan Berita
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;

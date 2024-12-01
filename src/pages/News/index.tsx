import { useState, useMemo } from "react";
import { News } from "../../types";
import NewsCard from "./components/NewsCard";
import CategoryFilter from "./components/CategoryFilter";

const newsData: News[] = [
  {
    id: "1",
    title: "Juwita Meraih Juara 2 Tari Tradisional Nasional di TMII",
    date: "15 Okt 2024",
    content:
      "Selamat dan bangga! Juwita, peserta didik SMP IP YAKIN, telah meraih prestasi luar biasa dengan meraih juara kedua dalam kompetisi tari tradisional nasional yang diselenggarakan di Taman Mini Indonesia Indah (TMII). Juwita telah menunjukkan kemampuan dan dedikasi yang luar biasa dalam menampilkan tarian tradisional yang indah dan menginspirasi. Prestasi ini tidak hanya membanggakan dirinya, tetapi juga membanggakan sekolah dan semua pihak yang terlibat dalam pendidikannya. Kami selalu mendorong siswa-siswi kami untuk terus berkarya dan mencapai prestasi tertinggi di berbagai bidang. Kesuksesan Juwita adalah bukti nyata bahwa dengan kerja keras, dedikasi, dan dukungan yang tepat, semua hal mungkin tercapai. Marilah kita berterima kasih kepada Juwita atas prestasinya dan terus mendukung semua siswa SMP IP YAKIN dalam mengejar cita-cita dan mencapai kesuksesan. Jaya terus, Juwita! Jaya terus, SMP IP YAKIN!",
    image:
      "https://res.cloudinary.com/dvnyimxmi/image/upload/t_My Logo/q_auto/f_auto/v1733056074/tari_prestasi_p3falv.webp",
    category: "achievement",
  },
  {
    id: "2",
    title: "Perayaan Milad Sekolah ke-39",
    date: "10 Mar 2024",
    content:
      "SMP IP Yakin Jakarta merayakan hari jadi yang ke-39 dengan berbagai kegiatan menarik, termasuk pentas seni, pameran karya siswa, dan bakti sosial kepada masyarakat sekitar.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3",
    category: "activity",
  },
  {
    id: "3",
    title: "Siswa Hafiz Quran Bertambah",
    date: "5 Mar 2024",
    content:
      "Program tahfiz Quran SMP IP Yakin Jakarta kembali mencetak prestasi dengan bertambahnya 15 siswa yang berhasil menyelesaikan hafalan 5 juz Al-Quran.",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3",
    category: "achievement",
  },
  {
    id: "4",
    title: "Kunjungan Edukatif ke Museum Nasional",
    date: "1 Mar 2024",
    content:
      "Siswa kelas 8 melakukan kunjungan edukatif ke Museum Nasional sebagai bagian dari pembelajaran sejarah dan budaya Indonesia.",
    image:
      "https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-4.0.3",
    category: "activity",
  },
  {
    id: "5",
    title: "Juara Umum Olimpiade Sains",
    date: "25 Feb 2024",
    content:
      "SMP IP Yakin Jakarta berhasil meraih gelar juara umum dalam Olimpiade Sains tingkat DKI Jakarta dengan perolehan 5 medali emas, 3 perak, dan 4 perunggu.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3",
    category: "achievement",
  },
  {
    id: "6",
    title: "Workshop Literasi Digital",
    date: "20 Feb 2024",
    content:
      "Sekolah mengadakan workshop literasi digital untuk meningkatkan kesadaran siswa tentang penggunaan teknologi yang aman dan bertanggung jawab.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3",
    category: "activity",
  },
];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews = useMemo(() => {
    if (activeCategory === "all") return newsData;
    return newsData.filter((news) => news.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Berita dan Prestasi</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ikuti perkembangan terbaru tentang prestasi dan kegiatan siswa SMP IP
          Yakin Jakarta.
        </p>
      </div>

      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;

import { Facility } from "../../types";
import FacilityCard from "./components/FacilityCard";
import {
  School,
  BookOpen,
  Dumbbell,
  FlaskConical,
} from "../../components/Icons";

const facilities: Facility[] = [
  {
    id: "1",
    name: "Laboratorium Sains",
    description:
      "Laboratorium modern yang dilengkapi dengan peralatan praktikum terkini untuk mata pelajaran Fisika, Kimia, dan Biologi.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3",
    category: "laboratory",
  },
  {
    id: "2",
    name: "Perpustakaan",
    description:
      "Perpustakaan dengan koleksi buku fisik, dilengkapi area membaca yang nyaman dan akses e-library.",
    image:
      "https://res.cloudinary.com/dvnyimxmi/image/upload/t_My Logo/w_1024/q_auto/f_auto/v1733112505/Perpustakaan_btnhtn.jpg",
    category: "library",
  },
  {
    id: "3",
    name: "Lapangan Olahraga",
    description:
      "Fasilitas olahraga lengkap termasuk lapangan futsal, basket, dan area atletik dengan standar nasional.",
    image:
      "https://res.cloudinary.com/dvnyimxmi/image/upload/t_My Logo/w_1024/q_auto/f_auto/v1733094531/lapangan_pxkhxa.jpg",
    category: "sports",
  },
  {
    id: "4",
    name: "Laboratorium Komputer",
    description:
      "Lab komputer dengan perangkat terbaru untuk pembelajaran teknologi informasi dan programming.",
    image:
      "https://res.cloudinary.com/dvnyimxmi/image/upload/t_My%20Logo/w_1024/q_auto/f_auto/v1733055889/hero2_oa2prx.webp",
    category: "laboratory",
  },
  {
    id: "5",
    name: "Kantin Sekolah",
    description:
      "Kantin dengan berbagai pilihan makanan dan minuman sehat untuk menunjang gizi siswa.",
    image:
      "https://res.cloudinary.com/dvnyimxmi/image/upload/t_My Logo/w_1024/q_auto/f_auto/v1733095032/kantin_xhsmox.jpg",
    category: "other",
  },
  {
    id: "6",
    name: "Mesin Minuman Otomatis",
    description:
      "Mesin minuman otomatis yang menyediakan berbagai minuman sehat dan menyegarkan.",
    image:
      "https://res.cloudinary.com/dvnyimxmi/image/upload/t_My Logo/w_1024/q_auto/f_auto/v1733095023/mesin_otomatis_gcb28n.jpg",
    category: "other",
  },
];

const categoryIcons = {
  laboratory: <FlaskConical className="h-6 w-6" />,
  library: <BookOpen className="h-6 w-6" />,
  sports: <Dumbbell className="h-6 w-6" />,
  other: <School className="h-6 w-6" />,
};

const Facilities = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Fasilitas Sekolah</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          SMP IP Yakin Jakarta menyediakan fasilitas modern dan lengkap untuk
          mendukung proses pembelajaran dan pengembangan potensi siswa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {facilities.map((facility) => (
          <FacilityCard
            key={facility.id}
            facility={facility}
            icon={categoryIcons[facility.category]}
          />
        ))}
      </div>
    </div>
  );
};

export default Facilities;

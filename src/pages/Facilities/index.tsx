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
    name: "Perpustakaan Digital",
    description:
      "Perpustakaan dengan koleksi buku fisik dan digital, dilengkapi area membaca yang nyaman dan akses e-library.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3",
    category: "library",
  },
  {
    id: "3",
    name: "Lapangan Olahraga",
    description:
      "Fasilitas olahraga lengkap termasuk lapangan futsal, basket, dan area atletik dengan standar nasional.",
    image:
      "https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-4.0.3",
    category: "sports",
  },
  {
    id: "4",
    name: "Laboratorium Komputer",
    description:
      "Lab komputer dengan perangkat terbaru untuk pembelajaran teknologi informasi dan programming.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3",
    category: "laboratory",
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

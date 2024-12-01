import React from "react";
import { Target, Award } from "lucide-react";

const VisiMisi = () => {
  return (
    <div className="space-y-8">
      {/* Visi Section */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold">Visi Sekolah</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          “Terwujudnya Pelajar Berkarakter Pelajar Pancasila Sepanjang Hayat.”
        </p>
      </section>

      {/* Misi Section */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold">Misi Sekolah</h2>
        </div>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>Merencanakan perangkat kerja guru (administrasi guru).</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>Menyiapkan RPP/modul ajar dan kegiatan proyek.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Mewujudkan peserta didik yang beriman, berakhlak mulia, cerdas,
              kreatif, dan berkarakter Pancasila melalui pembelajaran yang
              berkualitas dan berpusat pada peserta didik.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Melaksanakan Kegiatan Belajar Mengajar (KBM) sesuai dengan durasi
              yang telah ditetapkan.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Mengembangkan potensi dan bakat peserta didik secara optimal.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Menggunakan metode diskusi kelompok belajar dan presentasi hasil
              kinerja.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Menganalisis capaian pembelajaran peserta didik dengan
              mengimplementasikan berbagai metode pembelajaran sehingga standar
              kelulusan optimal.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Mengawasi proses Kegiatan Belajar Mengajar (KBM) sesuai dengan
              durasi yang telah ditetapkan.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Menilai hasil (tes/nontes/lisan/tugas) dan assessment (penilaian
              proses).
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Mensupervisi proses KBM menggunakan Model Coaching (SMC) dengan
              instrumen monitoring melalui lesson study (catatan pengamatan).
            </span>
          </li>
        </ul>
      </section>

      {/* Tujuan Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Tujuan</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Menghasilkan lulusan yang memiliki pemahaman Islam yang
              komprehensif
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Mencapai prestasi akademik dan non-akademik di tingkat nasional
              dan internasional
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            <span>
              Mempersiapkan siswa untuk melanjutkan ke jenjang pendidikan yang
              lebih tinggi
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default VisiMisi;

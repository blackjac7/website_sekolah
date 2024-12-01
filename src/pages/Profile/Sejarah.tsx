import React from "react";
import { History } from "lucide-react";

const Sejarah = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <History className="h-8 w-8 text-blue-600" />
        <h2 className="text-2xl font-bold">Sejarah SMP IP Yakin Jakarta</h2>
      </div>

      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>
          SMP IP Yakin Jakarta didirikan pada tahun <strong>1974</strong> oleh
          Bapak <strong>Dr. Usman Dadu, M.BA</strong>, sebagai upaya untuk
          memberikan pendidikan menengah yang berkualitas kepada masyarakat
          sekitar, dengan mengintegrasikan nilai-nilai keagamaan dalam proses
          pembelajaran. Pada awalnya, sekolah ini beroperasi sebagai lembaga
          pendidikan yang belum formal.
        </p>

        <p>
          Pada tahun <strong>1976</strong>, SMP IP Yakin secara resmi
          didaftarkan menjadi <strong>SMP Swasta</strong>, dengan fasilitas
          sederhana yang hanya terdiri dari <strong>tiga kelas</strong> dan
          jumlah siswa sebanyak <strong>87 orang</strong>. Ini menandai langkah
          awal sekolah menuju pengakuan formal sebagai institusi pendidikan
          menengah.
        </p>

        <p>
          Kemudian, pada tanggal <strong>10 Maret 1984</strong>, SMP IP Yakin
          memperoleh pengakuan resmi dari pemerintah berdasarkan
          <strong>Surat Keterangan Pendirian No. SP,219/I01,1A/I.84</strong>,
          yang diterbitkan oleh Kementerian Pendidikan dan Kebudayaan. Sejak
          saat itu, sekolah ini terus berkembang baik dari sisi jumlah siswa,
          infrastruktur, maupun kualitas pendidikan.
        </p>

        <p>
          Dengan dedikasi para pendidik dan dukungan masyarakat, SMP IP Yakin
          kini telah menjadi institusi pendidikan yang dikenal luas. Sekolah
          terus mengembangkan diri untuk mencetak generasi Pelajar Pancasila
          yang beriman, kreatif, cerdas, dan berkarakter unggul.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Tonggak Sejarah Penting
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="min-w-[100px] font-semibold">1974</div>
            <div>
              SMP IP Yakin didirikan oleh Bapak Dr. Usman Dadu, M.BA, sebagai
              upaya menyediakan pendidikan berkualitas dengan nilai-nilai
              keagamaan.
            </div>
          </li>
          <li className="flex items-start">
            <div className="min-w-[100px] font-semibold">1976</div>
            <div>
              Resmi didaftarkan sebagai SMP Swasta, dengan fasilitas awal tiga
              kelas dan jumlah siswa sebanyak 87 orang.
            </div>
          </li>
          <li className="flex items-start">
            <div className="min-w-[100px] font-semibold">1984</div>
            <div>
              Mendapatkan pengakuan resmi dari pemerintah melalui Surat
              Keterangan Pendirian No. SP,219/I01,1A/I.84 oleh Kementerian
              Pendidikan dan Kebudayaan.
            </div>
          </li>
          <li className="flex items-start">
            <div className="min-w-[100px] font-semibold">1990-an</div>
            <div>
              Penambahan fasilitas ruang kelas baru dan laboratorium untuk
              mendukung pembelajaran yang lebih baik.
            </div>
          </li>
          <li className="flex items-start">
            <div className="min-w-[100px] font-semibold">2000</div>
            <div>
              Memasukkan pembelajaran berbasis teknologi ke dalam kurikulum,
              termasuk pengenalan komputer kepada siswa
            </div>
          </li>
          <li className="flex items-start">
            <div className="min-w-[100px] font-semibold">2015</div>
            <div>
              Meluncurkan perpustakaan dan mulai menggunakan perangkat
              multimedia untuk meningkatkan pengalaman belajar siswa.
            </div>
          </li>
          <li className="flex items-start">
            <div className="min-w-[100px] font-semibold">2020</div>
            <div>
              SMP IP Yakin menerapkan pembelajaran daring akibat pandemi
              COVID-19, memastikan siswa tetap mendapatkan pendidikan
              berkualitas.
            </div>
          </li>
          <li className="flex items-start">
            <div className="min-w-[100px] font-semibold">2024</div>
            <div>
              Peluncuran website resmi SMP IP Yakin sebagai media informasi dan
              komunikasi digital yang terintegrasi untuk siswa, guru, dan orang
              tua.
            </div>
          </li>
        </ul>

        <p className="mt-6">
          Saat ini, SMP IP Yakin Jakarta terus berkomitmen untuk memberikan
          pendidikan berkualitas dengan memadukan nilai-nilai Islam, teknologi
          modern, dan metode pembelajaran inovatif.
        </p>
      </div>
    </div>
  );
};

export default Sejarah;

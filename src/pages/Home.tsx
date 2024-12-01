import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Calendar,
  Bell,
  BookOpen,
  Star,
  Brain,
  Heart,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3",
      title: "Selamat Datang di SMP IP Yakin Jakarta",
      subtitle: "Membentuk Generasi Unggul, Berakhlak, dan Berprestasi",
    },
    {
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3",
      title: "Fasilitas Pembelajaran Modern",
      subtitle: "Mendukung Pengembangan Potensi Siswa",
    },
    {
      image:
        "https://res.cloudinary.com/dvnyimxmi/image/upload/t_My Logo/a_auto/f_auto/v1732849400/hero1_jjjv9m.webp",
      title: "Prestasi Membanggakan",
      subtitle: "Raih Masa Depan Cemerlang Bersama Kami",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Carousel */}
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>
          ))}

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl mb-8 animate-fadeIn delay-200">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex gap-4">
                <Link
                  to="/profile"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Pendaftaran
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <ArrowRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Siswa Aktif", value: "450+" },
            { label: "Guru Berkualitas", value: "23+" },
            { label: "Prestasi", value: "100+" },
            { label: "Ekstrakurikuler", value: "9+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* School Announcements */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Pengumuman Sekolah</h2>
            <Bell className="h-6 w-6 text-blue-600" />
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Pendaftaran Siswa Baru 2024/2025",
                date: "15 Mar 2024",
                priority: "high",
              },
              {
                title: "Jadwal Ujian Tengah Semester",
                date: "12 Mar 2024",
                priority: "medium",
              },
              {
                title: "Pekan Olahraga dan Seni",
                date: "20 Mar 2024",
                priority: "normal",
              },
            ].map((announcement, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-600 pl-4 py-2 hover:bg-gray-50"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{announcement.title}</h3>
                  <span className="text-sm text-gray-500">
                    {announcement.date}
                  </span>
                </div>
                <Link
                  to={`/announcement/1`} // sesuaikan dengan ID pengumuman
                  className="text-blue-600 text-sm hover:underline"
                >
                  Lihat detail →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Berita Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "1",
                title: "Juara Olimpiade Sains",
                image:
                  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3",
                date: "10 Mar 2024",
              },
              {
                id: "2",
                title: "Perayaan Hari Guru",
                image:
                  "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3",
                date: "8 Mar 2024",
              },
              {
                id: "3",
                title: "Kompetisi Robotik",
                image:
                  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
                date: "5 Mar 2024",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <Link
                    to={`/news/${news.id}`}
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center"
                  >
                    Baca selengkapnya
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Agenda Mendatang</h2>
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Workshop Robotika",
                date: "25 Mar 2024",
                time: "09:00 - 15:00",
                location: "Lab Komputer",
              },
              {
                title: "Seminar Motivasi",
                date: "28 Mar 2024",
                time: "10:00 - 12:00",
                location: "Aula Utama",
              },
              {
                title: "Kompetisi Matematika",
                date: "30 Mar 2024",
                time: "08:00 - 13:00",
                location: "Ruang Kelas 7-9",
              },
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 font-semibold mb-2">
                  {event.date}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">{event.time}</p>
                <p className="text-gray-600">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Kalender Akademik</h2>
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              <span className="text-gray-600">Semester Genap 2023/2024</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kegiatan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    date: "2 Januari 2024",
                    activity: "KBM semester genap kembali aktif",
                    detail: "Kelas VII, VIII, IX",
                  },
                  {
                    date: "8 Januari - 13 Februari 2024",
                    activity: 'PS Tema "Kearifan Lokal"',
                    detail: "Kelas VII",
                  },
                  {
                    date: "8 Januari - 22 Februari 2024",
                    activity: "Pendalaman Materi (PM)",
                    detail: "Kelas IX",
                  },
                  // Add more items as needed
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.activity}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {item.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/academic-calendar"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              Lihat Kalender Lengkap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Motivation Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Semangat Belajar</h2>
            <p className="text-xl opacity-90">
              "Pendidikan adalah tiket ke masa depan. Hari esok dimiliki oleh
              orang-orang yang mempersiapkan dirinya sejak hari ini."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Belajar Tanpa Batas",
                description:
                  "Mengembangkan potensi diri melalui pendidikan berkualitas dan pembelajaran yang menyenangkan.",
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Kreativitas & Inovasi",
                description:
                  "Mendorong pemikiran kritis dan kemampuan memecahkan masalah untuk menghadapi tantangan masa depan.",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Karakter & Nilai",
                description:
                  "Membentuk kepribadian yang berakhlak mulia dan berkarakter kuat sebagai fondasi kesuksesan.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:transform hover:scale-105 transition-all"
              >
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  {item.title}
                </h3>
                <p className="text-center text-white/90">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            {["Disiplin", "Kreatif", "Religius", "Mandiri"].map(
              (value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center gap-2"
                >
                  <Star className="h-4 w-4" />
                  <span className="font-semibold">{value}</span>
                </div>
              )
            )}
          </div>

          {/* <div className="mt-12 text-center">
            <Link
              to="/program"
              className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
            >
              Jelajahi Program Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div> */}
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Instagram SMP IP Yakin Jakarta
              </span>
            </h2>
            <p className="text-gray-600">
              Ikuti Kegiatan Terbaru Kami di Instagram
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.instagram.com/smpyakinku/embed"
              className="w-full h-[600px] border-none"
              loading="lazy"
              title="Instagram Feed SMP IP Yakin"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/smpyakinku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-semibold">Follow Kami di Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

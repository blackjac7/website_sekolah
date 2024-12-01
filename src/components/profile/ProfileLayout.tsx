import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const ProfileLayout = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/profile', label: 'Visi & Misi' },
    { path: '/profile/sejarah', label: 'Sejarah Sekolah' },
    { path: '/profile/struktur', label: 'Struktur Organisasi' },
    { path: '/profile/sambutan', label: 'Sambutan Kepala Sekolah' },
    { path: '/profile/guru', label: 'Profil Guru' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profil Sekolah</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:w-64 flex-shrink-0">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-h-[500px] bg-white rounded-lg shadow-lg p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProfileLayout;
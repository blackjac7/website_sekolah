import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfileLayout from '../../components/profile/ProfileLayout';
import VisiMisi from './VisiMisi';
import Sejarah from './Sejarah';
import Struktur from './Struktur';
import Sambutan from './Sambutan';
import GuruStaff from './GuruStaff';

const Profile = () => {
  return (
    <Routes>
      <Route element={<ProfileLayout />}>
        <Route index element={<VisiMisi />} />
        <Route path="sejarah" element={<Sejarah />} />
        <Route path="struktur" element={<Struktur />} />
        <Route path="sambutan" element={<Sambutan />} />
        <Route path="guru" element={<GuruStaff />} />
        <Route path="*" element={<Navigate to="/profile" replace />} />
      </Route>
    </Routes>
  );
};

export default Profile;
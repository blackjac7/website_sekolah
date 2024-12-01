import React from 'react';
import { Facility } from '../../../types';

interface FacilityCardProps {
  facility: Facility;
  icon: React.ReactNode;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
        <p className="text-gray-600">{facility.description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
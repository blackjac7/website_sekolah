import React from "react";
import { ExtracurricularActivity } from "../../../types";
import { Calendar } from "../../../components/Icons";

interface ActivityCardProps {
  activity: ExtracurricularActivity;
  onImageClick: (image: string, title: string) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  onImageClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div
        className="relative group cursor-pointer"
        onClick={() => onImageClick(activity.image, activity.name)}
      >
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-48 object-cover transition duration-300 group-hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
            Klik untuk memperbesar
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
        <p className="text-gray-600 mb-4">{activity.description}</p>
        <div className="flex items-center text-sm text-blue-600">
          <div className="flex flex-col">
            {activity.schedule instanceof Array ? (
              activity.schedule.map((schedule, index) => (
                <span key={index} className="mb-2 last:mb-0">
                  <div className="flex flex-row items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {schedule}
                  </div>
                </span>
              ))
            ) : (
              <div className="flex flex-row items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{activity.schedule}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

import React from "react";
import { News } from "../../../types";
import { Calendar, Award, Users } from "../../../components/Icons";
import { Link } from "react-router-dom";

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const Icon = news.category === "achievement" ? Award : Users;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
          <Calendar className="h-4 w-4" />
          <span>{news.date}</span>
          <Icon className="h-4 w-4 ml-2" />
          <span className="capitalize">{news.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{news.title}</h3>
        <p className="text-gray-600 line-clamp-3">{news.content}</p>
        <Link
          to={`/news/${news.id}`}
          className="mt-4 text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
        >
          Baca selengkapnya
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;

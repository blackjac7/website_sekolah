import React from "react";
import { Award, Users } from "../../../components/Icons";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const categories = [
    { id: "all", label: "Semua", icon: null },
    { id: "achievement", label: "Prestasi", icon: Award },
    { id: "activity", label: "Kegiatan", icon: Users },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`inline-flex items-center px-4 py-2 rounded-full transition-colors ${
            activeCategory === id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {Icon && <Icon className="h-4 w-4 mr-2" />}
          {label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

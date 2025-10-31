import React from "react";

const FilterCard = ({ title }) => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-500 cursor-pointer hover:text-gray-700 transition">ALL</p>
    </div>
  );
};

export default FilterCard;

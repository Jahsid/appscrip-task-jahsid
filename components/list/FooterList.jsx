import React from "react";

const FooterList = ({ title, items }) => {
  return (
    <div className="text-white max-w-xs w-full">
      <h2 className="text-lg font-semibold mb-2 uppercase">{title}</h2>

      <ul
        className="space-y-1 text-sm"
        aria-label={`${title} section links`}
      >
        {items?.map((item, index) => (
          <li key={index} className="hover:text-gray-300 transition">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;

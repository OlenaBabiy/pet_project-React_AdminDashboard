import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div>
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
      </div>
    </header>
  );
};

export default Header;

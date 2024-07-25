// src/components/CustomDropdown.js
"use client"
// src/components/CustomDropdown.js

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option.name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300 px-4 py-2 flex items-center w-full justify-between rounded-md"
      >
        <span className="flex items-center">
          {value ? (
            <>
              {options.find(option => option.name === value)?.icon}
              <span className="ml-2">{value}</span>
            </>
          ) : (
            <span>Select a platform</span>
          )}
        </span>
        <FaChevronDown />
      </button>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 mt-1 w-full z-10 max-h-60 overflow-y-auto rounded-md shadow-md">
          {options.map(option => (
            <div
              key={option.name}
              onClick={() => handleOptionClick(option)}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {option.icon}
              <span className="ml-2">{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ options, selectedOption, onOptionSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative inline-block w-full' ref={dropdownRef}>
      {label && <label className='block mb-2 text-sm font-medium'>{label}</label>}
      <div
        className='bg-white border border-gray-300 rounded-md p-2 flex justify-between items-center cursor-pointer'
        onClick={toggleDropdown}
      >
        <span>{selectedOption || 'Select an option'}</span>
        <IoIosArrowDown />
      </div>
      {isOpen && (
        <ul className='absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10'>
          {options.map((option, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer hover:bg-gray-200 ${
                option === selectedOption ? 'bg-gray-200 font-semibold' : ''
              }`}
              onClick={() => {
                onOptionSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

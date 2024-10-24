import React from 'react'

const SearchBar = ({placeholder, onChange,searchQuery}) => {
  return (
    <div>
      <input type="text" value={searchQuery} onChange={onChange} placeholder={placeholder} className="w-full p-2 border border-gray-300 rounded-lg" />
    </div>
  );
}

export default SearchBar
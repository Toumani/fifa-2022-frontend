import React from "react";

interface SearchBarProps {

}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="mb-6">
      <input
        className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        placeholder="Recherche..."  />
    </div>
  );
}

export default SearchBar
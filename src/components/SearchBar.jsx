// src/components/SearchBar.jsx
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search government institutions..."
          className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <Search className="absolute left-4 top-4 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
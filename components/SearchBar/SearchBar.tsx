'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import Input from '../Input/Input';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounce?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = 'Search...', debounce = 300 }) => {
  const [query, setQuery] = useState('');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, debounce);

    return () => clearTimeout(timer);
  }, [query, debounce, onSearch]);

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        icon={<Search size={18} />}
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

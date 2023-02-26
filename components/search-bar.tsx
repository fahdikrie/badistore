'use client';

import { useState } from 'react';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="w-80 bg-gray-200">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

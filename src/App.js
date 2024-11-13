import React, { useState, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-gray-800/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="app-title text-4xl font-bold mb-4 text-center tracking-wide">Sejoz Galer</h1>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for amazing photos..."
              value={searchInput}
              onChange={handleSearchInput}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            {searchInput && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            )}
          </div>
        </div>
      </header>
  );
};

}

export default App;
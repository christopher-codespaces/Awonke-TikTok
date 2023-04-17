import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-3 bg-white sm:px-6 md:px-8 lg:px-12">
      <div className="flex items-center flex-shrink-0 mr-6">
{/*         <img className="w-8 h-8" src="/path/to/logo.png" alt="Logo" /> */}
        <span className="ml-2 text-lg font-semibold text-gray-800 hidden sm:block" style={{fontSize:"32px",fontWeight:"700"}}>TokTik</span>
      </div>
      <div className="flex-grow max-w-2xl mx-auto">
        <div className="relative w-full text-gray-600">
          <input
            className="w-full h-8 px-4 text-sm border rounded-md focus:outline-none focus:ring focus:border-blue-300 md:h-10"
            type="search"
            name="search"
            placeholder="Search for an account"
          />
          <button type="submit" className="absolute top-0 right-0 mt-1 mr-4">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 22L15.5 15.5M15.5 15.5C17.1569 14.8431 18.0785 13.5 18.0785 12C18.0785 9.51472 15.9852 7.42143 13.5 7.42143C11.0147 7.42143 8.92143 9.51472 8.92143 12C8.92143 14.4853 11.0147 16.5786 13.5 16.5786C14.6644 16.5786 15.7659 16.2402 16.6742 15.6385L22 21" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden sm:flex items-center flex-shrink-0">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-300">
          Log out
        </button>
      </div>
    <div class="flex items-center ml-4 md:hidden">
    <button class="inline-flex items-center justify-center w-6 h-6 p-0 text-white rounded-md hover:text-gray-500 focus:outline-none focus:text-gray-500 md:w-8 md:h-8">
      <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
      </svg>
    </button>
  </div>



    </header>
  );
};


export default Header;

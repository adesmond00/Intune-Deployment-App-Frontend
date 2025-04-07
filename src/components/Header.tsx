import React from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

interface HeaderProps {
  onMenuButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuButtonClick }) => {
  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={onMenuButtonClick} // Use the passed handler
      >
        <span className="sr-only">Open sidebar</span>
        <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex flex-1 justify-between px-4 md:px-6 lg:px-8">
        <div className="flex flex-1">
          {/* Optional Search Bar Placeholder */}
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          {/* Optional User Menu Placeholder */}
          <div className="text-gray-700">User Menu</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

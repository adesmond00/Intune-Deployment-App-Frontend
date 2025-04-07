import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Cross1Icon } from '@radix-ui/react-icons';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 md:hidden" onClose={setIsOpen}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          {/* Sidebar Panel */}
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
              {/* Close Button */}
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <Cross1Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>

              {/* Sidebar Content */}
              <div className="flex flex-shrink-0 items-center px-4">
                {/* Optional Logo */}
                <h2 className="text-white text-lg font-semibold">Navigation</h2>
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="space-y-1 px-2">
                  {/* Navigation Links Placeholder */}
                  <a href="#" className="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    Dashboard
                  </a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    Other Link 1
                  </a>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    // {/* Static sidebar for desktop */}
    // <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
    //   <div className="flex flex-grow flex-col overflow-y-auto bg-gray-800 pt-5">
    //     <div className="flex flex-shrink-0 items-center px-4">
    //       <h2 className="text-white text-lg font-semibold">Navigation</h2>
    //     </div>
    //     <div className="mt-5 flex flex-1 flex-col">
    //       <nav className="flex-1 space-y-1 px-2 pb-4">
    //         {/* Navigation Links Placeholder */}
    //         <a href="#" className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
    //           Dashboard
    //         </a>
    //          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
    //           Other Link 1
    //         </a>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;

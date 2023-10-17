'use client';

import {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import Image from 'next/image';

export default function MegaMenu() {
  const router = useRouter();
  const [menuHidden, setMenuHidden] = useState(true);

  const handleMenu = () => {
    setMenuHidden(!menuHidden);
  }

  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a onClick={() => {router.push('/');}} className="cursor-pointer flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Creator's Play Ground</span>
        </a>
        <div className="flex items-center">
          <a className="cursor-pointer text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-1 focus:outline-none">Login</a>
          <a className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-1 focus:outline-none">Sign up</a>
          <button type="button" onClick={() => {handleMenu()}} className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div id="mega-menu" className={`items-center justify-between ${menuHidden ? 'hidden' : ''} w-full`}>
          <ul className="flex flex-col mt-4 font-medium">
            <li>
              <a onClick={() => {router.push('/');}} className="cursor-pointer block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50" aria-current="page">Home</a>
            </li>
            <li>
              <button onClick={() => {}} className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 hover:bg-gray-50">
                Getting Started 
                <Image src={`/icons/outline/arrows/angle-down.svg`} alt='angle-down' className="w-2.5 h-2.5 ml-2.5" width={10} height={6}></Image>
              </button>
              <div id="mega-menu-dropdown" className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md">
                <div className="p-4 pb-0 text-gray-900">
                  <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                    <li>
                      <a className="cursor-pointer text-gray-500 hover:text-blue-600">About Us</a>
                    </li>
                    <li>
                      <a className="cursor-pointer text-gray-500 hover:text-blue-600">Library</a>
                    </li>
                    <li>
                      <a className="cursor-pointer text-gray-500 hover:text-blue-600">Resources</a>
                    </li>
                    <li>
                      <a className="cursor-pointer text-gray-500 hover:text-blue-600">Pro Version</a>
                    </li>
                  </ul>
                </div>
                  <div className="p-4 pb-0 text-gray-900">
                    <ul className="space-y-4">
                      <li>
                        <a className="cursor-pointer text-gray-500 hover:text-blue-600">Blog</a>
                      </li>
                      <li>
                        <a className="cursor-pointer text-gray-500 hover:text-blue-600">Newsletter</a>
                      </li>
                      <li>
                        <a className="cursor-pointer text-gray-500 hover:text-blue-600">Playground</a>
                      </li>
                      <li>
                        <a className="cursor-pointer text-gray-500 hover:text-blue-600">License</a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a className="cursor-pointer text-gray-500 hover:text-blue-600">Contact Us</a>
                      </li>
                      <li>
                        <a className="cursor-pointer text-gray-500 hover:text-blue-600">Support Center</a>
                      </li>
                      <li>
                        <a className="cursor-pointer text-gray-500 hover:text-blue-600">Terms</a>
                      </li>
                    </ul>
                  </div>
              </div>
            </li>
            <li>
              <a className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50">Team</a>
            </li>
            <li>
              <a className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
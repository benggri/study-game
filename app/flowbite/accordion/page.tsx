'use client';

import Image from 'next/image';

export default function Accordion() {

  return (
    <div className="space-y-8 space-y-0 space-x-8 items-center mb-2">
      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
        <p className="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </a>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
            <Image src={`/icons/solid/arrows/arrow-right.svg`} style={{filter: 'invert(100%)'}} className="w-3.5 h-3.5 ml-2" alt='arrow-right' width={14} height={10}></Image>
        </a>
    </div>
    </div>
  );

}
'use client';

import Image from 'next/image';

import { Card } from 'flowbite-react';
import { AiFillPicture } from "react-icons/ai";

export default function Home() {

  const skeletons = Array(10).fill(0);

  return (
    <div className='p-24 max-[500px]:p-0 max-[500px]:pt-24'>
      {
        skeletons.map((skeleton:any, idx:number) => {
          return (
            <div key={idx} className='w-96 px-16 max-[500px]:px-0'>
              <Card className={`mb-2`}>
                <div className="w-full h-2.5 bg-gray-200 rounded-full mb-4"></div>
                <div className="font-normal text-gray-700">
                  <div className="w-1/2 h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                  <div className="w-2/3 h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="w-1/4 h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
                  <div className="w-4/5 h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                </div>
              </Card>
            </div>
          );
        })
      }
    </div>
  )
}

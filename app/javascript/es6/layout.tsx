'use client';

import { HiHome } from 'react-icons/hi';
import { useRouter, usePathname } from "next/navigation";
import { Breadcrumb, Sidebar } from 'flowbite-react';

interface SectionType {
  label: string,
  href: string,
}

export default function JsEs6Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter(); 
  const pathname = usePathname();

  return (
    <div className='flex'>
      {/* <div className='mt-16'>
        <Sidebar>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href='/javascript/es6'                          className={`cursor-pointer ${pathname == '/javascript/es6'                          ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Introduction</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#let-const'                className={`cursor-pointer ${pathname == '/javascript/es6#let-const'                ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>let, const</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#template-literals'        className={`cursor-pointer ${pathname == '/javascript/es6#template-literals'        ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Template literals</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#multi-line-string'        className={`cursor-pointer ${pathname == '/javascript/es6#multi-line-string'        ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Multi-line String</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#import-export'            className={`cursor-pointer ${pathname == '/javascript/es6#import-export'            ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Import, Export</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#object-literal'           className={`cursor-pointer ${pathname == '/javascript/es6#object-literal'           ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>object literal</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#arrow-function'           className={`cursor-pointer ${pathname == '/javascript/es6#arrow-function'           ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Arrow Function</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#destructuring-assignment' className={`cursor-pointer ${pathname == '/javascript/es6#destructuring-assignment' ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Destructuring assignment</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#spread-operator'          className={`cursor-pointer ${pathname == '/javascript/es6#spread-operator'          ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>spread operator</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#promise'                  className={`cursor-pointer ${pathname == '/javascript/es6#promise'                  ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Promise</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#map-filter-reduce'        className={`cursor-pointer ${pathname == '/javascript/es6#map-filter-reduce'        ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>map, filter, reduce</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#class'                    className={`cursor-pointer ${pathname == '/javascript/es6#class'                    ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Class</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#string-method'            className={`cursor-pointer ${pathname == '/javascript/es6#string-method'            ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>String method</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#default-parameter'        className={`cursor-pointer ${pathname == '/javascript/es6#default-parameter'        ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Default Parameter</Sidebar.Item>
              <Sidebar.Item href='/javascript/es6#module'                   className={`cursor-pointer ${pathname == '/javascript/es6#module'                   ? 'text-blue-700 font-bold' : 'text-gray-900'}`}>Module</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div> */}
      <div className="mt-24 pl-12 max-[500px]:pl-0 w-full">
        <div className="mb-2">
          <Breadcrumb aria-label="breadcrumb">
          <Breadcrumb.Item onClick={() => {router.push('/')}} icon={HiHome} className="cursor-pointer"><p>Home</p></Breadcrumb.Item>
            <Breadcrumb.Item>JavaScript</Breadcrumb.Item>
            <Breadcrumb.Item>ES6</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {children}
      </div>
    </div>
  );
}
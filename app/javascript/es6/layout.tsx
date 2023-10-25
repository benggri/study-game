'use client';

import { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { useRouter, usePathname } from "next/navigation";
import { Breadcrumb, Dropdown } from 'flowbite-react';

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

  return (
    <div className="pl-12 min-[320px]:pl-0 pt-24 w-full">
      <div className="mb-2">
        <Breadcrumb aria-label="breadcrumb">
        <Breadcrumb.Item onClick={() => {router.push('/')}} icon={HiHome} className="cursor-pointer"><p>Home</p></Breadcrumb.Item>
          <Breadcrumb.Item>JavaScript</Breadcrumb.Item>
          <Breadcrumb.Item>ES6</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {children}
    </div>
  );
}
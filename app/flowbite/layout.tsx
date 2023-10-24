'use client';

import { Sidebar } from 'flowbite-react';
import { usePathname, useRouter } from "next/navigation";

export default function FlowbiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const pathname = usePathname();
  const defaultClsNm = "flex items-center cursor-pointer p-2 text-gray-900 rounded-lg hover:bg-gray-500 group";
  const activeClsNm = "flex items-center cursor-pointer p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-500 group";

  const menuList = [
    {label: "Accordion", value:"accordion"},
    {label: "Alerts", value:"alerts"},
    {label: "Badge", value:"badge"},
    {label: "Breadcrumb", value:"breadcrumb"},
    {label: "Button", value:"button"},
    {label: "Card", value:"card"},
  ];

  return (
    <>
      <Sidebar className="fixed top-[calc(72px)] left-0 z-40 w-64 h-full bg-white transition-transform">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {
              menuList.map((menu:any, idx:number) => {
                return (
                  <Sidebar.Item
                    key={idx}
                    href={`/flowbite/${menu.value}`}
                    className={`${pathname == `/flowbite/${menu.value}` ? `text-white bg-gray-700 hover:text-gray-700 hover:bg-gray-500` : `text-gray-900 hover:bg-gray-300`}`}
                  >
                    <p>{menu.label}</p>
                  </Sidebar.Item>
                );
              })
            }
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="p-4 ml-64">
          {children}
        </div>
      </main>
    </>
  );
}
'use client';

import { usePathname, useRouter } from "next/navigation";

export default function FlowbiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const pathname = usePathname();
  const defaultClsNm = "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-500 group";
  const activeClsNm = "flex items-center p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-500 group";

  const menuList = [
    {label: "Accordion", value:"accordion"},
    {label: "Alerts", value:"alerts"},
    {label: "Badge", value:"badge"},
  ];

  return (
    <>
      <aside id="separator-sidebar" className="fixed left-0 z-40 w-64 h-screen transition-transform">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            {
              menuList.map((menu:any, idx:number) => {
                return (
                  <li key={idx}>
                    <a onClick={() => {router.push(`/flowbite/${menu.value}`)}} className={pathname == `/flowbite/${menu.value}` ? activeClsNm : defaultClsNm}>
                      <span className="ml-3">{menu.label}</span>
                    </a>
                  </li>
                );
              })
            }
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group">
                <span className="ml-4">Upgrade to Pro</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group">
                <span className="ml-3">Documentation</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group">
                <span className="ml-3">Components</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group">
                <span className="ml-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 ml-64">
        {children}
      </div>
    </>
  );
}
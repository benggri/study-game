'use client';

import {useRouter, usePathname} from "next/navigation";
import { Button, Dropdown, Navbar } from 'flowbite-react';

interface MenuType {
  label: string,
  matchUrl: string,
  url?: string,
  children?: MenuType[],
}

export default function MegaMenuComponent() {
  const router = useRouter();
  const pathname = usePathname();

  const flowbiteList = [
    {label: "Accordion", value:"accordion"},
    {label: "Alerts", value:"alerts"},
    // {label: "Badge", value:"badge"},
    {label: "Breadcrumb", value:"breadcrumb"},
    {label: "Button", value:"button"},
    {label: "Card", value:"card"},
    // {label: "Carousel", value:"carousel"},
    {label: "Datepicker", value:"datepicker"},
    {label: "Dropdown", value:"dropdown"},
    {label: "Footer", value:"footer"},
    {label: "KBD", value:"kbd"},
  ];

  const onClickMenu = (url:string) => {
    router.push(url);
  }

  return (
    <>
      <header className="fixed w-full z-[1000]">
        <Navbar fluid rounded border>
          <Navbar.Brand onClick={() => {onClickMenu('/');}} className='cursor-pointer'>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Creator&apos;s Play Ground</span>
          </Navbar.Brand>
          <div className="flex md:order-2 gap-2">
            <Button color="light">Join</Button>
            <Button color="blue">Login</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link 
              onClick={() => {onClickMenu('/');}} 
              className={`${pathname == '/' ? 'text-blue-700' : 'text-gray-900'} cursor-pointer`}
            >
              Home
            </Navbar.Link>
            <Navbar.Link className="curosr-pointer">
              <Dropdown arrowIcon={true} inline 
                label={<span className={`${pathname.startsWith('/javascript') ? 'text-blue-700' : 'text-gray-900'}`}>javascript</span>}
              >
                <Dropdown.Item
                  onClick={() => {onClickMenu(`/javascript/es6`);}} 
                  className={`${pathname.startsWith(`/javascript/es6`) ? 'text-blue-700' : 'text-gray-900'}`}
                >
                  ES6
                </Dropdown.Item>
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link className="curosr-pointer">
              <Dropdown arrowIcon={true} inline 
                label={<span className={`${pathname.startsWith('/nextjs') ? 'text-blue-700' : 'text-gray-900'}`}>Nextjs</span>}
              >
                <Dropdown.Item
                >
                  temp
                </Dropdown.Item>
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link className='cursor-pointer'>
              <Dropdown arrowIcon={true} inline 
                label={<span className={`${pathname.startsWith('/flowbite') ? 'text-blue-700' : 'text-gray-900'}`}>Flowbite</span>}
              >
                {
                  flowbiteList.map((flowbite:any, idx:number) => {
                    return (
                      <Dropdown.Item key={`menu-flowbite-${idx}`} 
                        onClick={() => {onClickMenu(`/flowbite/${flowbite.value}`);}} 
                        className={`${pathname == `/flowbite/${flowbite.value}` ? 'text-blue-700' : 'text-gray-900'}`}
                      >
                        {flowbite.label}
                      </Dropdown.Item>
                    );
                  })
                }
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}
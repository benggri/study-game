'use client';

import {useRouter, usePathname} from "next/navigation";
import { Button, Dropdown, Navbar } from 'flowbite-react';

export default function MegaMenu({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const pathname = usePathname();

  const flowbiteList = [
    {label: "Accordion", value:"accordion"},
    {label: "Alerts", value:"alerts"},
    {label: "Badge", value:"badge"},
    {label: "Breadcrumb", value:"breadcrumb"},
    {label: "Button", value:"button"},
    {label: "Card", value:"card"},
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
            <Navbar.Link onClick={() => {onClickMenu('/');}} className='cursor-pointer' active={pathname == '/' ? true : false}>Home</Navbar.Link>
            <Navbar.Link>
              <Dropdown className={`z-[1000]`} arrowIcon={true} inline label={<span>Flowbite</span>}>
                {
                  flowbiteList.map((flowbite:any, idx:number) => {
                    return (
                      <Dropdown.Item key={`menu-flowbite-${idx}`} onClick={() => {onClickMenu(`/flowbite/${flowbite.value}`);}}>{flowbite.label}</Dropdown.Item>
                    );
                  })
                }
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main className="flex min-h-screen flex-col items-center p-24">
        {children}
      </main>
    </>
  );
}
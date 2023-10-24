'use client';

import { Breadcrumb, Button } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function BreadcrumbPage() {
  return (
    <>
      <Button color="dark" pill className={`mb-2`} href='https://www.flowbite-react.com/docs/components/breadcrumb'>
        <p>https://www.flowbite-react.com/docs/components/breadcrumb</p>
      </Button>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#" icon={HiHome}>
          <p>
            Home
          </p>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Projects
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Flowbite React
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
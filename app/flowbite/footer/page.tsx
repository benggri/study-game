'use client';

import { Footer } from 'flowbite-react';

export default function FooterPage() {

  return (
    <div className=''>
      <div className='w-full mb-2'>
        <Footer container>
          <Footer.Copyright
            by="누군가"
            href="#"
            year={2022}
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    </div>
  );
}
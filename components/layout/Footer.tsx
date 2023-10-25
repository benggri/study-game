'use client';

import { Footer } from 'flowbite-react';

export default function FooterComponent() {
  
  return (
    <div className='fixed bottom-0 w-full'>
      <Footer container>
        <Footer.Copyright
          by="Benggri"
          year={new Date().getFullYear()}
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
  );
}
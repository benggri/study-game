'use client';

import { Accordion, Button } from 'flowbite-react';
import Image from 'next/image';

export default function AccordionPage() {

  return (
    <>
      <Button color="dark" pill className={`mb-2`} href='https://www.flowbite-react.com/docs/components/accordion'>
        <p>https://www.flowbite-react.com/docs/components/accordion</p>
      </Button>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500">
              Check out this guide to learn how to 
              <a className="text-cyan-600 hover:underline">get started</a>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            </p>
            <p className="text-gray-500">
                Check out the
              <a className="text-cyan-600 hover:underline">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are the differences between Flowbite and Tailwind UI?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500">
              <li>
                <a className="text-cyan-600 hover:underline">
                  <p>
                    Flowbite Pro
                  </p>
                </a>
              </li>
              <li>
                <a className="text-cyan-600 hover:underline" rel="nofollow">
                  <p>
                    Tailwind UI
                  </p>
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );

}
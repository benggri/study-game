'use client';

import { Badge, Button } from 'flowbite-react';

export default function BadgePage() {

  return (
    <>
      <Button color="dark" pill className={`mb-2`} href='https://www.flowbite-react.com/docs/components/badge'>
        <p>https://www.flowbite-react.com/docs/components/badge</p>
      </Button>
      <div className="mb-2">
        <h1>Default Badge</h1>
        <Badge color="info">Default</Badge>
        <Badge color="gray">Dark</Badge>
        <Badge color="failure">Failure</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="indigo">Indigo</Badge>
        <Badge color="purple">Purple</Badge>
        <Badge color="pink">Pink</Badge>
      </div>
      <div className="mb-2">
        <h1>Large Badge</h1>
        <Badge color="info" size="sm"><p>Default</p></Badge>
        <Badge color="gray" size="sm"><p>Dark</p></Badge>
        <Badge color="failure" size="sm"><p>Failure</p></Badge>
        <Badge color="success" size="sm"><p>Success</p></Badge>
        <Badge color="warning" size="sm"><p>Warning</p></Badge>
        <Badge color="indigo" size="sm"><p>Indigo</p></Badge>
        <Badge color="purple" size="sm"><p>Purple</p></Badge>
        <Badge color="pink" size="sm"><p>Pink</p></Badge>
      </div>
      <div className="mb-2">
        <h1>Bordered Badge</h1>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Default</span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Dark</span>
        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Red</span>
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Green</span>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Yellow</span>
        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">Indigo</span>
        <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Purple</span>
        <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">Pink</span>
      </div>

    </>
  );

}
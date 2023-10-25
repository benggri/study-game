'use client';

import { Kbd } from 'flowbite-react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowDown, MdKeyboardArrowUp  } from 'react-icons/md';

export default function KBDPage() {

  return (
    <div className='grid gird-cols-1 gap-2'>
      <div className='mb-2 grid grid-cols-4 gap-2'>
        <Kbd>Shift</Kbd>
        <Kbd>Ctrl</Kbd>
        <Kbd>Tab</Kbd>
        <Kbd>Caps Lock</Kbd>
        <Kbd>Esc</Kbd>
        <Kbd>Spacebar</Kbd>
        <Kbd>Enter</Kbd>
      </div>
      <div className='mb-2'>
        <p> Please press <Kbd> Ctrl </Kbd> + <Kbd> Shift </Kbd> + <Kbd> R </Kbd> to re-render an MDN page.</p>
      </div>
      <div className='mb-2'>
        <Kbd icon={MdKeyboardArrowUp} />
        <Kbd icon={MdKeyboardArrowDown} />
        <Kbd icon={MdKeyboardArrowLeft} />
        <Kbd icon={MdKeyboardArrowRight} />
      </div>
    </div>
  );
}
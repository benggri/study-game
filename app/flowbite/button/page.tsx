'use client';

import { Button } from 'flowbite-react';

export default function ButtonPage() {

  return (
    <div className='max-[500px]:mb-24'>
      <Button color="dark" pill className={`mb-2`} href='https://www.flowbite-react.com/docs/components/button'>
        <p>https://www.flowbite-react.com/docs/components/button</p>
      </Button>
      <Button color="dark" pill className={`mb-2`} href='https://www.flowbite-react.com/docs/components/button-group'>
        <p>https://www.flowbite-react.com/docs/components/button-group</p>
      </Button>
      <div className='mb-2'>
        <p className='text-xl'>Button</p>
        <Button>Default</Button>
        <Button color="blue">Blue</Button>
        <Button color="gray">Gray</Button>
        <Button color="dark">Dark</Button>
        <Button color="light">Light</Button>
        <Button color="success">Success</Button>
        <Button color="failure">Failure</Button>
        <Button color="warning">Warning</Button>
        <Button color="purple">Purple</Button>
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Button Group</p>
        <Button.Group>
          <Button color="gray">Profile</Button>
          <Button color="gray">Settings</Button>
          <Button color="gray">Messages</Button>
        </Button.Group>
        <Button.Group outline>
          <Button color="gray">
            Profile
          </Button>
          <Button color="gray">
            Settings
          </Button>
          <Button color="gray">
            Messages
          </Button>
        </Button.Group>
        <Button.Group outline>
          <Button gradientMonochrome="info">
            Profile
          </Button>
          <Button gradientMonochrome="info">
            Settings
          </Button>
          <Button gradientMonochrome="info">
            Messages
          </Button>
        </Button.Group>
        <Button.Group outline>
          <Button gradientDuoTone="cyanToBlue">
            Profile
          </Button>
          <Button gradientDuoTone="cyanToBlue">
            Settings
          </Button>
          <Button gradientDuoTone="cyanToBlue">
            Messages
          </Button>
        </Button.Group>
      </div>
    </div>
  );
}
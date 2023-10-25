'use client';

import { Dropdown } from 'flowbite-react';
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';

export default function DropdownPage() {
  return (
    <div className='grid grid-cols-4 gap-3'>
      <div className='mb-2'>
        <p className='text-xl'>Default dropdown</p>
        <Dropdown label="Dropdown button" dismissOnClick={false}>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Dropdown divider</p>
          <Dropdown label="Dropdown button">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown>
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Dropdown header</p>
          <Dropdown label="Dropdown button">
            <Dropdown.Header>
              <span className="block text-sm">Benggri</span>
              <span className="block truncate text-sm font-medium">benggri@study.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Dropdown items with icon</p>
        <Dropdown label="Dropdown">
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
          <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
          <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Inline dropdown</p>
          <Dropdown label="Dropdown" inline>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Dropdown sizes</p>
        <p className='text-md'>small</p>
        <Dropdown label="Small dropdown" size="sm">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <p className='text-md'>large</p>
        <Dropdown label="Large dropdown" size="lg">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Placement options</p>
        <div className='mb-2'>
          <Dropdown label="Dropdown top" placement="top">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className='mb-2'>
          <Dropdown label="Dropdown right" placement="right">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className='mb-2'>
          <Dropdown label="Dropdown bottom" placement="bottom">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className='mb-2'>
          <Dropdown label="Dropdown left" placement="left">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className='mb-2'>
          <Dropdown label="Dropdown left start" placement="left-start">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className='mb-2'>
          <Dropdown label="Dropdown right start" placement="right-start">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Custom trigger</p>
        <Dropdown label="Custom trigger" dismissOnClick={false} renderTrigger={() => <span>My custom trigger</span>}>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}
'use client';

import { Datepicker, Table } from 'flowbite-react';

export default function DatepickerPage() {
  return (
    <div className='grid grid-cols-4 gap-3 max-[500px]:grid-cols-1'>
      <div className='mb-2'>
        <p className='text-xl'>Default Datepicker</p>
        <Datepicker />
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Localization</p>
        <Datepicker
          labelClearButton="초기화"
          labelTodayButton="오늘"
          language="ko-KR"
        />
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Limit the date</p>
        <Datepicker
          maxDate={new Date("2099-12-31T15:00:00.000Z")}
          minDate={new Date()}
        />
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Title</p>
        <Datepicker title="Datepicker 제목" />
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Autohide</p>
        <p className='text-md'>autoHide를 설정하면 날짜를 선택할 때 자동으로 숨기는 기능을 활성화하거나 비활성화할 수 있습니다.</p>
        <p className='text-sm'>autoHide false</p>
        <Datepicker autoHide={false} />
        <p className='text-sm'>autoHide true</p>
        <Datepicker autoHide={true} />
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Inline</p>
        <Datepicker inline  />
      </div>
      <div className='mb-2'>
        <p className='text-xl'>Week start</p>
        <p className='text-md'>week start : 2</p>
        <Datepicker weekStart={2} />
        <p className='text-md'>week start : 3</p>
        <Datepicker weekStart={3} />
        <Table>
          <Table.Head>
            <Table.HeadCell>Key</Table.HeadCell>
            <Table.HeadCell>Value</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell>0</Table.Cell>
              <Table.Cell>Saturday</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white">
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Sunday</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white">
              <Table.Cell>2</Table.Cell>
              <Table.Cell>Monday</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white">
              <Table.Cell>3</Table.Cell>
              <Table.Cell>Tuesday</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white">
              <Table.Cell>4</Table.Cell>
              <Table.Cell>Wednesday</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white">
              <Table.Cell>5</Table.Cell>
              <Table.Cell>Thursday</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white">
              <Table.Cell>6</Table.Cell>
              <Table.Cell>Friday</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
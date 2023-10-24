'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Card, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

interface loginUserInput {
  userId: string,
  userPwd: string
}

export default function CardPage() {
  const [loginUserInput, setLoginUserInput] = useState<loginUserInput>({'userId':'', 'userPwd':''});
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

  const onChangeLoginInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {name, value} = event.target;
    setLoginUserInput({...loginUserInput, [name] : value});
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginUserInput);
    setOpenLoginModal(true);
  }

  return (
    <>
      <Button color="dark" pill className={`mb-2`} href='https://www.flowbite-react.com/docs/components/card'>
        <p>https://www.flowbite-react.com/docs/components/card</p>
      </Button>
      <div className='grid grid-cols-3 gap-2'>
        <div>
          <Card className="max-w-sm" href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div>
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button>
              <p>Read more</p>
            </Button>
          </Card>
        </div>
        <div>
          <Card className='max-w-sm'>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="user-id" value="Your ID"/>
                </div>
                <TextInput id="user-id" type="email" name={`userId`} value={loginUserInput.userId} onChange={onChangeLoginInput} placeholder="name@domain.com" required/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="user-pwd" value="Your password"/>
                </div>
                <TextInput id="user-pwd" type="password" name={`userPwd`} value={loginUserInput.userPwd} onChange={onChangeLoginInput} required/>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Card>
        </div>
        <div>
          <Card
            className='max-w-sm'
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc="/icons/solid/general/image.svg"
          >
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <p>
                  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </p>
              </h5>
            </a>
            <div className="mb-5 mt-2.5 flex items-center">
              <Image src={`/icons/custom/general/y-star-full.svg`} alt={`full star`} className={`p-0 m-1 w-[calc(18px)] h-[calc(18px)]`} width={18} height={18} />
              <Image src={`/icons/custom/general/y-star-full.svg`} alt={`full star`} className={`p-0 m-1 w-[calc(18px)] h-[calc(18px)]`} width={18} height={18} />
              <Image src={`/icons/custom/general/y-star-full.svg`} alt={`full star`} className={`p-0 m-1 w-[calc(18px)] h-[calc(18px)]`} width={18} height={18} />
              <Image src={`/icons/custom/general/y-star-half.svg`} alt={`full star`} className={`p-0 m-0 w-[calc(18px)] h-[calc(18px)]`} width={18} height={18} />
              <Image src={`/icons/custom/general/g-star.svg`} alt={`blank star`} className={`p-0 m-1 w-[calc(18px)] h-[calc(18px)]`} width={18} height={18} />
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                <p>3.5</p>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                href="#"
              >
                <p>
                  Add to cart
                </p>
              </a>
            </div>
          </Card>
          
        </div>
      </div>
      
      <Modal show={openLoginModal} onClose={() => setOpenLoginModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {loginUserInput.userId}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {loginUserInput.userPwd}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenLoginModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenLoginModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );

}
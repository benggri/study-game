'use client';

import { Alert, Button } from 'flowbite-react';

export default function AlertsPage() {

  return (
    <>
      <Button color="dark" pill className={`mb-2`} href='https://www.flowbite-react.com/docs/components/alert'>
        <p>https://www.flowbite-react.com/docs/components/alert</p>
      </Button>
      <Alert color="info" className={`mb-2`} >
        <span>
          <p>
            <span className="font-medium">
            Info alert!
            </span>
            Change a few things up and try submitting again.
          </p>
        </span>
      </Alert>
      <Alert color="failure" className={`mb-2`} >
        <span>
          <p>
            <span className="font-medium">
              Info alert!
            </span>
            Change a few things up and try submitting again.
          </p>
        </span>
      </Alert>
      <Alert color="warning" className={`mb-2`} rounded>
        <span>
          <p>
            <span className="font-medium">
              Info alert!
            </span>
            Change a few things up and try submitting again.
          </p>
        </span>
      </Alert>
      <Alert color="warning" className={`mb-2`} withBorderAccent>
        <span>
          <p>
            <span className="font-medium">
              Info alert!
            </span>
            Change a few things up and try submitting again.
          </p>
        </span>
      </Alert>
    </>
  );

}
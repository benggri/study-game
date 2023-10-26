'use client';

import { Card } from 'flowbite-react';

export default function NextjsPage() {
  return (
    <div className="p-2 max-[500px]:p-0 max-[500px]:pl-0 pt-24 w-full">
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          <p>
            Introduction
          </p>
        </h5>
        <h4 className="text-xl font-bold tracking-tight text-gray-900">
          <p>
            Next.js 란?
          </p>
        </h4>
        <p className="font-normal text-gray-700">
          Next.js는 풀스택 웹 애플리케이션을 구축하기 위한 React 프레임워크입니다. 
        </p>
        <p className="font-normal text-gray-700">
          React 구성 요소를 사용하여 사용자 인터페이스를 구축하고 Next.js를 사용하여 추가 기능과 최적화를 수행합니다.
        </p>
        <p className="font-normal text-gray-700">
          내부적으로 Next.js는 번들링, 컴파일 등과 같이 React에 필요한 도구를 추상화하고 자동으로 구성합니다. 
        </p>
        <p className="font-normal text-gray-700">
          이를 통해 구성에 시간을 낭비하는 대신 애플리케이션 구축에 집중할 수 있습니다.
        </p>
        <p className="font-normal text-gray-700">
          개인 개발자이든 대규모 팀의 일원이든 Next.js는 대화형의 동적이며 빠른 React 애플리케이션을 구축하는 데 도움을 줄 수 있습니다.
        </p>
      </Card>
    </div>
  );
}
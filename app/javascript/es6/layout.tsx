'use client';

import { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { useRouter, usePathname } from "next/navigation";
import { Breadcrumb, Dropdown } from 'flowbite-react';

interface SectionType {
  label: string,
  href: string,
}

export default function JsEs6Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter(); 
  const pathname = usePathname();

  const sectionList:SectionType[] = [
    {label: 'let, const'               , href: 'let-const'               },
    {label: 'Template literals'        , href: 'template-literals'       },
    {label: 'Multi-line String'        , href: 'multi-line-string'       },
    {label: 'Import, Export'           , href: 'import-export'           },
    {label: 'object literal'           , href: 'object-literal'          },
    {label: 'Arrow Function'           , href: 'arrow-function'          },
    {label: 'Destructuring assignment' , href: 'destructuring-assignment'},
    {label: 'spread operator'          , href: 'spread-operator'         },
    {label: 'Promise'                  , href: 'promise'                 },
    {label: 'map, filter, reduce'      , href: 'map-filter-reduce'       },
    {label: 'Class'                    , href: 'class'                   },
    {label: 'String method'            , href: 'string-method'           },
    {label: 'Default Parameter'        , href: 'default-parameter'       },
    {label: 'Module'                   , href: 'module'                  },
  ];

  const [currentLabel, setCurrentLabel] = useState<SectionType>(sectionList[0]);

  const onClickSection = (section:SectionType) => {
    setCurrentLabel(section);
    router.push(`/javascript/es6#${section.href}`);
  }

  return (
    <div className="pl-12 pt-24 w-full">
      <div className="mb-2">
        <Breadcrumb aria-label="breadcrumb">
        <Breadcrumb.Item onClick={() => {router.push('/')}} icon={HiHome} className="cursor-pointer"><p>Home</p></Breadcrumb.Item>
          <Breadcrumb.Item>JavaScript</Breadcrumb.Item>
          <Breadcrumb.Item>ES6</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Dropdown arrowIcon={true} inline label={<span className='text-blue-700'>{currentLabel.label}</span>}>
              {
                sectionList.map((section:SectionType, idx:number) => {
                  return (
                    <Dropdown.Item
                      key={idx}
                      onClick={() => {onClickSection(section);}} 
                      className={`${currentLabel.href == `${section.href}` ? 'text-blue-700' : 'text-gray-900'}`}
                    >
                      {section.label}
                    </Dropdown.Item>
                  );
                })
              }
            </Dropdown>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {children}
    </div>
  );
}
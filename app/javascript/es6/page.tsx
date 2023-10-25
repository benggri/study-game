'use client';

import { Accordion, Alert, Blockquote } from 'flowbite-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import {getLetConst, 
        getTemplateLiterals, 
        getMultiLineString, 
        getImportExport, 
        getObjectliteral, 
        getArrowFunction, 
        getDestructuringAssignment,
        getSpreadOperator,
        getPromise,
        getMapFilterReduce,
        getClass,
        getStringMethod,
        getDefaultParameter,
        getModule,
} from '@/components/javascript/es6/JsEs6Contents';

export default function JsES6Page() {

  return (
    <div className='items-center mb-20'>
      <Accordion className='w-2/3'>
        <Accordion.Panel id='let-const'>
          <Accordion.Title>let, const</Accordion.Title>
          <Accordion.Content>{getLetConst()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='template-literals'>
          <Accordion.Title>Template literals</Accordion.Title>
          <Accordion.Content>{getTemplateLiterals()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='multi-line-string'>
          <Accordion.Title>Multi-line String</Accordion.Title>
          <Accordion.Content>{getMultiLineString()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='import-export'>
          <Accordion.Title>Import, Export</Accordion.Title>
          <Accordion.Content>{getImportExport()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='object-literal'>
          <Accordion.Title>object literal</Accordion.Title>
          <Accordion.Content>{getObjectliteral()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='arrow-function'>
          <Accordion.Title>Arrow Function</Accordion.Title>
          <Accordion.Content>{getArrowFunction()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='destructuring-assignment'>
          <Accordion.Title>Destructuring assignment</Accordion.Title>
          <Accordion.Content>{getDestructuringAssignment()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='spread-operator'>
          <Accordion.Title>spread operator</Accordion.Title>
          <Accordion.Content>{getSpreadOperator()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='promise'>
          <Accordion.Title>Promise</Accordion.Title>
          <Accordion.Content>{getPromise()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='map-filter-reduce'>
          <Accordion.Title>map, filter, reduce</Accordion.Title>
          <Accordion.Content>{getMapFilterReduce()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='class'>
          <Accordion.Title>Class</Accordion.Title>
          <Accordion.Content>{getClass()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='string-method'>
          <Accordion.Title>String method</Accordion.Title>
          <Accordion.Content>{getStringMethod()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='default-parameter'>
          <Accordion.Title>Default Parameter</Accordion.Title>
          <Accordion.Content>{getDefaultParameter()}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel id='module'>
          <Accordion.Title>Module</Accordion.Title>
          <Accordion.Content>{getModule()}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
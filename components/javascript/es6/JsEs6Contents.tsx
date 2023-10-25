import { Accordion, Alert, Blockquote } from 'flowbite-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const getLetConst = () => {
  return (
    <>
      <p className='text-md font-bold'>var</p>
      <Alert color="info" className={`mb-2`} >
        <span><p>재선언, 재할당 가능한 선언 키워드</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`var str='a';
console.log(str); // a

str='b';
console.log(str); // b

var str='c';
console.log(str); // c`}
        </SyntaxHighlighter>
      </div>
      <p className='text-md font-bold'>let</p>
      <Alert color="warning" className={`mb-2`} >
        <span><p>재선언 불가, 재할당 가능한 선언 키워드</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`let str='a';
console.log(str); // a

str='b';
console.log(str); // b

let str='c';
// Uncaught SyntaxError: Identifier 'str' has already been declared`}
        </SyntaxHighlighter>
      </div>
      <p className='text-md font-bold'>const</p>
      <Alert color="failure" className={`mb-2`} >
        <span><p>재선언 불가, 재할당 불가한 상수 키워드</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`const str='a';
console.log(str); // a
str='b';
// Uncaught TypeError: Assignment to constant variable.`}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export const getTemplateLiterals = () => {
  return (
    <>
    <Alert color="info" className={`mb-2`} >
      <span><p>`(back tick)으로 사용할 수 있다</p></span>
      <span><p>${"{}"} 를 통해 javascript 표현식 사용이 가능하다</p></span>
    </Alert>
    <div className='text-sm'>
      <SyntaxHighlighter language="javascript" style={docco}>
      {`// ES5
var str1=', ';
var str2='World!';
var str3='Hello ' + str1 + str2;

// ES6
let str1=', ';
let strt2='World!';
let str3=\`Hello ${"{str1}"} ${"{str2}"}\`;`}
      </SyntaxHighlighter>
    </div>
  </>
  );
}

export const getMultiLineString = () => {
  return (
    <>
      <Alert color="info" className={`mb-2`} >
        <span><p>문자열이 라인을 넘어가게 되면 \n 과 덧셈 연산자를 사용했어야했다.</p></span>
        <span><p>백틱을 사용하게 되면서 여러줄의 문자열 관리도 편해졌다.</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`// ES5
    var str = 'asdhasfhfsahsfhfshasfhsfahsfahsfahasfh.\\n' 
            + 'mxmxmxmxmxmxmxmmxmxmxmxmxmmxmxmxmxmxm.\\n';
    // ES6
    let str = \`asdhasfhfsahsfhfshasfhsfahsfahsfahasfh
    mxmxmxmxmxmxmxmmxmxmxmxmxmmxmxmxmxmxm\`;`}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export const getImportExport = () => { 
  return (
    <>
      <Alert color="info" className={`mb-2`} >
        <span><p>ES6에서 새롭게 지원하는 컴포넌트 정의를 위한 모듈 형태를 사용하기 위해 모듈을 내보내고(export) 가져오는(import) 방법</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`// export_detail.js
// export 키워드로 내보내기 한다
export default function detail(name, age) {
    return \`안녕 ${"{name}"}, 너의 나이는 ${"{age}"}살 이다!\`;
}
 
// import_master.js
import detail from './export_detail'; // 가져오기

console.log(detail('영희', 20));
// 출력 => 안녕 영희, 너의 나이는 20살 이다!`}
        </SyntaxHighlighter>
      </div>
    </>
  ); 
}

export const getObjectliteral = () => { 
  return (
    <>
      <p className='text-md font-bold'>Object</p>
      <Alert color="info" className={`mb-2`} >
        <span><p>javascript 는 Object 기반 프로그래밍 언어로 원시 값을 제외한 나머지 값은 모두 Object 이다.</p></span>
        <span><p>Object 는 0개 이상의 Property 로 구성된 집합으로 Property 는 key 와 value 로 구성된다.</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`// Property
// Object 의 상태를 나타내는 값
var obj={
    name: 'kim', // Property
    age : 23     // Property
//  key : value

// method
// Property 의 값이 함수일 경우에는 method 라 부른다
// Property 를 참조하고 조작할 수 있는 행위
var obj={
  num : 5, // Property
  decrease : function() { // method
      this.num--;
  }
}
}`}
        </SyntaxHighlighter>
      </div>
      <p className='text-md font-bold'>Object Literal</p>
      <Alert color="info" className={`mb-2`} >
        <span><p>literal 은 사람이 이해할 수 있는 문자나 약속된 기호를 사용해 값을 생성하는 표기법</p></span>
        <span><p>javascript 에서 객체를 생성하는 가장 일반적인 방법이 object literal 을 사용하는 것이다</p></span>
        <span><p>object literal 의 {"{}"} 는 code block 을 의미하는 것이 아니라 값으로 평가되기 때문에 닫는 괄호 뒤에 세미콜론(;)을 붙인다</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`// Object Literal
var me = {
  name : 'Kim',
  intro : function() {
    console.log(\`My name is ${"{this.name}"}\`);
  }
};

console.log(typeof me); // object
console.log(me); // { name: 'Kim', intro: [Function: intro] }

// Property
var obj={
  name: 'kim', // Property
  age : 23     // Property
//  key : value
}
// Property 키(key) : 빈 문자열 포함 모든 string 또는 symbol 값
// Property 값(value) : javascript 에서 사용할 수 있는 모든 값
// Property 키는 Property 값에 접근할 수 있는 이름으로서 식별자 역할을 하는데, 
// 식별자 네이밍 규칙을 준수한다면 따옴표를 생략할 수 있으나 그렇지 않은 경우 반드시 따옴표''를 사용해야 한다. 
// (가급적이면 식별자 네이밍 규칙을 따르는 프로퍼티 키를 사용하는 것이 좋다.)

// 또한 이미 존재하는 Property 키를 중복 선언하면 나중에 선언한 Property 가 이전의 것을 덮어쓰며 에러도 발생하지 않는다.
var me = {
  name : 'Kim',
  name : 'Yoo'
};
 
console.log(me.name); // Yoo

// method
// javascript 의 함수는 객체라서 값으로 취급할 수 있기 때문에 Property 값으로도 사용할 수 있다.
var square = {
  side: 4, // 한 변의 길이
 
  getArea: function() { // 사각형 넓이 구하는 함수
    return this.side * this.side; // this는 객체 자신을 가리키는 참조 변수
  }
};
console.log(square.getArea()); // 16

// Property 접근
var me = {
  name: 'Kim'
};
 
// 마침표 표기법(dot notation)
// 마침표 Property 접근 연산자(.) 사용
console.log(me.name); // Kim

// 대괄호 표기법(bracket notation)
// 대괄호 Property 접근 연산자([ ]) 사용
console.log(me['name']); // Kim

// not exist
console.log(me.birth); // undefined

// 대괄호 표기법을 사용할 때는 접근 연산자 내부에 지정하는 Property 키는 반드시 따옴표로 감싼 문자열이어야 한다.
// object 에 존재하지 않는 Property 에 접근하면 undefined를 반환한다.`}
        </SyntaxHighlighter>
      </div>
    </>
  ); 
}
export const getArrowFunction = () => { 
  return (
    <>
      <Alert color="info" className={`mb-2`} >
        <span><p>함수 표현식을 화살표 함수로 표현할 수 있다</p></span>
        <span><p>화살표 함수가 추가되어 함수를 간결하게 나타낼 수 있게 되어 가독성 및 유지 보수성이 올라갔다</p></span>
        <span><p>만약 함수의 본문에 return 만 있는 경우 화살표 함수는 return 과 {} 를 생략할 수 있다. (단, 같이 생략해야한다.)</p></span>
        <span><p>return 문에서는 소괄호를 사용가능하다</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`// ES5
function plusFn(a, b) {
  return a + b;
}
// ES6
// 함수 표현식 - 화살표 함수
const plusFn = (a, b) => {
  return a + b;
}
// 함수 표현식 - 화살표 함수 (생략형)
const plusFn = (a, b) => a + b;`}
        </SyntaxHighlighter>
      </div>
    </>
  ); 
}
export const getDestructuringAssignment = () => { 
  return (
    <>
      <Alert color="info" className={`mb-2`} >
        <span><p>구조분해할당이란 펼치다라는 뜻으로 Object 나 배열에서 사용하며, 값을 해체한 뒤 개별 값을 변수에 새로 할당하는 과정을 말한다.</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`// 배열에서 Spread 사용
const arr = [1, 2, 3];
const [one, two, three] = arr;
one // 1
two // 2
three // 3
// 객체에서 Spread 사용
const obj = {
 firstName: '이름',
 lastName: '성'
};
const { firstName, lastName } = obj;
console.log(firstName); // 이름
console.log(lastName); // 성`}
        </SyntaxHighlighter>
      </div>
    </>
  ); 
}
export const getSpreadOperator = () => { 
  return (
    <>
      <Alert color="info" className={`mb-2`} >
        <span><p>반복 가능한(iterable) 객체에 적용할 수 있는 문법이다.</p></span>
        <span><p>배열이나 문자열 등을 아래처럼 풀어서 요소 하나 하나로 전개시킬 수 있다.</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`const arr = [1, 2, 3, 4, 5];
const str = "string";
console.log(...arr); // 1 2 3 4 5
console.log(...str); // "s" "t" "r" "i" "n" "g"`}
        </SyntaxHighlighter>
      </div>
      <p className='text-md font-bold'>Object Spread Properties - ES2018에서 새롭게 추가</p>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`// 어떤 한 객체의 프로퍼티를 다른 새로운 객체에 복사할 때에도 ...가 유용하게 사용된다.
// 사실 Object 자체는 iterable 객체가 아니며, 아래와 같이 사용하면 에러가 발생한다.
const obj = { name: 'John', age: '20' };
console.log(...obj); // TypeError: obj is not iterable

// 위와 같은 방식이 아니라, ES2018(ES9) 에서는 객체의 프로퍼티를 전개할 수 있도록 지원하고 있으며 아래와 같이 객체 내부에서 사용할 수 있다.
const obj1 = { name: 'John', age: '20' };
const obj2 = { name: 'Tom', age: '23' };
 
const clonedObj1 = { ...obj1 };
// Object { name: 'John', age: '20 }
 
const mergedObj = { ...obj1, ...obj2 };
// Object { name: 'John', age: '20', name: 'Tom', age: '23' }

// 위에서 clonedObj1은 obj1의 프로퍼티만 복사받은 객체다.
// 따라서 두 객체의 참조값 자체는 다르다.

console.log(obj1 === clonedObj1); // false

// ... 연산자의 성질은 상태의 불변성 유지에도 응용된다.
// 기존에 메모리에 담겨 있던 값이 다시 변경되지 않는 것을 말하며, 이 불변성을 유지함으로써 상태 변화를 빠르게 탐지할 수 있다.
// 예를 들어 obj1의 name 프로퍼티만 변경하고 싶은 경우, 아래와 같이 사용하면 됩니다.

const obj1 = { name: 'John', age: '20', flag: 'true', foo: 'bar' };
const newObj = { ...obj1, name: 'Alice' };
// Object { name: 'Alice', age: '20', flag: 'true', foo: 'bar' }
 
console.log(obj1 === newObj); // false

// newObj의 선언부를 확인해 보면, 객체 내부에서 obj1의 프로퍼티를 전달받고 그 뒤에 name: 'Alice'를 적어서 name의 값만 바꾸고 있습니다.
// 이렇게 하면 복사받은 값에서 이처럼 뒤에 적은 name 값만 변경(덮어씌우는)하는 효과를 가집니다.
// 그리고 obj1과 newObj는 서로 다른 객체가 됩니다.
// 만약 이것을 name 상태값이 변했다는 상황으로 대입해 본다면, 
// 이처럼 이전 상태를 가진 객체(obj1)와 다음 상태를 가진 객체(newObj)가 서로 다르다는(false) 성질을 활용해 상태가 변화했음을 감지할 수 있게 됩니다.
// 또한 기존의 obj1은 변경하지 않았으므로 불변성을 유지한 것입니다.`}
        </SyntaxHighlighter>
      </div>
    </>
  ); 
}
export const getPromise = () => { 
  return (
    <>
    </>
  ); 
}
export const getMapFilterReduce = () => { 
  return (
    <>
    </>
  ); 
}
export const getClass = () => { 
  return (
    <>
    </>
  ); 
}
export const getStringMethod = () => { 
  return (
    <>
      <Alert color="info" className={`mb-2`} >
        <span><p>포함되어있는지(includes), 시작하는지(startsWith), 끝나는지(endsWith)</p></span>
        <span><p>boolean 타입을 return 해준다.</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`const str = 'Hello World Hanamon';
str.includes("Hana"); // true
str.startsWith("Hello"); // true
str.endsWith("mon"); // true`}
        </SyntaxHighlighter>
      </div>
    </>
  ); 
}
export const getDefaultParameter = () => { 
  return (
    <>
      <Alert color="info" className={`mb-2`} >
        <span><p>기존에는 함수의 매개변수에 초기화를 하려면 내부 작업이 필요했으나, ES6 에서는 필요 없어졌다.</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`// ES5
function myFn(a, b) {
  var a = a || 100;
    var b = b || 200;
  return a + b;
}
console.log(myFn(100)); // 300
// ES6
const myFn = (a = 100, b = 200) => a + b;
console.log(myFn()); // 300`}
        </SyntaxHighlighter>
      </div>
    </>
  ); 
}
export const getModule = () => { 
  return (
    <>
      <Alert color="info" className={`mb-2`} >
        <span><p>모듈이란, 재사용하기 위한 코드 조각을 뜻하며, 세부사항은 캡슐화 시키고, API 부분만 외부에 노출시킨 코드이다.</p></span>
        <span><p>type에 module을 추가시키고 확장자를 mjs로 변경하여 사용한다.</p></span>
        <span><p>모듈은 모듈 스코프를 가지며, import와 export 키워드를 이용하여 사용한다.</p></span>
      </Alert>
      <div className='text-sm'>
        <SyntaxHighlighter language="javascript" style={docco}>
        {`<script type="module" src="lib.mjs"></script>`}
        </SyntaxHighlighter>
      </div>
    </>
  ); 
}
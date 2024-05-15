import React, { useState } from 'react';
import './Sample.css';

const Sample = () => {
  const [names, setNames] = useState([]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(1); //새로운 항목 추가 시 id 부여해줌
  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    if(!stacks.includes(inputText)){
      alert("위에 것들 중에 써라")
      return;
    }

    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해줌
    setNames(nextNames); //names 값 업데이트
    setInputText(''); // iinput 초기화
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };


  const stacks = ['Java', 'Spring', 'Vue', 'Mysql', 'Swift', 'Python', 'React', 'Kotlin'];
//gpt 형은 이거 없애도 된다는데(아래 stacks_array 있어서) 근데 이거 없애니까 위에 문제 생김

  const stacks_array = [
    {
      name: "React",
      img: process.env.PUBLIC_URL + "/images/React.png",
    },
    {
      name: "Java",
      img: process.env.PUBLIC_URL + "/images/Java.png",
    },
    {
      name: "Kotlin",
      img: process.env.PUBLIC_URL + "/images/Kotlin.png",
    },
    {
      name: "Mysql",
      img: process.env.PUBLIC_URL + "/images/Mysql.png",
    },
    {
      name: "Python",
      img: process.env.PUBLIC_URL + "/images/Python.png",
    },
    {
      name: "Spring",
      img: process.env.PUBLIC_URL + "/images/Spring.png",
    },
    {
      name: "Swift",
      img: process.env.PUBLIC_URL + "/images/Swift.png",
    },
    {
      name: "Vue",
      img: process.env.PUBLIC_URL + "/images/Vue.png",
    },
  ];

  const handleStackClick = (stack) => {
    setInputText(stack);
  };

  //const stackImage = inputText ? stacks_array.find(stack => stack.name === inputText)?.img : null;

  const stacksList = stacks_array.map((stack, index) => {
    <li key = {index} onClick = {() => handleStackClick(stack.name)}>{stack.name}</li>
  });

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      <img src={stacks_array.find(stack => stack.name === name.text)?.img} alt={name.text} />
    </li>
  )); //이거는 결국 gpt씀......(사진으로 띄우기)


  return (
    <>
    <h1>등록가능한 스택 이름(대문자까지 일치해야함)</h1>
    <ul id="stacksList">
      <li>Java</li>
      <li>Spring</li>
      <li>Vue</li>
      <li>Mysql</li>
      <li>Swift</li>
      <li>Python</li>
      <li>React</li>
      <li>Kotlin</li>
      </ul>
      <ul>{stacksList}</ul>
      <div id="inputandadd">
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      </div>
      <ul id="namesList">{namesList}</ul>
    </>
  );
};

export default Sample;
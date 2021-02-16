import React, { useState , useRef } from 'react';

function InputSample() {
  const style = {
    margin : 20,
    fontSize : '20px'
  };
  // const [name , setName] = useState('');
  // const [nickName , setNickName] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const nameInput = useRef();

  const { name , nickname } = inputs; // 비구조화 할당을 통해 값 추출

  // const onChangeName = (event) => {
  //   setName(event.target.value);
  // }; 
  // const onChangeNickName = (event) => {
  //   setNickName(event.target.value);
  // }

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  // const onClick = () => {
  //   setName('');
  //   setNickName('');
  // };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
    nameInput.current.focus(); //.current 값은 우리가 원하는 DOM
  };
  
  return (
    <div style={ style }>
      <input 
        name="name" 
        placeholder="名前" 
        onChange={onChange} 
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="ニックネーム"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>初期化</button>
      <div>
        <b>値: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
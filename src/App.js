import React, { useRef, useState }from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs , setInputs] = useState({
    username: '',
    email: ''
  });

  const {username , email} = inputs;
  const onChange = e => {
    const { name , value } = e.target; //e.target : name, value 이벤트가 발생한 DOM 인 input DOM
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const [users, setUsers] = useState([
    {id: 1 , 
    username: 'jinhyeok' ,
    email:'jinhyeok@gmail.com',
    active: true
    },
    {id: 2 ,
    username: 'test',
    email:'test@test.com',
    active: false
    },
    {id: 3 ,
    username: 'hello',
    email:'hello@hello.com',
    active: false
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id:nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));
    //setUsers([...users, user]);
    
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user => 
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        />
      <UserList users={ users } onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;

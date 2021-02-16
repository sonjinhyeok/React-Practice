import React from 'react';

function CreateUser({username, email, onChange, onCreate}) {
    return(
        <div>
            <input 
            name="username"
            placeholder="nickname"
            onChange={onChange}
            value={username}
            />
            <input 
            name="email"
            placeholder="email"
            onChange={onChange}
            value={email}
            />
            <button onClick={onCreate}>登録</button>
        </div>
    );
}

export default CreateUser;

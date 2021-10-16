import React, { useState } from "react";

const CreateUser = ({createUser, refetch}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");

  const handleClick = ()=>{
    const ageInInt = Number(age)
    createUser({
        variables:{input:{name,username,age:ageInInt,nationality}}
    })
    refetch()
    
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="UserName"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nationality"
        onChange={(e) => setNationality(e.target.value.toUpperCase())}
      />
      <br />
      <button onClick={handleClick}>Create User</button>
    </div>
  );
};

export default CreateUser;

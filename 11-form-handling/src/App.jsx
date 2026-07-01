import React from 'react'
import { useState } from 'react';


const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <button>Submit</button>
    </form>
  );
}

export default App

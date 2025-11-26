// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//          <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//         </div>
//     </>
//   )
// }

// export default App
//////////

import { useState } from "react";
import "./App.css";

// Import your components
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-sm flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold underline text-center mb-4">
          Login
        </h1>

        <AuthInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <AuthInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <AuthButton text="Login" type="submit" />
      </form>
    </div>
  );
}

export default App;


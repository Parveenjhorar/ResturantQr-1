import { useState } from "react";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 Backend Integration Placeholder
    // dispatch(loginUser(formData));
    console.log("LOGIN DATA -->", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl px-8 py-6 w-full max-w-md space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <AuthInput 
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <AuthInput 
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <AuthButton text="Login" />

        <p className="text-sm text-center">
          Don’t have an account?
          <a href="/register" className="text-black font-semibold">
            {" "}Register
          </a>
        </p>
      </form>
    </div>
  );
}

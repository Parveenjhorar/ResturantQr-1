import { useState } from "react";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
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
    // dispatch(registerUser(formData));
    console.log("REGISTER DATA -->", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl px-8 py-6 w-full max-w-md space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">Register</h1>

        <AuthInput 
          label="Full Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

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

        <AuthButton text="Register" />

        <p className="text-sm text-center">
          Already have an account?
          <a href="/login" className="text-black font-semibold">
            {" "}Login
          </a>
        </p>
      </form>
    </div>
  );
}


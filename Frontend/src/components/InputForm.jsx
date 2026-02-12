import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({setIsOpen}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("")

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      console.log("Signup:", { name, email, password });
    } else {
      console.log("Login:", { email, password });
    }

    let endpoint = (isSignUp) ? "signup" : "login"

    await axios.post(`http://localhost:5000/${endpoint}`, {email, password, name})
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        setIsOpen()
    })
    .catch(data=>setError(data.response?.data?.error));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">

      <h2 className="text-2xl font-bold mb-6 text-center">
        {isSignUp ? "Create Account" : "Login to Your Account"}
      </h2>

      <form onSubmit={handleOnSubmit}>

        {/* NAME FIELD (ONLY FOR SIGNUP) */}
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-orange-500"
            />
          </div>
        )}

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-orange-500"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-orange-500"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          {isSignUp ? "Sign Up" : "Login"}
        </button>

        {/* TOGGLE TEXT */}
        <p className="mt-4 text-center text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}

          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-orange-500 cursor-pointer ml-1"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>

      </form>
    </div>
  );
};

export default InputForm;

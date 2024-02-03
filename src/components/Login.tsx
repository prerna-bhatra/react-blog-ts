import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  //hooks
  const dispatch = useDispatch();
  
   const [count , setCount]= useState(0)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
// console.log("formData",formData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFormData({
    //   ...formData,
    //   ["email"]:
    //    "alok@gmail.com",
    // });
    setCount(1)
    // count=1
// console.log("targetname",e.target.name,"targetvalue",e.target.value);
    // formData["email"]="alok@gmail.com"
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3005/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful signup
        console.log('User login successfully!');
       
        const logindata = await response.json();

        console.log("logindata",logindata);

        // with redux
        dispatch(setToken(logindata.token));
        navigate("/")


        // without redux
        // localStorage.setItem("logindata.token")

        
        // console.log("response",response.json());
        
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Error during signup:', await response.json());
        window.alert("Login Failed")
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 max-w-md rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login Form</h2>
      <form onSubmit={handleSubmit}>
    
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

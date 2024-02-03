import React, { useState } from "react";
import { useSelector } from "react-redux";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const AddBlog: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);
  //hooks
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    file: "",
    description: "",
  });
  console.log("formData", formData);
  const handleChange = (e: any) => {
    
    console.log({name:e.target.name});
    
    setCount(1);
    if (e.target.name === "file") {
      console.log("IF CONDITION");
      
      const fileVal = e.target.files[0];

      setFormData({
        ...formData,
        [e.target.name]: fileVal,
      });
    } else {

      console.log("ELSE");
      

      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formValuesData = new FormData();
    // formValuesData.append('file',formData.file)
    // formValuesData.append('title',formData.title)
    // formValuesData.append('description',formData.description)

    try {
      const response = await fetch("http://localhost:3005/blog/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // file:formData.file,
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful signup
        console.log("User signed up successfully!");
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error("Error during signup:", await response.json());
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 max-w-md rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form className="text-left" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="name"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            file:
          </label>
          <input
            type="file"
            id="email"
            name="file"
            value={formData.file}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-1"
          >
            Description:
          </label>
          <input
            type="text"
            id="password"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddBlog;

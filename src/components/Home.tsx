import React, { useEffect, useState } from "react";

interface Blog {
  title: string;
  description: string;
  image: string;
}

const Home = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3005/blog/read-blog"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log({ data });

        setBlogData(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  console.log({ blogData });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Blog List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog:Blog) => (
          <li key={blog.title} className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <img className="mt-4 w-full h-auto" src={blog.image} alt={blog.title} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

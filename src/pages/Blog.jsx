import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
        setErrorMsg("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="p-6 md:p-10 bg-gray-50 min-h-screen grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="space-y-4 animate-pulse bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-4 mt-4"></div>
            <div className="h-3 bg-gray-200 rounded mx-4"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6 mx-4 mb-4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen mt-26">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
      >
        TOP BLOGS
      </motion.h1>

      {errorMsg && (
        <div className="bg-red-200 text-red-800 p-3 rounded mb-6 text-center">
          {errorMsg}
        </div>
      )}

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No blogs available.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden border-l-4 border-gradient-to-br from-blue-600 to-green-500 hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <div className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {blog.content.length > 150
                      ? blog.content.substring(0, 150) + "..."
                      : blog.content}
                  </p>
                </div>

                {blog.link && (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg hover:from-green-500 hover:to-blue-600 transition font-medium text-sm sm:text-base"
                  >
                    Read More
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

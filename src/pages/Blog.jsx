import React, { useState, useEffect } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();

        const normalizedBlogs = data.map((blog) => ({
          ...blog,
          image: blog.image || "",
        }));

        setBlogs(normalizedBlogs);
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
            role="status"
            className="space-y-4 animate-pulse bg-white shadow rounded overflow-hidden"
          >
            <div className="flex items-center justify-center w-full h-40 sm:h-44 lg:h-48 bg-gray-200">
              <svg
                className="w-11 h-11 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
            </div>
            <div className="p-4">
              <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-2 bg-gray-200 rounded mb-2"></div>
              <div className="h-2 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-6 sm:mt-26 mt-22 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Articles</h2>

      {errorMsg && (
        <div className="bg-red-200 text-red-800 p-2 rounded mb-4">{errorMsg}</div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow rounded overflow-hidden hover:scale-105 transform transition duration-300"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 sm:h-44 lg:h-42 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg">{blog.title}</h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                {blog.content.length > 120
                  ? blog.content.substring(0, 120) + "..."
                  : blog.content}
              </p>
              {blog.link && (
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 block text-sm sm:text-base"
                >
                  Read More
                </a>
              )}
            </div>
          </div>
        ))}

        {blogs.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No blogs available.
          </p>
        )}
      </div>
    </div>
  );
}

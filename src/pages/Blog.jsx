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
      <div className="p-6 text-center text-gray-600">
        Loading articles...
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="p-6 text-center bg-red-100 text-red-700 rounded">
        {errorMsg}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Latest Articles
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            {blog.image && (
              <img
                src={`${import.meta.env.VITE_API_URL}${blog.image}`}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-xl mb-2">{blog.title}</h3>

              <p className="text-gray-700 mb-4 flex-1">
                {blog.content.length > 150
                  ? blog.content.substring(0, 150) + "..."
                  : blog.content}
              </p>

              {blog.link && (
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-auto"
                >
                  Read More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

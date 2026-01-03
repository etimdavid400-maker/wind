import React, { useState, useEffect } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

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
      <div className="p-6 text-center">
        Loading articles...
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">
        Latest Articles
      </h2>

      {errorMsg && (
        <div className="bg-red-200 text-red-800 p-2 rounded mb-4">
          {errorMsg}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow rounded overflow-hidden"
          >
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="h-40 w-full object-cover"
              />
            )}

            <div className="p-4">
              <h3 className="font-bold text-lg">{blog.title}</h3>

              <p className="text-gray-700 mt-2">
                {blog.content.length > 120
                  ? blog.content.substring(0, 120) + "..."
                  : blog.content}
              </p>

              {blog.link && (
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 block"
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

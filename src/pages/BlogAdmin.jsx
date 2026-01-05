import React, { useState, useEffect } from "react";

export default function BlogAdmin({ user }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  if (!user) return <p>Please log in to manage blogs.</p>;

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* -------------------- CREATE BLOG -------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!title || !content) return setError("Title and content are required.");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, link }),
      });

      const data = await res.json();

      if (!res.ok) setError(data.message || "Failed to create blog.");
      else {
        setMessage("Blog created successfully!");
        setTitle("");
        setContent("");
        setLink("");
        fetchBlogs();
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    }
  };

  /* -------------------- DELETE BLOG -------------------- */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete blog");
      setBlogs(blogs.filter((b) => b._id !== id));
      setMessage("Blog deleted successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to delete blog.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10">
      {/* --- CREATE BLOG --- */}
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Blog title"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full border rounded px-3 py-2"
            placeholder="Blog content"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">External Link (optional)</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="https://..."
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Create Blog
        </button>
      </form>

      {message && <p className="text-green-600 mt-2">{message}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}

      {/* --- BLOG LIST --- */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
        {loading ? (
          <p>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li
                key={blog._id}
                className="flex justify-between items-center p-4 border rounded"
              >
                <div>
                  <h3 className="font-semibold">{blog.title}</h3>
                  <p className="text-gray-600 text-sm">{blog.content.substring(0, 60)}...</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

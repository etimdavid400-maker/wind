import React, { useState } from "react";

export default function BlogAdmin({ user }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    `${import.meta.env.VITE_API_URL}/public/image1.jpg`
  );
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!user) return <p>Please log in to manage blogs.</p>;

  const images = [
    "image1.jpg",
    "image2.png",
    "image3.jpg",
    "image4.jpg",
    "image5.png",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!title || !content) {
      return setError("Title and content are required.");
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, link, selectedImage }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to create blog.");
      } else {
        setMessage("Blog created successfully!");
        setTitle("");
        setContent("");
        setLink("");
        setSelectedImage(`${import.meta.env.VITE_API_URL}/public/image1.jpg`);
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="blog-title" className="block font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            id="blog-title"
            name="title"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Blog title"
          />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="blog-content" className="block font-semibold mb-1">
            Content
          </label>
          <textarea
            id="blog-content"
            name="content"
            autoComplete="off"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full border rounded px-3 py-2"
            placeholder="Blog content"
          />
        </div>

        {/* External Link */}
        <div>
          <label htmlFor="blog-link" className="block font-semibold mb-1">
            External Link (optional)
          </label>
          <input
            type="url"
            id="blog-link"
            name="link"
            autoComplete="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="https://..."
          />
        </div>

        {/* Select Image */}
        <div>
          <label className="block font-semibold mb-1">Select Image</label>
          <div className="flex gap-2 flex-wrap">
            {images.map((img) => {
              const imgUrl = `${import.meta.env.VITE_API_URL}/public/${img}`;
              return (
                <img
                  key={img}
                  src={imgUrl}
                  alt={`blog option ${img}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                    selectedImage === imgUrl
                      ? "border-green-600"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(imgUrl)}
                />
              );
            })}
          </div>
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
    </div>
  );
}

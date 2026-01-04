import React, { useState } from "react";

export default function BlogAdmin({ user }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [selectedImage, setSelectedImage] = useState("/blog-images/image1.jpg");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!user) return <p>Please log in to manage blogs.</p>;

  const images = [
    "/blog-images/image1.jpg",
    "/blog-images/image2.jpg",
    "/blog-images/image3.jpg",
    "/blog-images/image4.jpg",
    "/blog-images/image5.jpg",
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
        setSelectedImage(images[0]);
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

        <div>
          <label className="block font-semibold mb-1">Select Image</label>
          <div className="flex gap-2 flex-wrap">
            {images.map((img) => (
              <img
                key={img}
                src={`${import.meta.env.VITE_API_URL}${img}`}
                alt="blog option"
                className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                  selectedImage === img ? "border-green-600" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
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

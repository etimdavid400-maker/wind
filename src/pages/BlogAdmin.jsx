// src/pages/BlogAdmin.jsx
import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function BlogAdmin({ user }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!user) return <p>Please log in to manage blogs.</p>;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
    setError("");
  };

  const handleUpload = async () => {
    if (!file) return setError("Please select a file first.");
    const fileRef = ref(storage, `blog-images/${Date.now()}-${file.name}`);

    try {
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setMessage("Image uploaded successfully! URL: " + url);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 mt-4">Blog Admin</h2>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Upload Image
      </button>
      {message && <p className="text-green-600 mt-2">{message}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

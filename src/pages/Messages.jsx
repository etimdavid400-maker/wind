import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API_URL}/api/contact`);
      const data = await res.json();
      setMessages(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setMessages([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const res = await fetch(`${API_URL}/api/contact/${id}`, { method: "DELETE" });
      if (res.ok) setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleRead = async (id, currentStatus) => {
    try {
      const res = await fetch(`${API_URL}/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: !currentStatus }),
      });
      if (res.ok)
        setMessages((prev) => prev.map((msg) => (msg._id === id ? { ...msg, read: !currentStatus } : msg)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-2 md:px-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-700"
      >
        Admin Dashboard — Messages
      </motion.h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => { setRefreshing(true); fetchMessages(); }}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          {refreshing ? "Refreshing..." : "🔄 Refresh"}
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-center text-gray-500">No messages found.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg._id} className={`bg-white p-4 rounded-lg shadow transition ${msg.read ? "bg-gray-50" : "bg-green-50"}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{msg.name}</h3>
                <span className={`px-2 py-1 rounded-full text-sm ${msg.read ? "bg-gray-200 text-gray-700" : "bg-green-100 text-green-700"}`}>
                  {msg.read ? "Read" : "Unread"}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{msg.email}</p>
              <p className="mb-2">{msg.message}</p>
              <p className="text-xs text-gray-500 mb-2">{new Date(msg.createdAt).toLocaleString()}</p>
              <div className="flex space-x-2">
                <button onClick={() => handleToggleRead(msg._id, msg.read)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                  {msg.read ? "Mark Unread" : "Mark Read"}
                </button>
                <button onClick={() => handleDelete(msg._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

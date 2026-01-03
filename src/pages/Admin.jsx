// src/pages/Admin.jsx
import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import AdminLogin from "./AdminLogin";
import BlogAdmin from "./BlogAdmin";
import Messages from "./Messages";
import Registration from "./Registration";
import SuperAdminUsers from "./SuperAdminUsers";

export default function Admin() {
  const { user, logout, loading } = useUser();
  const [activeTab, setActiveTab] = useState("messages");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading account...
      </div>
    );
  }

  // ❌ Not logged in
  if (!user) return <AdminLogin />;

  // ✅ Normal user view
  if (user.role === "user") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.email}</h1>
        <p className="text-gray-600 mb-4">Your account is active.</p>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    );
  }

  // ✅ Admin & SuperAdmin tabs
  const tabs = ["messages", "blog", "registration"];
  if (user.role === "superadmin") tabs.push("users");

  return (
    <div className="mt-20 md:mt-26 min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="bg-green-700 text-white flex justify-between items-center p-4 flex-wrap">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button
          onClick={logout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 mt-2 md:mt-0"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-green-600 text-white flex space-x-2 p-3 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded whitespace-nowrap ${
              activeTab === tab
                ? "bg-white text-green-700"
                : "hover:bg-green-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {activeTab === "messages" && <Messages />}
        {activeTab === "blog" && <BlogAdmin user={user} />}
        {activeTab === "registration" && <Registration />}
        {activeTab === "users" && user.role === "superadmin" && (
          <SuperAdminUsers />
        )}
      </div>
    </div>
  );
}

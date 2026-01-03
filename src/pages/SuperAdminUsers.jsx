// src/pages/SuperAdminUsers.jsx
import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../firebase";

const db = getFirestore(app);

export default function SuperAdminUsers() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const [loadingAction, setLoadingAction] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const snapshot = await getDocs(collection(db, "users"));
      const usersList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
      setFilteredUsers(usersList);
    } catch {
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter users by search and role
  useEffect(() => {
    let temp = [...users];

    if (search) temp = temp.filter((u) => u.email.toLowerCase().includes(search.toLowerCase()));
    if (roleFilter !== "all") temp = temp.filter((u) => u.role === roleFilter);

    setFilteredUsers(temp);
    setCurrentPage(1);
  }, [search, roleFilter, users]);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Upgrade / Downgrade role
  const toggleRole = async (userId, currentRole) => {
    setLoadingAction(userId);
    try {
      const newRole = currentRole === "user" ? "admin" : "user";
      await updateDoc(doc(db, "users", userId), { role: newRole });
      setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u)));
      setSuccess(`User role updated to "${newRole}"`);
      setTimeout(() => setSuccess(""), 3000);
    } catch {
      setError("Failed to update role. Try again.");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoadingAction(null);
    }
  };

  // Delete user
  const removeUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setLoadingAction(userId);
    try {
      await deleteDoc(doc(db, "users", userId));
      setUsers((prev) => prev.filter((u) => u.id !== userId));
      setSuccess("User deleted successfully.");
      setTimeout(() => setSuccess(""), 3000);
    } catch {
      setError("Failed to delete user. Try again.");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoadingAction(null);
    }
  };

  if (loading) return <p className="text-center py-4">Loading users...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">User Management</h2>

      {/* Success & Error */}
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center">{error}</div>}
      {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-center">{success}</div>}

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row sm:justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded w-full sm:w-1/2"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-3 py-2 border rounded w-full sm:w-1/4"
        >
          <option value="all">All roles</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="superadmin">SuperAdmin</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full border-collapse border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2 text-left">Email</th>
              <th className="border px-3 py-2 text-left">Role</th>
              <th className="border px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((u) => (
              <tr key={u.id} className="even:bg-gray-50 hover:bg-gray-100">
                <td className="border px-3 py-2 break-words">{u.email}</td>
                <td className="border px-3 py-2">{u.role}</td>
                <td className="border px-3 py-2 flex gap-2">
                  <button
                    onClick={() => toggleRole(u.id, u.role)}
                    disabled={loadingAction === u.id}
                    className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loadingAction === u.id ? "Updating..." : u.role === "user" ? "Promote" : "Demote"}
                  </button>
                  <button
                    onClick={() => removeUser(u.id)}
                    disabled={loadingAction === u.id}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 disabled:opacity-50"
                  >
                    {loadingAction === u.id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
            {currentUsers.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center py-2">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden mt-4 space-y-4">
        {currentUsers.map((u) => (
          <div key={u.id} className="p-4 border rounded shadow-sm flex flex-col gap-2">
            <p>
              <strong>Email:</strong> {u.email}
            </p>
            <p>
              <strong>Role:</strong> {u.role}
            </p>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => toggleRole(u.id, u.role)}
                disabled={loadingAction === u.id}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loadingAction === u.id ? "Updating..." : u.role === "user" ? "Promote" : "Demote"}
              </button>
              <button
                onClick={() => removeUser(u.id)}
                disabled={loadingAction === u.id}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:opacity-50"
              >
                {loadingAction === u.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border rounded hover:bg-gray-200 ${
                currentPage === i + 1 ? "bg-green-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

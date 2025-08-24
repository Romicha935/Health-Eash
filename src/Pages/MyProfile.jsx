import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, logout } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",  // login করা email
    phone: user?.phoneNumber || "",
    address: user?.address || "",
    photo: user?.photoURL || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Firebase update logic দিতে পারো এখানে
    Swal.fire({
      icon: "success",
      title: "Profile Updated",
      text: "Your profile info has been updated successfully!",
    });
    setEditMode(false);
  };

  if (!user) {
    return <p className="text-center mt-10 text-gray-500 text-lg">Please log in to see your profile.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">My Profile</h1>

      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div>
          <img
            src={formData.photo || "https://via.placeholder.com/150"}
            alt={formData.name}
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
        </div>

        <div className="flex-1">
          {!editMode ? (
            <div className="space-y-2">
              <p className="text-xl font-medium">Name: {formData.name}</p>
              <p className="text-gray-600">Email: {formData.email}</p>
              <p className="text-gray-600">Phone: {formData.phone}</p>
              <p className="text-gray-600">Address: {formData.address}</p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => setEditMode(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className="w-full border px-3 py-2 rounded bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-gray-700">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700">Photo URL:</label>
                <input
                  type="text"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

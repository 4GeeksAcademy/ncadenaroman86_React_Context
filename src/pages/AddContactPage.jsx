// AddContactPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContacts } from "../context/ContactContext";
import { FaCamera } from "react-icons/fa";

export default function AddContactPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContacts();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    image: ""
  });

  useEffect(() => {
    if (id) {
      const contact = state.contacts.find(c => c.id === id);
      if (contact) setForm(contact);
    }
  }, [id, state.contacts]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      dispatch({ type: "UPDATE_CONTACT", payload: form });
    } else {
      dispatch({ type: "ADD_CONTACT", payload: { ...form, id: crypto.randomUUID() } });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">{id ? "Edit" : "Add"} Contact</h2>

      {/* Avatar Upload */}
      <div className="mb-4 text-center position-relative">
        <label htmlFor="avatar-upload" className="position-relative d-inline-block" style={{ cursor: "pointer" }}>
          <img
            src={form.image || "https://via.placeholder.com/150x150.png?text=+"}
            alt="Avatar"
            className="rounded-circle border"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <FaCamera
            className="position-absolute"
            style={{
              bottom: "0",
              right: "0",
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "6px",
              boxShadow: "0 0 4px rgba(0,0,0,0.3)",
              fontSize: "22px"
            }}
          />
        </label>
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>

      <input className="form-control mb-3" name="full_name" placeholder="Full Name" value={form.full_name} onChange={handleChange} />
      <input className="form-control mb-3" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input className="form-control mb-3" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input className="form-control mb-3" name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <button className="btn btn-primary w-100 mb-2" type="submit">Save</button>
      <a href="/" className="d-block text-center">or get back to contacts</a>
    </form>
  );
}

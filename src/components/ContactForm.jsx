// ContactCard.jsx
import React from "react";
import {
  FaTrash,
  FaEdit,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function ContactCard({ contact, onDelete, onEdit }) {
  return (
    <div className="card d-flex flex-row align-items-center p-3 mb-3 shadow-sm">
      <img
        src={contact.image || "https://via.placeholder.com/100?text=+"}
        alt="Avatar"
        className="rounded-circle me-3 border"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
      />
      <div className="flex-grow-1">
        <h5>{contact.full_name}</h5>
        <p className="mb-1">
          <FaMapMarkerAlt className="me-2" /> {contact.address}
        </p>
        <p className="mb-1">
          <FaPhoneAlt className="me-2" /> {contact.phone}
        </p>
        <p className="mb-1">
          <FaEnvelope className="me-2" /> {contact.email}
        </p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <button className="btn btn-link" onClick={() => onEdit(contact)}>
          <FaEdit />
        </button>
        <button
          className="btn btn-link text-danger"
          onClick={() => onDelete(contact.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

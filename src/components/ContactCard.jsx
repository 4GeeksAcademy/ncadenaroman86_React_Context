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
    <div className="card mb-3 shadow-sm p-3 position-relative d-flex align-items-center">
      <div className="d-flex align-items-start w-100">
        <img
          src={contact.image || "https://via.placeholder.com/120"}
          alt="Avatar"
          className="rounded-circle border me-3"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />

        <div className="flex-grow-1 text-center">
          <h5 className="mb-1">{contact.full_name}</h5>
          <p className="mb-1">
            <FaMapMarkerAlt className="me-2" />
            {contact.address}
          </p>
          <p className="mb-1">
            <FaPhoneAlt className="me-2" />
            {contact.phone}
          </p>
          <p className="mb-0">
            <FaEnvelope className="me-2" />
            {contact.email}
          </p>
        </div>

        <div className="position-absolute top-0 end-0 p-2 d-flex gap-2">
          <button className="btn btn-link text-dark p-0" onClick={() => onEdit(contact)}>
            <FaEdit size={18} />
          </button>
          <button
            className="btn btn-link text-danger p-0"
            onClick={() => onDelete(contact.id)}
          >
            <FaTrash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

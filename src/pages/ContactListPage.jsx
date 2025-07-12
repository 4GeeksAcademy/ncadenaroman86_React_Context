import React from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";

export default function ContactListPage() {
  const { state, dispatch } = useContacts();
  const navigate = useNavigate();

  const handleEdit = (contact) => navigate(`/edit/${contact.id}`);
  const handleDelete = (id) => dispatch({ type: "DELETE_CONTACT", payload: id });

  return (
    <div className="container mt-4">
      <h2>Contact List</h2>
      <button className="btn btn-success mb-3" onClick={() => navigate("/add")}>
        Add Contact
      </button>
      {state.contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        state.contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

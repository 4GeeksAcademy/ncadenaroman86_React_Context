import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContactProvider } from "../context/ContactContext"; // ✅ fixed path
import ContactListPage from "./ContactListPage";
import AddContactPage from "./AddContactPage";

export default function App() {
  return (
    <ContactProvider>
      <Routes>
        <Route path="/" element={<ContactListPage />} />
        <Route path="/add" element={<AddContactPage />} />
        <Route path="/edit/:id" element={<AddContactPage />} />
      </Routes>
    </ContactProvider>
  );
}

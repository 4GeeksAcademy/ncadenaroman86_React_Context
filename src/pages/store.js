// store.js
import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [store, setStore] = useState({ contacts: [] });

  const actions = {
    loadContacts: async () => {
      const res = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/nelson_agenda");
      const data = await res.json();
      setStore({ contacts: data });
    },
    deleteContact: async (id) => {
      await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, { method: "DELETE" });
      actions.loadContacts();
    },
    addContact: async (contact) => {
      await fetch("https://playground.4geeks.com/apis/fake/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contact, agenda_slug: "nelson_agenda" })
      });
      actions.loadContacts();
    }
  };

  return (
    <Context.Provider value={{ store, actions }}>
      {children}
    </Context.Provider>
  );
}

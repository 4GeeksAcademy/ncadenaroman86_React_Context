import React from "react";

export default function DeleteModal({ onConfirm, onCancel }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p>Are you sure you want to delete this contact?</p>
        <div style={styles.buttonGroup}>
          <button onClick={onConfirm} style={styles.confirmButton}>Yes, Delete</button>
          <button onClick={onCancel} style={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 1000
  },
  modal: {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
  },
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around"
  },
  confirmButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px"
  },
  cancelButton: {
    backgroundColor: "#95a5a6",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px"
  }
};

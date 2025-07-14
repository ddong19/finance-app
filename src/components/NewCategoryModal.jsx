import React, { useState } from 'react';

function ModalForm({ onClose, onSubmit }) {
  const [name, setName] = useState('');

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Add Subcategory</h2>
        <input
          type="text"
          style={styles.input}
          placeholder="Subcategory name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div style={{ marginTop: '1rem' }}>
          <button onClick={onClose} style={{ marginRight: '1rem' }}>Cancel</button>
          <button onClick={() => onSubmit(name)} style={{ color: '#28a745'}}>Submit</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    background: '#242424',
    padding: '2rem',
    border: '.2px solid',
    borderRadius: '10px',
    color: 'white',
    width: '300px',
    boxShadow: '0 0 10px rgba(0,0,0,0.25)'
  },
  input: {
    padding: '0.5rem',
    fontSize: '0.8rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#1e1e1e',
    color: 'white'
  }
};

export default ModalForm;

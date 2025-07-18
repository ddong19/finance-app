import React from "react";

function ConfirmDialog({
    message,
    onConfirm,
    onCancel
}) {
    return (
        <div
          style={styles.overlay}
          onClick={onCancel} // clicking outside = cancel
        >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()} // prevent backdrop click from closing
          >
            <p style={styles.message}>{message}</p>
            <div style={styles.buttons}>
              <button onClick={onCancel} style={{ marginRight: '1rem' }}> Cancel</button>
              <button onClick={onConfirm} style={ {color: '#ff4d4d'} }>
                Delete
              </button>
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
}

export default ConfirmDialog;
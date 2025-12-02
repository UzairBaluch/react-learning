import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const EditModal = ({ customer, onClose, onSave }) => {
  const [name, setName] = useState(customer.name);
  const [service, setService] = useState(customer.service);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // IMPORTANT: Validate inputs before saving
    if (!name.trim() || !service.trim()) return;
    
    onSave(customer.id, { name: name.trim(), service });
    onClose();
  };

  return (
    // IMPORTANT: Modal overlay with click-outside-to-close functionality
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Edit Customer</h2>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Customer name"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Service Type</label>
            <select value={service} onChange={(e) => setService(e.target.value)}>
              <option value="">Select Service</option>
              <option value="consultation">Consultation</option>
              <option value="payment">Payment</option>
              <option value="support">Support</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
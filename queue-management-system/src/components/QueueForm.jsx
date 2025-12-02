import React, { useState } from "react";
// Import FaUserPlus icon from react-icons library
import { FaUserPlus } from "react-icons/fa";

const QueueForm = ({ onAdd }) => {
  // IMPORTANT: Destructure {onAdd} from props, not just (onAdd)
  // Without {}, onAdd would be the entire props object

  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const submitHandler = (e) => {
    // IMPORTANT: e.preventDefault() stops form from refreshing the page
    e.preventDefault();

    // IMPORTANT: .trim() removes whitespace - prevents "   " from being valid
    if (!name.trim() || !service.trim()) return;

    onAdd({ name, service });

    setName("");
    setService("");
  };

  return (
    <>
      <form className="queue-form" onSubmit={submitHandler}>
        <h2>Add to queue</h2>

        <div className="form-group">
          {/* IMPORTANT: value={name} and onChange make this a CONTROLLED input
                React controls the input value, not the DOM */}
          <input
            type="text"
            placeholder="Customer name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <select
            value={service}
            onChange={(e) => {
              setService(e.target.value);
            }}
          >
            <option value="account">Account Management</option>
            <option value="upgrade">Upgrade Service</option>
            <option value="cancellation">Cancellation</option>
            <option value="training">Training & Onboarding</option>
            <option value="troubleshooting">Troubleshooting</option>
            <option value="sales">Sales Inquiry</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="verification">Verification</option>
            <option value="complaint">Complaint</option>
            <option value="shipping">Shipping & Delivery</option>
            <option value="installation">Installation Service</option>
            <option value="maintenance">Maintenance</option>
            <option value="security">Security Issue</option>
            <option value="outage">Report Outage</option>
            <option value="request-info">Request Information</option>
            <option value="renewal">Subscription Renewal</option>
            <option value="customization">Customization Request</option>
            <option value="data-request">Data Request</option>
            <option value="bug-report">Bug Report</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <button type="submit">
          {" "}
          <FaUserPlus /> Add Customer
        </button>
      </form>
    </>
  );
};

export default QueueForm;

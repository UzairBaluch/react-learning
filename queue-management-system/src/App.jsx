import React, { useState, useEffect } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";
import Statistics from "./components/Statistics";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [queue, setQueue] = useState(() => {
    const savedQueue = localStorage.getItem('queueData');
    return savedQueue ? JSON.parse(savedQueue) : [];
  });

  useEffect(() => {
    localStorage.setItem('queueData', JSON.stringify(queue));
  }, [queue]);

  const addToQueue = (custumer) => {
    setQueue([...queue, { 
      ...custumer, 
      id: Date.now(), 
      status: "waiting",
      addedAt: new Date().toISOString()
    }]);
    toast.success(`${custumer.name} added to queue!`, {
      icon: '✅',
      style: {
        background: '#1e293b',
        color: '#f1f5f9',
        border: '1px solid #334155'
      }
    });
  };

  const updateStatus = (id, newStatus) => {
    const customer = queue.find(c => c.id === id);
    setQueue(queue.map(custumer =>
      custumer.id === id ? {...custumer, status: newStatus}: custumer
    ));
    
    if (newStatus === 'serving') {
      toast(`Now serving: ${customer.name}`, {
        icon: '👤',
        style: {
          background: '#1e293b',
          color: '#f1f5f9',
          border: '1px solid #f59e0b'
        }
      });
    } else if (newStatus === 'completed') {
      toast.success(`${customer.name} completed!`, {
        icon: '🎉',
        style: {
          background: '#1e293b',
          color: '#f1f5f9',
          border: '1px solid #10b981'
        }
      });
    }
  };

  // IMPORTANT: Edit customer function - updates name and service
  const editCustomer = (id, updatedData) => {
    setQueue(queue.map(customer =>
      customer.id === id ? { ...customer, ...updatedData } : customer
    ));
    toast.success('Customer updated!', {
      icon: '✏️',
      style: {
        background: '#1e293b',
        color: '#f1f5f9',
        border: '1px solid #334155'
      }
    });
  };

  const removeFromQueue = (id) => {
    const customer = queue.find(c => c.id === id);
    setQueue(queue.filter(custumer => 
      custumer.id !== id
    ));
    toast.error(`${customer.name} removed from queue`, {
      icon: '🗑️',
      style: {
        background: '#1e293b',
        color: '#f1f5f9',
        border: '1px solid #ef4444'
      }
    });
  };

  const clearQueue = () => {
    if (queue.length === 0) return;
    
    if (window.confirm('Are you sure you want to clear all customers?')) {
      setQueue([]);
      localStorage.removeItem('queueData');
      toast.success('Queue cleared!', {
        icon: '🧹',
        style: {
          background: '#1e293b',
          color: '#f1f5f9',
          border: '1px solid #334155'
        }
      });
    }
  };

  // IMPORTANT: Export queue data to CSV file
  const exportToCSV = () => {
    if (queue.length === 0) {
      toast.error('No data to export!', {
        icon: '📭',
        style: {
          background: '#1e293b',
          color: '#f1f5f9',
          border: '1px solid #ef4444'
        }
      });
      return;
    }

    // Create CSV header
    const headers = ['Position', 'Name', 'Service', 'Status', 'Added Time', 'Wait Time'];
    
    // Create CSV rows
    const rows = queue.map((customer, index) => {
      const addedTime = customer.addedAt 
        ? new Date(customer.addedAt).toLocaleString() 
        : 'N/A';
      
      const waitTime = customer.addedAt 
        ? Math.floor((new Date() - new Date(customer.addedAt)) / 60000) + ' min'
        : 'N/A';
      
      return [
        index + 1,
        customer.name,
        customer.service,
        customer.status,
        addedTime,
        waitTime
      ];
    });

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `queue_data_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Queue exported successfully!', {
      icon: '📥',
      style: {
        background: '#1e293b',
        color: '#f1f5f9',
        border: '1px solid #10b981'
      }
    });
  };

  return (
    <div className="app">
      <Toaster position="top-right" />
      
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
        {/* IMPORTANT: Export button in header */}
        {queue.length > 0 && (
          <button className="export-btn" onClick={exportToCSV}>
            📥 Export to CSV
          </button>
        )}
      </header>
      
      <Statistics queue={queue} />
      
      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay 
          queue={queue} 
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
          onClearAll={clearQueue}
          onEdit={editCustomer}
        />
      </main>
    </div>
  );
};

export default App;
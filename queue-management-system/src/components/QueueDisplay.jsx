import React, { useState, useEffect } from 'react'
import { FaSearch, FaFilter, FaEdit } from 'react-icons/fa'
import EditModal from './EditModal'

const QueueDisplay = ({queue, onUpdateStatus, onRemove, onClearAll, onEdit}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  // IMPORTANT: State for edit modal
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  const getWaitTime = (addedAt) => {
    if (!addedAt) return 'Just now';
    
    const diff = currentTime - new Date(addedAt);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m`;
    } else {
      return 'Just now';
    }
  };

  const filteredQueue = queue.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || customer.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className='queue-display'>
      <div className="queue-header">
        <h2>Current Queue ({filteredQueue.length})</h2>
        {queue.length > 0 && (
          <button className="clear-all-btn" onClick={onClearAll}>
            🗑️ Clear All
          </button>
        )}
      </div>

      {queue.length > 0 && (
        <div className="search-filter-section">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>

          <div className="filter-buttons">
            <FaFilter className="filter-icon" />
            <button 
              className={filterStatus === 'all' ? 'active' : ''}
              onClick={() => setFilterStatus('all')}
            >
              All
            </button>
            <button 
              className={filterStatus === 'waiting' ? 'active' : ''}
              onClick={() => setFilterStatus('waiting')}
            >
              Waiting
            </button>
            <button 
              className={filterStatus === 'serving' ? 'active' : ''}
              onClick={() => setFilterStatus('serving')}
            >
              Serving
            </button>
            <button 
              className={filterStatus === 'completed' ? 'active' : ''}
              onClick={() => setFilterStatus('completed')}
            >
              Completed
            </button>
          </div>
        </div>
      )}
      
      {filteredQueue.length === 0 ? (
        <div className='empty-queue'>
          <div className="empty-icon">
            {searchTerm || filterStatus !== 'all' ? '🔍' : '📋'}
          </div>
          <p>
            {searchTerm || filterStatus !== 'all' 
              ? 'No customers match your search' 
              : 'No customers in queue'
            }
          </p>
          <span>
            {searchTerm || filterStatus !== 'all'
              ? 'Try adjusting your filters'
              : 'Add your first customer to get started'
            }
          </span>
        </div>
      ) : (
        <div className='queue-list'>
          {filteredQueue.map((customer, index) => (
            <div className='customer-item' key={customer.id}>
              
              <div className="queue-number">#{index + 1}</div>
              
              <div className='customer-info'>
                <div className="customer-name-edit">
                  <h3>{customer.name}</h3>
                  {/* IMPORTANT: Edit button */}
                  <button 
                    className="edit-icon-btn"
                    onClick={() => setEditingCustomer(customer)}
                    title="Edit customer"
                  >
                    <FaEdit />
                  </button>
                </div>
                <p>{customer.service}</p>
                <div className="customer-meta">
                  <span className='status' style={{color: getStatusColor(customer.status)}}>
                    {customer.status}
                  </span>
                  <span className="wait-time">
                    ⏱️ {getWaitTime(customer.addedAt)}
                  </span>
                </div>
              </div>
              
              <div className='actions'>
                {customer.status === "waiting" && (
                  <button 
                    className='serve-btn'
                    onClick={() => onUpdateStatus(customer.id, "serving")}
                  >
                    Serve
                  </button>
                )}
                
                {customer.status === "serving" && (
                  <button 
                    className='complete-btn'
                    onClick={() => onUpdateStatus(customer.id, "completed")}
                  >
                    Complete
                  </button>
                )}
                
                <button 
                  className='remove-btn'
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* IMPORTANT: Edit Modal - only shows when editingCustomer is set */}
      {editingCustomer && (
        <EditModal
          customer={editingCustomer}
          onClose={() => setEditingCustomer(null)}
          onSave={onEdit}
        />
      )}
    </div>
  );
}

export default QueueDisplay;
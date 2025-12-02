import React from 'react';

const Statistics = ({ queue }) => {
  // Calculate statistics
  const total = queue.length;
  const waiting = queue.filter(c => c.status === 'waiting').length;
  const serving = queue.filter(c => c.status === 'serving').length;
  const completed = queue.filter(c => c.status === 'completed').length;

  // Calculate service breakdown
  const serviceCount = queue.reduce((acc, customer) => {
    acc[customer.service] = (acc[customer.service] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="statistics">
      <div className="stats-grid">
        {/* Total Customers */}
        <div className="stat-card total">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{total}</h3>
            <p>Total Customers</p>
          </div>
        </div>

        {/* Waiting */}
        <div className="stat-card waiting">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>{waiting}</h3>
            <p>Waiting</p>
          </div>
        </div>

        {/* Serving */}
        <div className="stat-card serving">
          <div className="stat-icon">👤</div>
          <div className="stat-content">
            <h3>{serving}</h3>
            <p>Serving</p>
          </div>
        </div>

        {/* Completed */}
        <div className="stat-card completed">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{completed}</h3>
            <p>Completed</p>
          </div>
        </div>
      </div>

      {/* Service Breakdown */}
      {total > 0 && (
        <div className="service-breakdown">
          <h4>Service Breakdown</h4>
          <div className="service-pills">
            {Object.entries(serviceCount).map(([service, count]) => (
              <div key={service} className="service-pill">
                <span className="service-name">{service}</span>
                <span className="service-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
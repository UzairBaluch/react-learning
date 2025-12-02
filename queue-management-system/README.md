# Queue Management Application

A modern, responsive, and feature-rich **Queue Management System** built using **React**.  
This application allows businesses to efficiently manage customer queues, track service status, monitor statistics, edit customer details, export queue data, and more.

---

## 🚀 Features

### ✅ Core Functionality
- Add customers to a queue with a selected service.
- Update customer status (Waiting → Serving → Completed).
- Remove individual customers or clear the entire queue.
- Edit customer details using a modal popup.
- Real-time wait-time tracking.
- Persistent data using **localStorage**.

### 🔍 Smart Tools
- Search customers by name or service.
- Filter queue by status:
  - All
  - Waiting
  - Serving
  - Completed
- Auto-updating timestamps and wait-time calculations.

### 📊 Analytics Dashboard
- Total customers
- Count of waiting, serving, and completed customers
- Service category breakdown with dynamic badges

### 📤 Export Features
- Export full queue data to **CSV** with:
  - Name  
  - Service  
  - Status  
  - Position  
  - Added Time  
  - Wait Time  

### 🧩 Additional Features
- Clean and modern UI
- Toast notifications for all actions (react-hot-toast)
- Click-outside-to-close edit modal
- ESC key closes modals
- Fully controlled form inputs

---

## 🛠️ Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **CSS3**
- **react-hot-toast**
- **react-icons**
- Browser **localStorage**

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/queue-management-app.git

# Navigate into the project directory
cd queue-management-app

# Install dependencies
npm install

# Start development server
npm start


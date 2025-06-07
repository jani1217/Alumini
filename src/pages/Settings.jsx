import React from "react";
import "./Settings.css";
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
const Settings = () => {
  const settingsItems = [
    { title: "Status" },
    { title: "Departments" },
    { title: "Batches" },
    { title: "Username", note: "Phone Number" },
  ];

  return (
     <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
    <div className="settings-page">
      <h2 className="settings-title">SETTINGS</h2>
      <div className="settings-grid">
        {settingsItems.map((item, index) => (
          <div className="settings-card" key={index}>
            <h3>{item.title}</h3>
            {item.note && <p className="settings-note">{item.note}</p>}
            {item.title!="Username"&&(
            <div className="button-group">
              <button className="add-btn">Add</button>
              <button className="edit-btn">Edit</button>
            </div>)}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Settings;

import React, { useState } from 'react';
import './settings-view.css'; // Import the CSS file

function SettingsView() {
  const [activeTab, setActiveTab] = useState('site');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'site':
        return <SiteConfiguration />;
      case 'user':
        return <UserConfigurations />;
      case 'organization':
        return <OrganizationsConfiguration />;
      default:
        return <SiteConfiguration />;
    }
  };

  return (
    <div>
   
      <div className="tabs">
        <button
          onClick={() => setActiveTab('site')}
          className={activeTab === 'site' ? 'active' : ''}
        >
          Site Configuration
        </button>
        <button
          onClick={() => setActiveTab('user')}
          className={activeTab === 'user' ? 'active' : ''}
        >
          User Configuration
        </button>
        <button
          onClick={() => setActiveTab('organization')}
          className={activeTab === 'organization' ? 'active' : ''}
        >
          Organization Configuration
        </button> 
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
}

function SiteConfiguration() {
  return <div>Site Configuration Content</div>;
}

function UserConfigurations() {
  return <div>User Configurations Content</div>;
}

function OrganizationsConfiguration() {
  return <div>Organizations Configuration Content</div>;
}

export default SettingsView;

import { useState } from 'react';
import EditProfile from './Edit-Profile';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

type TabType = 'edit-profile' | 'preferences' | 'security';

const Settings = () => {
  const [activeTab, setActiveTab] = useState<TabType>('edit-profile');

  const tabs = [
    { id: 'edit-profile', label: 'Edit Profile' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'security', label: 'Security' },
  ] as const;

  return (
    <div className="flex flex-col sm:ml-[15%] min-h-auto gap-6 p-6 bg-skin-gray">
      <div className="bg-skin-white rounded-lg p-8">
        {/* Tabs */}
        <div className="border-b ">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-0 px-2 relative ${
                  activeTab === tab.id
                    ? 'text-skin-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black after:transition-all after:duration-800'
                    : 'text-skin-not-active hover:text-skin-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'edit-profile' && <EditProfile />}
          {activeTab === 'preferences' && <ComingSoon />}
          {activeTab === 'security' && <ComingSoon />}
        </div>
      </div>
    </div>
  );
};

export default Settings;

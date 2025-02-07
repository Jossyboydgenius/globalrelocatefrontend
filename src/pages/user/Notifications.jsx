import { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import FilterButton from "@/components/utils/FilterButton";
import AllNotificationsTab from "@/components/profile/tabs/AllNotificationsTab";

function Notifications() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <DashboardLayout>
      <div className="w-full flex flex-col">
        <div className="px-4 md:px-8 lg:px-20 pt-2 pb-4">
          <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
          
          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <FilterButton
              title="All"
              isActive={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
            />
            <FilterButton
              title="Mentions"
              isActive={activeTab === 'mentions'}
              onClick={() => setActiveTab('mentions')}
            />
            <FilterButton
              title="Following"
              isActive={activeTab === 'following'}
              onClick={() => setActiveTab('following')}
            />
          </div>

          {/* Tab Content */}
          <div className="w-full">
            {activeTab === 'all' && <AllNotificationsTab />}
            {activeTab === 'mentions' && <AllNotificationsTab />}
            {activeTab === 'following' && <AllNotificationsTab />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Notifications;

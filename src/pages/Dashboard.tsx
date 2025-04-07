import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div className="mt-4">
        <p>This is the main dashboard content area.</p>
        {/* Placeholder content */}
        <div className="mt-6 p-6 bg-white shadow rounded-lg">
          Placeholder Card
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

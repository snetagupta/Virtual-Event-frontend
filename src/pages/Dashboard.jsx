import React from 'react';
import SalesComparisonPieChart from '../components/dashboard/SalesComparisonPieChart';
import SalesAreaChart from '../components/dashboard/SalesGraph';


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex p-10 gap-5">
        <div className='w-[60%]'>
          <SalesAreaChart />
        </div>
        <div className='w-[40%]'>
          <SalesComparisonPieChart />
        </div>
    </div>
  );
};

export default Dashboard;

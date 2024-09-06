import React from 'react';
import Chart from 'react-apexcharts';

const SalesComparisonPieChart = () => {
  const options = {
    labels: ['Virtual', 'Onsite', 'Hybrid'],
  };

  const series = [30, 40, 30]; // Replace with actual data

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Sales Comparison</h2>
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default SalesComparisonPieChart;

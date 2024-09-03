import React, { useState, useRef } from 'react';
import Chart from 'react-apexcharts';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { IoIosMenu } from "react-icons/io";

const SalesAreaChart = () => {
  const [timeRange, setTimeRange] = useState('months');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const chartRef = useRef(null);

  const data = {
    days: [120, 150, 170, 140, 180, 210],
    weeks: [800, 900, 1000, 950, 1100, 1200],
    months: [1200, 1900, 3000, 2500, 3200, 4000],
    quarterly: [5000, 7000, 8000, 6000],
    year: [10000, 12000],
  };

  const categories = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    months: ['January', 'February', 'March', 'April', 'May', 'June'],
    quarterly: ['Q1', 'Q2', 'Q3', 'Q4'],
    year: ['2023', '2024'],
  };

  const handleDownload = (format) => {
    const chartElement = chartRef.current;

    html2canvas(chartElement).then((canvas) => {
      if (format === 'jpg') {
        canvas.toBlob((blob) => saveAs(blob, 'sales-chart.jpg'));
      } else if (format === 'pdf') {
        const imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297); // A4 size
        pdf.save('sales-chart.pdf');
      } else if (format === 'csv') {
        const csvData = data[timeRange].map((value, index) => `${categories[timeRange][index]},${value}\n`).join('');
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'sales-data.csv');
      }
    });
  };

  const options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: categories[timeRange],
    },
    tooltip: {
      x: {
        format: 'MM',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
        
    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left'
    }
  };

  const series = [
    {
      name: 'Sales',
      data: data[timeRange],
    },
  ];

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          {['days', 'weeks', 'months', 'quarterly', 'year'].map((range) => (
            <button
              key={range}
              className={`px-3 py-1 rounded ${timeRange === range ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => setTimeRange(range)}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
        <div className="relative">
          <button
            className="text-2xl rounded-full"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <IoIosMenu />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-200"
                onClick={() => { handleDownload('jpg'); setDropdownOpen(false); }}
              >
                Download JPG
              </button>
              <button
                className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-200"
                onClick={() => { handleDownload('pdf'); setDropdownOpen(false); }}
              >
                Download PDF
              </button>
              <button
                className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-200"
                onClick={() => { handleDownload('csv'); setDropdownOpen(false); }}
              >
                Download CSV
              </button>
            </div>
          )}
        </div>
      </div>
      <div ref={chartRef}>
        <Chart options={options} series={series} type="area" height={350} />
      </div>
    </div>
  );
};

export default SalesAreaChart;

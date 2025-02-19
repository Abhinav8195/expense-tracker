import React from 'react';
import Chart from 'react-apexcharts';

const options = {
  labels: ['Income', 'Expense'],
  colors: ['#213ebf', '#FD5E53'],
  chart: {
    width: '50px',
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    pie: {
      expandOnClick: false,
    },
  },
  fill: {
    colors: ['#213ebf', '#FD5E53'],
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    style: {
      fontSize: '12px',
      backgroundColor: '#000000',
    },
  },
};

const TransactionChartSummary = ({ expense, income }) => {
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type='pie'
      width='100%'
      height='100%'
    />
  );
};

export default TransactionChartSummary;

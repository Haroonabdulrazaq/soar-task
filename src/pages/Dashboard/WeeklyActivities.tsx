import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const WeeklyActivities = () => {
  const options = {
    chart: {
      type: 'column',
      borderRadius: 12,
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      crosshair: true,
      labels: {
        align: 'center',
        style: {
          color: '#718EBF',
        },
      },
      accessibility: {
        enabled: false,
        description: 'Days',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
      labels: {
        align: 'center',
        style: {
          color: '#718EBF',
        },
      },
    },
    tooltip: {
      valueSuffix: 'USD',
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        borderRadius: 8,
      },
    },
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      layout: 'horizontal',
    },
    series: [
      {
        name: 'Deposit',
        data: [250, 154, 275, 389, 239, 236, 374],
        color: '#396AFF',
      },
      {
        name: 'Withdraw',
        data: [495, 350, 345, 450, 180, 390, 400],
        color: '#232323',
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default WeeklyActivities;

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BalanceHistory = () => {
  const options = {
    chart: {
      type: 'area',
      borderRadius: 12,
      height: 280,
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      allowDecimals: false,
      accessibility: {
        rangeDescription: 'Range: July to Dec.',
      },
      labels: {
        align: 'center',
        style: {
          color: '#718EBF',
        },
      },
    },
    yAxis: {
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
      pointFormat:
        '{series.name} on <b>{point.x}</b><br/>' +
        'Balance: <b>{point.y:,.0f}</b>',
    },
    plotOptions: {
      area: {
        fillOpacity: 0.1,
        lineWidth: 3,
        color: '#1814F3',
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'Balance',
        data: [155, 362, 256, 400, 457, 800],
        fillOpacity: 0.1,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BalanceHistory;

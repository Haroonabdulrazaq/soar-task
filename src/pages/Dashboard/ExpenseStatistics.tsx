import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'pie',
    borderRadius: 12,
  },
  title: {
    text: '',
  },
  tooltip: {
    valueSuffix: '%',
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: [
        {
          enabled: true,
          distance: -65,
          style: {
            fontSize: '0.8em',
            fontWeight: 'normal',
            textOutline: 'none',
            opacity: 1,
          },
        },
        {
          enabled: true,
          distance: -40,
          format: '{point.percentage:.1f}%',
          style: {
            fontSize: '0.8em',
            textOutline: 'none',
            opacity: 0.7,
          },
          filter: {
            operator: '>',
            property: 'percentage',
            value: 10,
          },
        },
      ],
    },
  },
  series: [
    {
      name: 'Percentage',
      colorByPoint: true,
      data: [
        {
          name: 'Entertainment',
          y: 30.0,
          sliced: true,
          selected: false,
          color: '#343C6A',
        },
        {
          name: 'Bill Expenses',
          sliced: true,
          selected: false,
          color: '#FC7900',
          y: 15.0,
        },
        {
          name: 'Others',
          sliced: true,
          selected: false,
          color: '#232323',
          y: 35.0,
        },
        {
          name: 'Investments',
          sliced: true,
          selected: false,
          color: '#396AFF',
          y: 20.0,
        },
      ],
    },
  ],
};

const ExpenseStatistics = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ExpenseStatistics;

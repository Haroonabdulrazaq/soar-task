import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// State Management
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchExpenseStatistics } from '../../redux/slices/graphSlices';

const ExpenseStatistics = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.graph.expenseStatistics,
  );

  useEffect(() => {
    dispatch(fetchExpenseStatistics());
  }, [dispatch]);

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
            distance: -60,
            style: {
              fontSize: '0.8em',
              color: '#ffffff',
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
              fontWeight: 'normal',
              color: '#ffffff',
              opacity: 1,
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
        data: data.map((item) => ({
          name: item.name,
          y: item.y,
          sliced: item.sliced,
          selected: item.selected,
          color: item.color,
        })),
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ExpenseStatistics;

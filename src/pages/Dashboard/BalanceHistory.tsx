import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// State Management
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchBalanceHistory } from '../../redux/slices/graphSlices';
import { useEffect } from 'react';

const BalanceHistory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.graph.balanceHistory,
  );

  useEffect(() => {
    dispatch(fetchBalanceHistory());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
      categories: data.categories,
      allowDecimals: false,
      accessibility: {
        rangeDescription: data.description,
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
        name: data.name,
        data: data.data,
        fillOpacity: data.fillOpacity,
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

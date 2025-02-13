import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import '../../sass/expenses.scss';
import '../../sass/login.scss';
import {
  getGoalByID,
  getDataByID,
  getVacationData,
  getCurrenciesOptions,
  filterSavingsDataPoints,
} from '../../helpers/helper_functions';
import {
  Chart,
  Legend,
  Tooltip,
  TimeScale,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  LineController,
} from 'chart.js';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  TimeScale);

const LineGraph = props => {

  // Destructured props
  const {
    transition,
    changeCurrency
  } = props;

  //  Retrieves line graph data
  const goal = getGoalByID(props.state.goals, props.state.user)
  const dataPoints = getDataByID(props.state.dataPoints, props.state.user)
  const currencies = getCurrenciesOptions(props.state.currencySymbols);

  let graphData = {
    total: '',
    trackData: [],
    trackLine: '',
    trackUnits: '',
    borderColor: '',
    updatePoints: [],
    backgroundColor: '',
  };

  // Loads Savings Data
  if (!props.state.vacationMode) {

    graphData = {
      ...graphData,
      total: 'Savings',
      trackUnits: 'month',
      trackLine: goal.goal_name,
      trackData: [
        { x: goal.start_date, y: 0 },
        { x: goal.end_date, y: goal.amount / 100 }
      ],
      backgroundColor: '#FFA10A',
      borderColor: '#FFA10A'
    };

    // Adds starting point on line graph
    graphData.updatePoints.push({ x: goal.start_date, y: 0 });

    // Populates the rest of savings data
    filterSavingsDataPoints(dataPoints, 8).forEach(point => {
      graphData.updatePoints.push({ ...point, y: graphData.updatePoints.slice(-1)[0].y + (point.y / 100) })
    });

    // Loads Spending Data
  } else if (props.state.vacationMode) {

    graphData = {
      ...graphData,
      total: 'Savings',
      trackUnits: 'day',
      trackLine: 'Budget',
      trackData: [
        { x: goal.start_date, y: goal.amount / 100 },
        { x: goal.end_date, y: 0 }
      ],
      backgroundColor: 'rgba(220, 38, 38, 0.7)',
      borderColor: 'rgba(220, 38, 38, 0.7)',
    }

    // Retrieves data from vacation start date
    const vacationData = getVacationData(dataPoints, goal.start_date);
    // Adds starting point on line graph
    graphData.updatePoints.push({ x: goal.start_date, y: goal.amount / 100 });

    // Populates the rest of spending data
    vacationData.forEach(point => {
      graphData.updatePoints.push({ ...point, y: graphData.updatePoints.slice(-1)[0].y - (point.y / 100) })
    });

  }

  const [state, setState] = useState({
    dateUnit: graphData.trackUnits,
    dataPoints: graphData.updatePoints,
    currency: props.state.currentCurrency || 'USD',
    exchangeRate: props.state.exchangeRates.rates[props.state.currentCurrency]
  })

  const data = {
    datasets: [
      {
        label: graphData.total,
        data: state.dataPoints,
        fill: false,
        backgroundColor: graphData.backgroundColor,
        borderColor: graphData.borderColor,
        tension: 0.1
      },
      {
        label: graphData.trackLine,
        data: graphData.trackData,
        fill: false,
        backgroundColor: 'limegreen',
        borderColor: 'limegreen',
        tension: 0.1
      }
    ]
  };

  return (
    <div className='d-flex justify-content-center row'>
      <div id='line' className='d-flex justify-content-center col rounded-3 mt-5'>
        <Line
          key='savingGraph'
          data={data}
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              // Bottom labels of graph
              x: {
                type: 'time',
                time: {
                  unit: state.dateUnit
                },
                beginAtZero: true
              },
              // Left labels of graph
              y: {
                ticks: {
                  callback: function (value, index, ticks) {
                    return parseInt(value * (state.exchangeRate || 1)) + ` ${state.currency}`;
                  }
                },
                beginAtZero: true
              }
            }
          }}
        />
      </div>
      <br />
      <div className='d-flex align-items-center m-2 justify-content-center' >

        {props.state.vacationMode &&
          <div className='d-flex align-items-center m-2 justify-content-center w-25'>
            <input
              className="form-control w-100"
              list="datalistOptions"
              id="exchange-search"
              value={props.state.currentCurrency}
              placeholder="Type to search currency..."
              onChange={e => {
                e.persist();
                changeCurrency(e.target.value)
                setState(prev => {
                  return { ...prev, currency: e.target.value, exchangeRate: props.state.exchangeRates.rates[e.target.value] }
                })
              }}
            />
            <datalist id="datalistOptions">
              {currencies}
            </datalist>
          </div>
        }
        <select
          className="select rounded-2 form-select form-select-md w-25 d-flex align-items-center m-2 justify-content-center"
          value={state.dateUnit}
          onChange={e => setState({ ...state, dateUnit: e.target.value })}>
          <option value="day">Days</option>
          <option value="week">Weeks</option>
          <option value="month">Months</option>
          <option value="quarter">Quarterly</option>
          <option value="year">Years</option>
        </select>
        <button
          className='btn btn-primary m-2 gradient-custom-4 submit text-dark'
          onClick={() => transition('EXPENSES')}>
          Expenses
        </button>
      </div>
    </div>
  );
}

export default LineGraph;
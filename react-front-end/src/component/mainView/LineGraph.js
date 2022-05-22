import React, { useState } from 'react';
import {
  getGoalByID,
  getDataByID,
  getVacationData,
  filterSavingsDataPoints
} from '../../helpers/helper_functions';
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  TimeScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  TimeScale);

export default function LineGraph(props) {
  console.log('LINE:', props)
  const goal = getGoalByID(props.goals, props.user)
  const dataPoints = getDataByID(props.dataPoints, props.user)

  let graphData = {
    updatePoints: [],
    total: '',
    trackLine: '',
    trackUnits: '',
    trackData: []
  }

  if (!props.vacationMode) {

    graphData = {
      ...graphData,
      total: 'Savings',
      trackLine: goal.goal_name,
      trackUnits: 'month',
      trackData: [
        { x: goal.start_date, y: 0 },
        { x: goal.end_date, y: goal.amount }
      ]
    }

    graphData.updatePoints.push({ x: goal.start_date, y: 0 })
    filterSavingsDataPoints(dataPoints, 8).forEach(point => {
      if (graphData.updatePoints.slice(-1)[0]) {
        point = { ...point, y: (graphData.updatePoints.slice(-1)[0].y + point.y) }
      }
      graphData.updatePoints.push(point)
    })
  } else if (props.vacationMode) {

    graphData = {
      ...graphData,
      total: 'Savings',
      trackLine: 'Budget',
      trackUnits: 'day',
      trackData: [
        { x: goal.start_date, y: goal.amount },
        { x: goal.end_date, y: 0 }
      ]
    }

    const vacationData = getVacationData(dataPoints, goal.start_date)
    console.log(vacationData)
    graphData.updatePoints.push({ x: goal.start_date, y: goal.amount })
    vacationData.forEach(point => {
      if (graphData.updatePoints.slice(-1)[0]) {
        point = { ...point, y: (graphData.updatePoints.slice(-1)[0].y - point.y) }
      }
      graphData.updatePoints.push(point)
    })

  }
  const [state, setState] = useState({
    dateUnit: graphData.trackUnits,
    dataPoints: graphData.updatePoints
  })

  const data = {
    datasets: [
      {
        label: graphData.total,
        data: state.dataPoints,
        fill: false,
        backgroundColor: 'rgba(220, 38, 38, 0.7)',
        borderColor: 'rgba(220, 38, 38, 0.7)',
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
    <div>
      <div id='line'>
        <Line
          key='savingGraph'
          data={data}
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: state.dateUnit
                },
                beginAtZero: true
              },
              y: {
                ticks: {
                  // Include a dollar sign in the ticks
                  callback: function (value, index, ticks) {
                    return '$' + value.toFixed(2) / 100;
                  }
                },
                beginAtZero: true
              }
            }
          }}
        />
      </div>
      <br />
      <div className='d-flex align-items-center justify-content-center' >
        <label className="visually-hidden" htmlFor="inlineFormSelectPref">Category</label>
        <select
          className="select"
          value={state.dateUnit}
          onChange={e => setState({ ...state, dateUnit: e.target.value })}>
          <option value="day">Days</option>
          <option value="week">Weeks</option>
          <option value="month">Months</option>
          <option value="quarter">Quarterly</option>
          <option value="year">Years</option>
        </select>
        <button
          className='btn btn-primary'
          onClick={() => props.back()
          }>
          Back
        </button>
      </div>
    </div>
  );
}
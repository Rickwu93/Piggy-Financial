import React, { useState } from 'react';
import ProgressCircle from './ProgressCircle';
import '../../sass/savings.scss';
import {
	getTotalAmount,
	getDaysTillGoal,
	getGoalByID,
	getSavingsByID,
} from '../../helpers/helper_functions';
import {
	toggleClassNameBlur,
	toggleDisappearText,
	togglePiggyAppear,
	togglePiggyBreak,
	toggleVacationMode
} from '../../helpers/helper_classnames';


const Savings = props => {

	// Destructured props
	const {
		updateGoals
	} = props;

	// Retrieves total amount of saved money
	const savingsByID = getSavingsByID(props.state.savings, props.state.user);
	const totalSaved = getTotalAmount(savingsByID);

	// Retrieves days until end date for goal & total amount saving for
	const goalByID = getGoalByID(props.state.goals, props.state.user);
	const totalDaysTillGoal = getDaysTillGoal(goalByID);
	const totalGoal = getTotalAmount(goalByID);

	const [state, setState] = useState({
		input: 'appear',
		switch: 'Off',
		day: false,
		week: false,
		month: false,
		year: false,
		vacation: '',
		goal_id: goalByID.id,
		goal_name: goalByID.goal_name,
		totalGoals: goalByID.amount / 100,
		start_date: goalByID.start_date,
		end_date: goalByID.end_date,
	});

	// Edits user goal in database
	const onChange = newGoal => {
		updateGoals(goalByID.id, newGoal);
		setState(prev => {
			return { ...prev, vacation: '' }
		})
	};

	// Controls state of Day switch
	const dayClick = () => {
		setState(prev => {
			return {
				...prev,
				day: !state.day,
				switch: !state.switch ? 'ON' : 'OFF',
			}
		});
	};
	// Controls state of Week switch
	const weekClick = () => {
		setState(prev => {
			return {
				...prev,
				week: !state.week,
				switch: !state.switch ? 'ON' : 'OFF'
			}
		});
	};
	// Controls state of Month switch
	const monthClick = () => {
		setState(prev => {
			return {
				...state,
				month: !state.month,
				switch: !state.switch ? 'ON' : 'OFF',
			}
		});
	};
	// Controls state of Year switch
	const yearClick = () => {
		setState(prev => {
			return {
				...state,
				year: !state.year,
				switch: !state.switch ? 'ON' : 'OFF',
			}
		});
	};

	// Adds or removes a className based on state.input or state.vacation
	const disappearText = toggleDisappearText(state);
	const vacationMode = toggleVacationMode(state);
	const piggyAppear = togglePiggyAppear(state);
	const piggyBreak = togglePiggyBreak(state);
	const blur = toggleClassNameBlur(state);

	// Calculates money per day/week/month/year
	const moneyTillGoal = totalGoal - totalSaved;
	const moneyPerDayToGoal =
		'$' + (moneyTillGoal / totalDaysTillGoal / 100).toFixed(2);
	const moneyPerWeekToGoal =
		'$' + (moneyTillGoal / (totalDaysTillGoal / 7) / 100).toFixed(2);
	const moneyPerMonthToGoal =
		'$' + (moneyTillGoal / (totalDaysTillGoal / 31) / 100).toFixed(2);
	const moneyPerYearToGoal =
		'$' + (moneyTillGoal / (totalDaysTillGoal / 365) / 100).toFixed(2);

	return (
		<div id='savings'>
			<div className="goal-container d-flex flex-column align-items-center justify-content-center h-50 text-center">
				<br />
				<br />
				{(totalSaved / totalGoal) < 1 &&
					<div className="d-flex w-50 flex-column align-items-center justify-content-center text-center">
						<div className="w-100 h-75 d-flex align-items-center justify-content-center text-center">
							<table>
								<thead>
									<tr>
										<td>
											<h1>{goalByID.goal_name}</h1>
										</td>
									</tr>
									<tr>
										<td>
											<h1>
												<span>${(totalSaved / 100).toFixed(2)}</span> / $
												{(totalGoal / 100).toFixed(2)}
											</h1>
										</td>
									</tr>
									<tr className='fs-4'>
										<td>
											<span className='fw-bold'>{totalDaysTillGoal}</span> days until <span className='fw-bold'>{goalByID.end_date}</span>
										</td>
									</tr>
									{state.day && (
										<tr className="fw-bold">
											<td>Advised to save <span className='advice-number'>{moneyPerDayToGoal}</span>/day</td>
										</tr>
									)}
									{state.week && (
										<tr className="fw-bold">
											<td>Advised to save <span className='advice-number'>{moneyPerWeekToGoal}</span>/week</td>
										</tr>
									)}
									{state.month && (
										<tr className="fw-bold">
											<td>Advised to save <span className='advice-number'>{moneyPerMonthToGoal}</span>/month</td>
										</tr>
									)}
									{state.year && (
										<tr className="fw-bold">
											<td>Advised to save <span className='advice-number'>{moneyPerYearToGoal}</span>/year</td>
										</tr>
									)}
									{(state.day ||
										state.week ||
										state.month ||
										state.year) &&
										<tr className="fw-bold track">
											<td>to stay on track!</td>
										</tr>
									}
								</thead>
							</table>
							<div id="progress-circle">
								<ProgressCircle
									total_saved={totalSaved}
									goalTotal_cents={totalGoal}
								/>
							</div>
						</div>

						<div className="w-100 d-flex col align-items-end justify-content-space-evenly">
							<div
								id="switch"
								className="d-flex h-25 mb-3 align-items-center justify-content-center"
							>
								<div className="m-1">
									<div className="form-check form-switch">
										<input
											className="form-check-input"
											type="checkbox"
											aria-checked="false"
											role="switch"
											id="day-switch"
											onChange={() => dayClick()}
										/>
										<label className="form-check-label" htmlFor="day-switch">
											Day
										</label>
									</div>
								</div>
								<div className="m-1">
									<div className="form-check form-switch">
										<input
											className="form-check-input"
											type="checkbox"
											aria-checked="false"
											role="switch"
											id="week-switch"
											disabled={totalDaysTillGoal < 7}
											onChange={() => weekClick()}
										/>
										<label className="form-check-label" htmlFor="week-switch">
											Week
										</label>
									</div>
								</div>
								<div className="m-1">
									<div className="form-check form-switch">
										<input
											className="form-check-input"
											type="checkbox"
											aria-checked="false"
											role="switch"
											id="month-switch"
											disabled={totalDaysTillGoal < 30}
											onChange={() => monthClick()}
										/>
										<label className="form-check-label" htmlFor="month-switch">
											Month
										</label>
									</div>
								</div>
								<div className="m-1">
									<div className="form-check form-switch">
										<input
											className="form-check-input"
											type="checkbox"
											aria-checked="false"
											role="switch"
											id="year-switch"
											disabled={totalDaysTillGoal < 365}
											onChange={() => yearClick()}
										/>
										<label className="form-check-label" htmlFor="year-switch">
											Year
										</label>
									</div>
								</div>
								<div id="switch-right"></div>
							</div>
						</div>
						<img
							id="piggy-animation"
							src="https://c.tenor.com/k_giby7nsyIAAAAC/money-piggy-bank.gif"
							alt="piggy animation"
						/>
					</div>
				}
				{(totalSaved / totalGoal) >= 1 &&
					<div className="wrap">
						{goalByID.goal_name.match(/vacation.*/i) &&
							<button
								className={vacationMode}
								onClick={() => {
									setState({ ...state, vacation: 'ON' })
								}}
							>VACATION MODE</button>
						}
						<div className={disappearText}>
							<h1 id='piggy-break'>BREAK THE PIG</h1>
						</div>
						<button
							className={piggyAppear}
							onClick={() => {
								setState({ ...state, input: 'disappear' });
							}}
						>
							<img src="../../../pig2-NO-bg.png" alt="piggy bank break" />
						</button>
						<img
							className={piggyBreak}
							src="https://c.tenor.com/SoiNuY5rLrQAAAAC/sailor-moon-pig.gif"
							alt="piggy bank broken"
						/>
					</div>
				}
			</div>
			{state.vacation === 'ON' &&
				<div className="chart-align w-50 h-50">
					<div className='vacation-start'>
						<div className='card d-flex align-items-center justify-content-center text-center flex-column'>
							<table className="table">
								<thead>
									<tr>
										<td className='d-flex justify-content-center w-100'>
											<div className="w-50">
												<label className="form-label " htmlFor="goalName">
													Location
												</label>
												<input
													type="text"
													id="goalName"
													className="form-control align-items-center fw-bolder text-center"
													value={state.goal_name}
													onChange={(event) => setState({ ...state, goal_name: event.target.value })}
												/>
											</div>
										</td>
									</tr>
									<tr>
										<td className='d-flex justify-content-center w-100'>
											<div className='w-50'>
												<label className="form-label " htmlFor="goalAmount">
													Budget
												</label>
												<input
													type="number"
													imputmode="decimal"
													min="0.01"
													step="0.01"
													id="goalAmount"
													className="form-control align-items-center"
													value={state.totalGoals}
													onChange={event =>
														setState({
															...state,
															totalGoals: event.target.value,
														})
													}
												/>
											</div>
										</td>
									</tr>
									<tr>
										<td className='d-flex justify-content-center w-100'>
											<div className="w-50 col-lg-3 justify-content-center col-sm-6">
												<label htmlFor="date" className=''>Start Date</label>
												<input
													id="date"
													className="form-control"
													type="date"
													value={state.date}
													onChange={(event) => setState({ ...state, start_date: event.target.value })}
												/>
												<span id="dateSelected"></span>
											</div>
										</td>
									</tr>
									<tr>
										<td className='d-flex justify-content-center w-100'>
											<div className="w-50 col-lg-3 justify-content-center col-sm-6">
												<label htmlFor="date" className=''>End Date</label>
												<input
													id="date"
													className="form-control"
													type="date"
													value={state.date}
													onChange={(event) => setState({ ...state, end_date: event.target.value })}
												/>
												<span id="dateSelected"></span>
											</div>
										</td>
									</tr>
								</thead>
							</table>
							<div>
								<button onClick={() => onChange(state)} className='btn btn-primary mb-3 m-1'>
									Confirm
								</button>
								<button onClick={(event) => setState({ ...state, vacation: '' })} className='btn btn-danger mb-3 m-1'>
									Cancel
								</button>
							</div>
						</div>
					</div>
					<div className={blur}>
					</div>
				</div>}
		</div>
	);
};

export default Savings;
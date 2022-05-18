import { useState, useEffect, useRef } from "react";
import axios from "axios"

export default function useApplicationData() {
  const [state, setState] = useState({
    test: 'test',
    tab: 'EXPENSES',
    user: 1,
    users: [],
    goals: [],
    expenses: [],
    incomes: [],
    categories: [],
    fake: [
      {
        placeholder: 'goalie!!!!!'
      }
    ]
  });

  const addExpense = (expense) => {
    const expenses = [
      {
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id
      },
      ...state.expenses
    ];
    console.log('EXPENSES:', expenses);

    return axios
      .put(`http://localhost:8081/api/expenses`, {
        expense
      })
      .then((res) => {
        setState(prev => { 
          return {...prev, expenses} })
      })
  };

  const setUser = user => setState({ ...state, user });


  useEffect(() => {
    const apiUsers = 'http://localhost:8081/api/users';
    const apiGoals = 'http://localhost:8081/api/goals';
    const apiExpenses = 'http://localhost:8081/api/expenses';
    const apiIncomes = 'http://localhost:8081/api/incomes';
    const apiCategories = 'http://localhost:8081/api/categories';

    Promise.all([
      axios.get(apiUsers),
      axios.get(apiGoals),
      axios.get(apiExpenses),
      axios.get(apiIncomes),
      axios.get(apiCategories)
    ])
      .then(all => {
        setState((prev) => ({
          ...prev,
          users: all[0].data,
          goals: all[1].data,
          expenses: all[2].data,
          incomes: all[3].data,
          categories: all[4].data
        }));
      })
      .catch(error => {
        console.log('hook error?!: ', error);
      })
  }, []);


  return {
    state,
    setUser,
    addExpense
  };
}
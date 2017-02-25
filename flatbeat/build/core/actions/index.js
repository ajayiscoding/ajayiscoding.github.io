// Actions

// Показатели счетчиков
export const ADD_VALUES = 'ADD_VALUES';
export const EDIT_VALUES= 'EDIT_VALUES';


// Actions Creators
// {type: 'ADD_VALUES', date: '02-2017'}
export function addValues(date) {
  return { type: ADD_VALUES, date }
}

export function editValues(date) {
  return { type: EDIT_VALUES, date }
}


// export const addRecord = (record) => {
//   return {
//     type: 'ADD_RECORD',
//     id: nextTodoId++,
//     text
//   }
// }

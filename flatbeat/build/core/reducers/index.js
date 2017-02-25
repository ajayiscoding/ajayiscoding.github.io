const flatbeatState = {
  // массив актуальных показаний счетчиков
  values: [
    '01-2017', '02-2017'
  ],
  // массив настроек
  settings: [],
  // массив тарифов
  tariffs: [],
  // текущий месяц для расчетов
  currentDate: '02-2017'
};

function flatbeatApp(state = flatbeatState, action) {
  switch (action.type) {
    case 'ADD_VALUES':
      // _extend({}, state, {date: action.date});
      return {...state, date: action.date};
      break;
  }

  return state;
}

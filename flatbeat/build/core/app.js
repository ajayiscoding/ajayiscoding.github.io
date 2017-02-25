import React from 'react';
import ReactDOM from 'react-dom';
import CurrentMonthForm from './components/CurrentMonthForm';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import todoApp from './reducers'



class FlatbeatApp extends React.Component {
  constructor () {
    super();

    this.state = {

    }
  }
  onKeyUp () {

  }
  render () {
    return <CurrentMonthForm />;
  }
}

ReactDOM.render(<FlatbeatApp/>, document.querySelector('.FlatBeat'));

// export default Flatbeat;

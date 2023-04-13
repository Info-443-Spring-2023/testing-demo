import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //load Bootstrap
import './index.css';

import App from './components/App'

//the "data"
const SAMPLE_TASKS = [
  {id:1, description:'Learn JSX', complete:true},
  {id:2, description:'Learn about React State', complete:false},
  {id:3, description:'Get some sleep', complete:false} 
];

//pass data in as a prop!
ReactDOM.render(<App initialTasks={SAMPLE_TASKS} />, 
  document.getElementById('root'));
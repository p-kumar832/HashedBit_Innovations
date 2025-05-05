import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorNoJSX from './CalculatorNoJSX';
import './styles.css';

const container = document.getElementById('root');
ReactDOM.render(React.createElement(CalculatorNoJSX), container);

import React, { useState } from 'react';

const CalculatorNoJSX = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const parseInputs = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (isNaN(num1) || isNaN(num2)) {
      return null;
    }
    return [num1, num2];
  };

  const handleAdd = () => {
    const nums = parseInputs();
    if (nums) {
      setResult(nums[0] + nums[1]);
    } else {
      setResult('Invalid input');
    }
  };

  const handleSubtract = () => {
    const nums = parseInputs();
    if (nums) {
      setResult(nums[0] - nums[1]);
    } else {
      setResult('Invalid input');
    }
  };

  const handleMultiply = () => {
    const nums = parseInputs();
    if (nums) {
      setResult(nums[0] * nums[1]);
    } else {
      setResult('Invalid input');
    }
  };

  const handleDivide = () => {
    const nums = parseInputs();
    if (nums) {
      if (nums[1] === 0) {
        setResult('Cannot divide by zero');
      } else {
        setResult(nums[0] / nums[1]);
      }
    } else {
      setResult('Invalid input');
    }
  };

  return React.createElement(
    'div',
    null,
    React.createElement('input', {
      type: 'text',
      value: input1,
      onChange: (e) => setInput1(e.target.value),
      placeholder: 'Enter first number',
    }),
    React.createElement('input', {
      type: 'text',
      value: input2,
      onChange: (e) => setInput2(e.target.value),
      placeholder: 'Enter second number',
    }),
    React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: handleAdd },
        'Add'
      ),
      React.createElement(
        'button',
        { onClick: handleSubtract },
        'Subtract'
      ),
      React.createElement(
        'button',
        { onClick: handleMultiply },
        'Multiply'
      ),
      React.createElement(
        'button',
        { onClick: handleDivide },
        'Divide'
      )
    ),
    React.createElement(
      'div',
      null,
      'Result: ',
      result !== null ? result : ''
    )
  );
};

export default CalculatorNoJSX;

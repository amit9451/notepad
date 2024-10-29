import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const containerStyle = {
      backgroundColor: '#66f', // Background color
      color: '#333', // Text color
      padding: '20px',
      borderRadius: '5px',
      textAlign: 'center',
    };

    return (
      <div style={containerStyle}>
        <h1>Email:amit07109@gmail.com</h1>
       
      </div>
    );
  }
}

export default Counter;

import React from 'react';

class Clock extends React.Component {
      constructor(props) {
            console.log("construction methid");
            super(props);
            this.state = {
                  date: new Date()
            };
      }

      componentDidMount() {
            console.log("Called componentDidMount");
            this.timerID = setInterval(
                  () => this.tick(),
                  1000
                );
      }
    
      componentWillUnmount() {
            console.log("Called componentWillUnmount");
            clearInterval(this.timerID);
      }
    
      render() {
            console.log("render method");
            return (
            <div>
                  <h1>Hello, world!</h1>
                  <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );
      }

      tick () {
            console.log("Tick function Called");
            this.setState({
                  date: new Date()
            });
      }
}

export default Clock
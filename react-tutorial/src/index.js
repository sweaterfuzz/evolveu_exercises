import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import element from './TutElement';


/* Components written as functions: */
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  
function AllTheWelcomes() {
    return (
        <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        </div>
    );
}
// ----------------------------- //

/* Components written as a class: */
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        // The only place where you can assign this.state directly 
        // is the constructor.
    }
    
    // lifecycle methods:
    componentDidMount() {
        // set timer that refreshes the clock
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}
// ----------------------------- //


ReactDOM.render(
    //<App />, 
    //element, 
    //<AllTheWelcomes />,
    <Clock />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

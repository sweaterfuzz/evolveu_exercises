import React, { Component } from 'react';
import { FaBeer, FaNetworkWired, FaGrin } from 'react-icons/fa';
import LinkedListComp from './components/LinkedListComp';
import PeopleComp from './components/peopleComp';
import DblListComp from './components/DblLinkedListComp';

class App extends Component {

  constructor() {
    super();
    this.state = {
      toShow: 'logo'
    }
  }

  onPassedFunction = () => {
    console.log("hello from the App function");
  }

  onIcon = (e) => {
    console.log(e.currentTarget.name);
    this.setState({
      toShow: e.currentTarget.name
    });
  }

  render() {
    let showApp;

    switch (this.state.toShow) {
      case 'll':
        showApp = <div><LinkedListComp name='props getting passed'/></div>
        break;
      case 'grin':
        showApp = <div><PeopleComp /></div>
        break;
      case 'beer':
        showApp = <div><DblListComp name='props getting passed'/></div>
        break;
      default:
        showApp = <div> Hi! </div>
    }

    return (
      <div className="umbrellaApp">
        {/* <LinkedListComp name='Top' func={this.onPassedFunction}/> */}
        <h1>Explore some react apps</h1>
        <button onClick={this.onIcon} name="beer"><FaBeer size="34px" /></button>
        <button onClick={this.onIcon} name="grin"> <FaGrin size="34px" /></button>
        <button onClick={this.onIcon} name="ll"> <FaNetworkWired size="34px" /> </button>

        <div> {showApp} </div>

      </div>
    );
  }
}

export default App;

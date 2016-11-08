//////////////////////////////////////////////////////////////////////
//
//  The top level App component.
//
//////////////////////////////////////////////////////////////////////

import React from 'react';
import Hello from './Hello.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return <Hello />
  }
}

export default Hello;

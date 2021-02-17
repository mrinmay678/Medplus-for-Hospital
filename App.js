import React, { Component } from 'react';

import InitialStackScreen from './routes/initialscreens';
import ContextStackScreen from './routes/contentpagescreens';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      jwt:'',
    }
    this.newJWT=this.newJWT.bind(this);
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }

  
  render(){
    if (!this.state.jwt){ 
      return (  
        <InitialStackScreen newJWT={this.newJWT}/>
     );
    }
    else{
      return(
        <ContextStackScreen/>        
      );
    }
  }
}

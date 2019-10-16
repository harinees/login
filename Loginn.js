import React from 'react';
import axios from 'axios';
import {Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
/*import history from './history'; */

class Loginn extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  redirectToReferrer: false 

  }
  }

 handleClick(event){
    var apiBaseUrl = "https://reqres.in/api/login";
     
    var payload={
    "email":this.state.username,
    "password":this.state.password
    }
    axios.post(apiBaseUrl, payload)
    .then(function (response) {
    console.log(response.status);
    if(response.status === 200){
      console.log("Login successfull");
      
      this.setState({
        redirectToReferrer: true 
      })
     }
    }.bind(this))
    .catch(function (error) {
      alert("wrong password/username ");
    console.log(error);
    });
    }

render() {
  
  const {redirectToReferer}  = this.state;
  console.log(redirectToReferer);
  if(this.state.redirectToReferrer === true) {
    return(
      <Redirect to="/dashboard" /> 
    )
  }

    return (
      <div>
         
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
 
export default Loginn;
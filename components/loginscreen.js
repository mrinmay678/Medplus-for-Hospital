import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import deviceStorage from '../services/devicestorage';
import DashBoard from './dashboard';

class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      password:'',
      error:'',
      loading: false
    };

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(){
    const { id, password} = this.state;

    this.setState({error:'',loading:true});

    axios.post('',{
      id: id,
      password: password
    })
    .then((response)=>{
      deviceStorage.saveItem("id_token",response.data.jwt);
      this.props.newJWT(response.data.jwt);
    })
    .catch((error)=>{
      this.setState({
        error:'Login Failed',
        loading: false
      });
    });
  }


  render(){

    const { id, password, error, loading } = this.state;

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.logo}>
        <Image 
          source={require('../assets/img1.jpg')}
          style={{
              width:"100%",
              height:200
          }}/>           
        </View>
        <View style={styles.form}>
        <Text style={styles.text}>Login Page</Text>
          <View style={styles.form1}>
            <Text style={styles.text1}>Doctor's ID</Text>
            <TextInput 
              placeholder="ID"
              onChangeText={(id)=>this.setState({id})}
              />
            <Text style={styles.text1}>Password</Text>
            <TextInput 
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password)=>this.setState({password})}
              />
          </View>
        <Text style={styles.errorTextStyle}>{error}</Text>
          <TouchableOpacity onPress={()=>{}}>
              <View style={styles.fsButton}>
                <Text style={styles.fsText}>Forgot Password</Text>
              </View>
          </TouchableOpacity>
          {!loading ?
            <TouchableOpacity onPress={this.loginUser}>
              <View style={styles.signButton}>
                <Text style={styles.signText}>Sign In</Text>
              </View>
          </TouchableOpacity>
          :
          <ActivityIndicator />}
          <TouchableOpacity onPress={()=>{}}>
              <View style={styles.aButton}>
                <Text style={styles.aText}>Apply as Independent Practisioner</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DashBoard')}}>
              <View style={styles.aButton}>
                <Text style={styles.aText}>DashBoard</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo:{
    flex:2,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },
  form:{
    flex:3,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'column',
  },
  form1:{
    paddingBottom:20,
    paddingTop:60,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },
  text:{
    fontSize:35
  },
  text1:{
    fontSize:20
  },
  signButton:{
    backgroundColor:'red',
    width: 250,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 150,    
  },
  signText:{
    color:'white',
    fontSize:20
  },
  fsButton:{
    width: 200,
    height: 30,
    alignItems:'center',
    justifyContent:'center', 
    paddingBottom:10
  },
  fsText:{
    color:'blue',
    fontSize:20
  },
  aButton:{
    width: 200,
    height: 30,
    alignItems:'center',
    justifyContent:'center', 
    paddingTop:10 
  },
  aText:{
    color:'red',
    fontSize:12
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
});

export default LoginScreen;

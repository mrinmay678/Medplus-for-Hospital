import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


const SplashScreen = (props) => {
  return (
    <View style={styles.home}>
        <Image 
        source={require('../assets/img1.jpg')}
        style={{
            width:"100%",
            height:300
        }}/>  
        <TouchableOpacity onPress={()=>{props.navigation.navigate("LoginScreen")}}>
            <View style={styles.startButton}>
            <Text style={styles.startText}>Let's Get Started</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  home:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  startButton:{
    backgroundColor:'red',
    width: 250,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 150,    
  },
  startText:{
    color:'white',
    fontSize:20
  }
});

export default SplashScreen;

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableOpacityComponent,
  FlatList,
  Dimensions
} from 'react-native';

const dataList = [
  {
    key:'My Profile',
    u:'Profile'
  },
  {
    key:'My Paitents',
    u:'Paitent'
  },
  {
    key:'My Appointments',
    u:'Appointment'
  },
  {
    key:'Notifications',
    u:'Notification'
  },
  {
    key:'Settings',
    u:'Setting'
  },
  {
    key:'Logout',
    u:'LogOut'
  },
]
const numColumns = 2
const WIDTH = Dimensions.get('window').width
export default class Home extends Component {
  constructor(props){
    super(props);
  }

  _renderItem = ({item,index})=>{
    gridclicked=(item)=>{
      if(item.key=='My Profile'){
        return this.props.navigation.navigate('Profile')
      }
      else if(item.key=='My Paitent'){
        return this.props.navigation.navigate('Paitent')
      }else if(item.key=='My Appointments'){
        return this.props.navigation.navigate('Appointment')
      }else if(item.key=='Notifications'){
        return this.props.navigation.navigate('Notification')
      }else if(item.key=='Settings'){
        return this.props.navigation.navigate('Setting')
      }else if(item.key=='Logout'){
        return this.props.navigation.navigate('LogOut')
      }
    }
    return(
      <View style={styles.box}>
        <TouchableOpacity onPress={()=>{gridclicked(item)}}>
        <Text style={styles.inner}>{item.key}</Text>
        </TouchableOpacity>
      </View>
  
    )
  }
  render(){
  return (
    <View style={styles.home}>
        <FlatList
          data={dataList}
          renderItem={this._renderItem}
          keyExtractor={(item,index)=>index.toString()}
          numColumns={numColumns}
        />
    </View>
  )
}
};

const styles = StyleSheet.create({
  home:{
    flex:1,
  },
  box:{
    backgroundColor:'#ff0000',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:WIDTH/numColumns,
    margin:1
  },
  inner:{
    color:'#fff',
    fontSize:30,
  },
});

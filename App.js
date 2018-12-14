import React, {Component} from 'react';
import{StyleSheet,Text,View,TouchableOpacity,Alert} from 'react-native';
import {RkButton} from 'react-native-ui-kitten'

export default class App extends Component{
 state={
    num:true,
    list:[{name:'raja'},{name:'veera'}]
   };

 render(){
   return(
     <View style={styles.container}>
     <Text style={styles.name}>{this.state.num?this.state.list[0].name:this.state.list[1].name}</Text>
     <TouchableOpacity style={styles.tbutton} onPress={()=>{Alert.alert("hai");}}>
       <Text>change</Text>
     </TouchableOpacity>
     <RkButton onPress={
       ()=>{
       this.setState(
         previousState=>{return({ num: !this.state.num });});
     }}> click me</RkButton>
     </View>
   );
 }



}
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },
  tbutton:{
    backgroundColor: '#abf',
    alignItems: 'center',
    width: 300,
    height: 100,
    justifyContent: 'center',



  },
});

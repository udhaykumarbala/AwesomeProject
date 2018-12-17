import React, {Component} from 'react';
import{StyleSheet,View,TouchableOpacity,Alert} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';
import App from '../App';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class HomeScreen extends Component{
  static navigationOptions = {
    header: null,
  };
 state={
    num:true,
    list:[{name:'raja'},{name:'veera'}]
   };

 render(){
   return(



       <Container style={StyleSheet.container}>
         <Header style={StyleSheet.head}>
           <Left><Button transparent><Icon name='menu'/></Button></Left>
           <Body><Text style={styles.tt}>kkkk</Text></Body>
           <Right/>
         </Header>
          <Content>
     <Text style={styles.name}>{this.state.num?this.state.list[0].name:this.state.list[1].name}</Text>
     <TouchableOpacity style={styles.tbutton} onPress={()=>{this.props.navigation.navigate('Details');}}>
       <Text style={styles.tt}>change</Text>
     </TouchableOpacity>
     <RkButton onPress={
       ()=>{
       this.setState(
         previousState=>{return({ num: !this.state.num });});
     }}> click me</RkButton>
   </Content>
     <Footer>
       <FooterTab><Text style={styles.tt}>screen-1</Text></FooterTab>
       <FooterTab><Text style={styles.tt}>screen-2</Text></FooterTab>
     </Footer>
   </Container>


 );
 }



}
const styles = StyleSheet.create({
  container:{
    marginTop:100,
  },
  tbutton:{
    backgroundColor: '#abf',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tt:{
    color: '#fff',
    fontSize: 32,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  head: {
    marginTop:100,
  },
});

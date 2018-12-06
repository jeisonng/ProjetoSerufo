/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TouchableOpacity, View} from 'react-native';
//import firebase from 'firebase';




type Props = {};
export default class App extends Component<Props> {

 /* componentWillMount () {
    //Posso Fazer qualquer tipo de configuração global aqui como por exemplo o Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: "AIzaSyBS-Ltt7gmDwVDtI5T3JzrNMlJ-ug66s_8",
        authDomain: "flitter-db915.firebaseapp.com",
        databaseURL: "https://flitter-db915.firebaseio.com",
        projectId: "flitter-db915",
        storageBucket: "flitter-db915.appspot.com",
        messagingSenderId: "205532639397"
      })
    }
  
  }*/



  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity style={styles.Button}>
         <Text style={styles.Text}>     Inserir Item </Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Button}>
         <Text style={styles.Text}>     Lista Item </Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Button}>
         <Text style={styles.Text}>   Update Item </Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Button}>
         <Text style={styles.Text}>     Delete Item </Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Button:{
    borderColor:'black',
    padding:10,
    justifyContent:'center',
    width:200,
    height:10,
  },
  Button:{
    borderColor:'black',
   borderWidth:1,
   width:100,
   textAlign:'center',
   marginTop:30,
   justifyContent:'center',
   paddingTop:20,
   paddingBottom:20,
  }
});

import { StatusBar } from 'expo-status-bar';
import React, {useState , useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import axios from 'axios';
import { Card, Title, Paragraph, Button, Text} from 'react-native-paper';

export default function App() {
  
  const [fa, newfa] = useState('HELLO ')
  
  function getQuote(){
    axios.get('https://asli-fun-fact-api.herokuapp.com/?ref=publicapis.dev').then(res =>{
      let obj = JSON.parse(res.request._response)
      newfa(obj.data.fact)
    })
  }


  return (
    <View style={styles.container}>
      <Card style={styles.card}>
    <Card.Content>
      <Title><Text adjustsFontSizeToFit minimumFontScale={.5} numberofLines={3} style={styles.text}>{fa}</Text></Title>
    </Card.Content>
  </Card>
      <Button mode='contained' color='#FF7878' onPress={getQuote}>click me</Button>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEE5D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    color: '#FF7878',
    mode: 'contained',
    borderRadius:10,

  },
  card:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom:20,
    color:"#F3F0D7",
    textAlign:'center',
    borderRadius:12,
    
  },
  text:{
    color: 'red',
    textAlign:"center",
    textAlignVertical:"center",
    fontSize:20,
    flexGrow:1,
  }
});

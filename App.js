import React from 'react'; 
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native'; 
 
export default function App() { 
  return ( 
    <View style={styles.container}> 
      <View> 
        <Text style={styles.title}>Sign Up / Register</Text> 
        <Text style={styles.miniTitle}>Login In To Your Existant Account</Text> 
      </View> 
      <View> 
        <Text style={styles.reg}>Enter Your Mail</Text> 
        <TextInput style={styles.input} placeholder="  example@gmail.com" /> 
      </View> 
      <View> 
        <Text style={styles.reg1}>Enter Your Password</Text> 
        <TextInput style={styles.input1} placeholder="  ******" /> 
      </View> 
      <View style={styles.bu}> 
        <Button title="LOGIN" color="orange" onPress={()=>alert("Login Successfully")}></Button> 
      </View> 
      <View style={styles.bu1}> 
        <Button title="Regester" color="grey" onPress={()=>alert("Regiser Successfully")}></Button> 
      </View> 
      <View style={styles.bu2}> 
        <Button title="Click ME" color="blue" onPress={()=>alert("Click Successfully")}></Button> 
      </View> 
 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#EEE', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
 
  title: { 
    fontSize: 35, 
    fontWeight: 'bold', 
    color: 'black', 
  }, 
  miniTitle: { 
    fontSize: 15, 
    textAlign: 'center', 
    color: 'red', 
  }, 
  reg: { 
    padding: 50, 
    textAlign: 'left', 
    marginLeft: -45, 
    marginBottom: -40, 
    color: 'black', 
  }, 
  input: { 
    borderWidth: 1, 
    textAlign: 'left', 
    width: 350, 
    borderRadius: 8, 
  }, 
  reg1: { 
    padding: 20, 
    textAlign: 'left', 
    marginLeft: -15, 
    marginBottom: -10, 
    color: 'black', 
  }, 
  input1: { 
    borderWidth: 1, 
    textAlign: 'left', 
    width: 350, 
    borderRadius: 8, 
  }, 
 
  bu: { 
    padding: 40, 
    textAlign: 'center', 
    borderRadius: 8, 
    marginLeft: 200, 
  }, 
  bu1: { 
    padding: 40, 
    textAlign: 'center', 
    borderRadius: 8, 
    marginTop: -115, 
    marginLeft: -150, 
  }, 
 
  bu2: { 
    padding: 10, 
    textAlign: 'center',     
  }, 
});
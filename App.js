import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard'
let charset = 'abcde123456789fghijklmno123456789pqrstuvwxy123456789zABCDEFGHIJKL123456789MNOPQRSTUVWXYZ0123456789';

export default function app() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(5);
  function generatePass() {
    let pass = '';

    for(let i = 0, n = charset.length; i < size; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }
  function copyPass() {
    Clipboard.setString(password);
    alert('Senha ' + password + ' Copiado com sucesso!');
  }
  return(
      <View style={styles.container}>
        <Image 
          source={require('./src/assets/logo.png')}
          style={styles.logo}
          />
          
          <Text style={styles.title}>Mínimo de {size} caracteres</Text>
          
          <View style={styles.area}>
            <Slider 
              style={{height: 50}}
              minimumValue={5}
              maximumValue={15}
              minimumTrackTintColor="#FF0000"
              maximumTrackTintColor="#000"
              value={size}
              onValueChange={(valor)=>setSize(valor.toFixed(0))}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={generatePass}>
            <Text style={styles.buttonText}> Gerar Senha</Text>
          </TouchableOpacity>
          
          {password != '' && (
            <View style={styles.area}>
              <Text style={styles.password} onPress={copyPass}>{password}</Text>
            </View>
          )}
          
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  logo:{
    marginBottom: 60
  },
  title:{
    fontSize:25,
    color:'gray',
    fontWeight: 'bold'
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#f1f1f1',
    width: '80%',
    borderRadius: 7
  },
  button:{
    backgroundColor: '#388e3c',
    width:'80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText:{
    fontSize: 23,
    color:'white',
    fontWeight: 'bold'
  },
  password:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }

});
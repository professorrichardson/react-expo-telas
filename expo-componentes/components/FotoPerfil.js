import React from 'react';
import { Image } from 'react-native'


export default function FotoPerfil(){
  return(
    <Image
    
    source={require('../img/01.jpeg')}
    style={{ width : 100, height:100, borderRadius: 50, marginBottom:10 }}
    
    />
  );
}
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import estilos from '../style/style'
import fotos from '../img/fotos'

export default function CartaoUsusario({nome,descricao,img}){
  return(
    <View style={estilos.cartao}>  
    <Image source={fotos[img]} style={estilos.foto}/>
    <Text style={estilos.nome}> {nome} </Text>
    <Text style={estilos.descriao}> {descricao} </Text>
    </View>

  );
}
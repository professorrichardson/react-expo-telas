import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from './components/Titulo'
import Saudacao from './components/Saudacao'
import FotoPerfil from './components/FotoPerfil'
import CartaoUsusario from './components/CartaoUsusario'

export default function App() {
  return <ScrollView>
  
  <Titulo />
  <Saudacao pessoa='Richardson'/>
  <FotoPerfil />

  <CartaoUsusario 
    nome='Joana' 
    descricao='programadora' 
    img='perfil00' 
  />

   <CartaoUsusario 
    nome='Jonatha' 
    descricao='Dev Games' 
    img='perfil02' 
  />

   <CartaoUsusario 
    nome='Levi' 
    descricao='Dev Senior' 
    img='perfil01' 
  />

   <CartaoUsusario 
    nome='Sei lá' 
    descricao='Dev seila' 
    img='perfil03' 
  />


  </ScrollView>;
}






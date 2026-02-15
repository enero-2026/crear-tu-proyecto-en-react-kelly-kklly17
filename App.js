import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Alumno  from "./Alumno";
import { useState } from 'react';
import { SafeAreaView} from 'react-native-web';

export default function App() {

  const Alumnos= [
    {
      nombre: 'CANDELARIA MORA SAMANTHA',
      matricula: '2114354'
    },
    {
      nombre: 'AGUILAR ORTIZ LUIS ROLANDO',
      matricula: '2121179'
    },
    {
      nombre: 'BARRIENTOS GALLEGOS DIEGO',
      matricula: '2048051'
    },
     {
      nombre: 'CANO MONTIEL KELLY YISSETH',
      matricula: '1979822'
    },
     {
      nombre: 'CANTU SILVA JAVIER',
      matricula: '2111889'
    },
     {
      nombre: 'CARMONA LOZANO ANGEL EMILIANO',
      matricula: '2069119'
    },
     {
      nombre: 'CASTILLO ACOSTA JORGE',
      matricula: '2132842'
    },
     {
      nombre: 'DAVILA GONZALEZ ALDO ADRIAN',
      matricula: '1994122'
    },
     {
      nombre: 'DURAN BARRIENTOS FABRIZIO',
      matricula: '2018230'
    },
     {
      nombre: 'FLORES GONZALEZ SEBASTIAN',
      matricula: '2104564'
    }
]

  return(
    <SafeAreaView style = {estilos.container}>
    <ScrollView contentContainerStyle={estilos.contenido}>    
      {Alumnos.map((Alumno) =>
        (
        <Alumno key = {Alumno.matricula} nombre = {Alumno.nombre} matricula = {Alumno.matricula}></Alumno>
        )
      )}
    </ScrollView>  
    </SafeAreaView>
    )
}


const estilos = StyleSheet.create({
  boton: {
    backgroundcolor: '#F5276C',
    color: '#624b97'
  }
});

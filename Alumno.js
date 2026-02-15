import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Alumno(props) {
    return (
        <View style={estilos.contenedor}>
            <Text>{props.nombre}</Text>
            <Text>{props.matricula}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
  contenedor: {
   backgroundcolor: '#F5276C', 
   color: '#624b97'
  }
});





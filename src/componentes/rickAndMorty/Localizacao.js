import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default props => {
    return(
        
        <View style={{backgroundColor: 'gray', marginVertical: 3, height: 150,
            borderRadius: 15, justifyContent: 'space-between', padding: 10, alignItems: 'center', minWidth: 250}}>
            <Text style={style.Texto}>{props.eps.name}</Text>
            <Text style={style.Texto}>Resdidentes: {props.eps.residents.length}</Text>
            <Text style={style.Texto}>{props.eps.dimension}</Text>
            

        </View>
    )
 }

 const style = StyleSheet.create({
    Texto: {
        color: 'white', 
        textAlign: 'center'
    }
 })
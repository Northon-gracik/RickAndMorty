import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default props => {
    return(
        
        <View style={{backgroundColor: 'gray', marginVertical: 3, height: 150,
            borderRadius: 15, justifyContent: 'space-between', padding: 10, alignItems: 'center',
             width: '100%',display: 'flex',
            }}>
            <Text style={style.Texto}>{props.eps.name}</Text>
            <Text style={style.Texto}>Personagens: {props.eps.characters.length}</Text>
            <Text style={style.Texto}>{props.eps.episode}</Text>
            <View style={{width: '30%'}}>
                           
            </View>

        </View>
    )
 }

 const style = StyleSheet.create({
    Texto: {
        color: 'white', 
        textAlign: 'center'
    }
 })
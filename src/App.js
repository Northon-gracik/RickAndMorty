
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Icon } from 'react-native-elements'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack' 

import styles from './componentes/estilo'

import Episodios from './componentes/rickAndMorty/Episodios'
import Personagens from './componentes/rickAndMorty/Personagens'
import Localizacoes from './componentes/rickAndMorty/Localizacoes'


const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Episodios" 
                screenOptions={screenOptions}>
                    <Stack.Screen
                        name='Episodios'
                        component={Episodios}
                        options={( {navigation} ) => {
                            return {
                                title: 'Episodios',
                                headerRight: () => (
                                    <View style={{flexDirection: 'row'}}>
                                    <Button
                                        onPress={() => navigation.navigate('Localizacoes')}
                                        type='clear' 
                                        icon={<Icon name="add" size={25} color="white" /> }
                                    />
                                    <Button
                                        onPress={() => navigation.navigate('Personagens')}
                                        type='clear' 
                                        icon={<Icon name="add" size={25} color="white" /> }
                                    />
                                    </View>
                                    
                                )
                            }
                        }}

                    />
                    <Stack.Screen
                        name='Personagens'
                        component={Personagens}
                    />
                    <Stack.Screen
                        name='Localizacoes'
                        component={Localizacoes}
                    />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor : '#303030'
    },
    headerTintColor: '#fff',
}
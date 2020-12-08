import React, { useState } from 'react'
import { Button, FlatList, ScrollView } from 'react-native';
import { Text, View } from 'react-native'

import styles from '../estilo'

import Localizacao from './Localizacao';

export default props => {
    const axios = require('axios');

    const [eps, setEps] = useState([]);

    const [page, setPage] = useState(1);

    (async () => {
        const teste = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
        setEps(teste.data.results)
    })()

    return(
        <ScrollView>
            <View style={styles.App}>
                <View style={{ width: '98%' }}>
                    {eps.map(ep => {
                        return <Localizacao key={ep.id} eps={ep}/>
                    })}
                    <View style={{paddingBottom: 30,paddingTop: 15, flexDirection: 'row-reverse', 
                        justifyContent: 'space-around'}}>
                        <View style={{width: '45%'}}>
                            <Button
                                color="gray"
                                title="Proxima Pagina"
                                onPress={() => {
                                    if(page < 6){
                                        setPage(page + 1)
                                    }
                                }}
                            />
                        </View>
                        <View style={{width: '45%'}}>
                            <Button
                                color="gray"
                                title="Pagina Anterior"
                                onPress={() => {
                                    if(page > 1){
                                        setPage(page - 1)
                                    }
                                }}
                            />
                        </View>
                    </View>
                    
                </View>
            </View>
        </ScrollView>
    )
 }
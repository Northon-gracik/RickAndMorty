import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    App:{
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#181818',
        justifyContent: 'center',
        
    },
    txtG:{
        fontSize: 34
    }, 
    btn:{
        color: '#bfb'
    },
    x:{
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    separador:{
        padding: 10
    },
    texto:{
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        height: 50,
        backgroundColor: 'gray',
        width: 350,
        marginTop: 10,
        borderRadius: 15,
        padding: 10,
    },
    entediado:{
        width: 350,
        backgroundColor: 'gray',
        marginVertical: 5,
        padding : 15,
        borderRadius: 15,
        alignItems: 'center',
    }
})
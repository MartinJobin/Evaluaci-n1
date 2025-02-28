import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Pantalla3 = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

export default Pantalla3
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7dff33',
        justifyContent: 'center',

        alignItems: 'center',


    },
    caja1: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: '#f6ff33',

        position: 'relative',
        alignSelf: 'flex-end',





    },
    caja2: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'green',
        position: 'relative',
        alignSelf: 'flex-start',




    },
    caja3: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'red',
        position: 'relative',

        top: 0,


    },
})

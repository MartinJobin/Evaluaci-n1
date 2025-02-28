import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Pantalla8 = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

export default Pantalla8
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa833',
        justifyContent: 'center',
        alignItems: 'center',


    },
    caja1: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'red',



    },
    caja2: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'green',
        position: 'relative',
        left: 100,

    },
    caja3: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'blue',


    },
})

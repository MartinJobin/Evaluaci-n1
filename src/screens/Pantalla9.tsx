import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Pantalla9 = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

export default Pantalla9

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa833',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',


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
        top: 50,

    },
    caja3: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'blue',


    },
})
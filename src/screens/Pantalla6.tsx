import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Pantalla6 = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

export default Pantalla6
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa833',
        justifyContent: 'center',
        alignItems: 'stretch',




    },
    caja1: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'red',


    },
    caja2: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'green',

    },
    caja3: {
        flex: 2,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'blue',




    },
})
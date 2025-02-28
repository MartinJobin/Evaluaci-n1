import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Pantalla1 = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}
export default Pantalla1
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa833',

        alignItems: 'center',

    },
    caja1: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'red',
        alignSelf: 'flex-end',
    },
    caja2: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end',

    },
    caja3: {
        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        alignSelf: 'flex-end',

    },
})
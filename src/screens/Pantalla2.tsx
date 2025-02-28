import React from 'react';
import { StyleSheet, Text, View } from 'react-native'


const Pantalla2 = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

export default Pantalla2
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',


    },
    caja1: {

        borderWidth: 6,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'green',
        


    },
    caja2: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        

    },
    caja3: {

        borderWidth: 5,
        borderColor: 'white',

        height: 100,
        backgroundColor: 'blue',

    },
})

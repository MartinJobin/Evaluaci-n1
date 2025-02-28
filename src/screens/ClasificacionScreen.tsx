import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ClasificacionScreen = () => {

    // arreglos

    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    // Claisficación de los numeros.

    const clasificarNumeros = () => {
        setPares(numeros.filter(num => num % 2 === 0));
        setImpares(numeros.filter(num => num % 2 !== 0));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BIENVENIDO</Text>
            <Text style={styles.vector}>Vector: {numeros.join(', ')}</Text>

            <TouchableOpacity style={styles.button} onPress={clasificarNumeros}>
                <Text style={styles.buttonText}>CLASIFICAR</Text>
            </TouchableOpacity>

            <Text style={styles.result}>Pares: {pares.join(', ')}</Text>
            <Text style={styles.result}>Impares: {impares.join(', ')}</Text>
        </View>
    );
};

// Campo de estilos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c733ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#33fcff',
    },
    vector: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight:'bold',
    },
    button: {
        backgroundColor: '#335bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    result: {
        fontSize: 20,
        marginTop: 40,
        fontWeight:'bold',
    },
});

export default ClasificacionScreen;

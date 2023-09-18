import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    cortexto: {
        color: '#000',
    },
});

type InfoPaises = {
    valor: string;
    texto: string;
};

const InfoPaises = ({ valor, texto }: InfoPaises) => {
    return (
        <View style={{flexDirection: 'row', padding: 1,}}>
            <Text style={{fontWeight: 'bold', color: '#000', flex: 0.4}}>
            {texto}: 
            </Text>
            <Text style={{color: '#000', flex: 0.6}}>
             {valor}
            </Text>
        </View>
        
    );
}

export default InfoPaises;
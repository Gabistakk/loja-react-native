import { React, useState } from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { Input } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function User() {

    const [name, setName] = useState('Lucas de Oliveira')
    const [actualText, setActualText] = useState('')

    function mudarNome(){
        setName(actualText);
        this.textInput.clear();
    }


    return (
        <View style={styles.container}>
            <Image style={styles.imagemPFP} source={require('../assets/pfp.jpg')}/>
            <Text style={{fontSize: 30,}}>{name}</Text>
            <View style={{height: 60}}></View>
            <Text style={{fontSize: 20}}>Alterar nome</Text>
            <Input
            onChangeText={(text) => setActualText(text)}
            ref={input => { this.textInput = input }}
            placeholder='ALTERE SEU NOME'
            />
            <MaterialIcons name="update" size={70} color="black" onPress={mudarNome}/>
        </View>
    );
}





import React, { useState } from "react";
import { View, Text, Button } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import CountDown from "react-native-countdown-component";

export function screencountdown(){
    const navigation = useNavigation()
    const route = useRoute()
    const { name } = route.params
    const [ Counter, setCounter] = useState(name)

    return(
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <CountDown
                until={Counter}
                onFinish={ () => alert('Finalizado')}
                size={25}
            />
            <Button
                title="Voltar"
                onPress={ () => navigation.goBack()}
            />
        </View>
    )
}
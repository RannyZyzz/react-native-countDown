import React, { useState } from "react";
import { View, Button, Alert } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import CountDown from "react-native-countdown-component";

export function ScreenCountDown(){
    const navigation = useNavigation()
    const route = useRoute()
    const { name } = route.params
    const [ Counter, setCounter] = useState(name)

    return(
        <>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'  }}>
            <CountDown
                until={Counter}
                onFinish={ () => alert('Finalizado')}
                size={25}
            />
        </View>
        <View style={{flex: 0.3}}>
            <Button
                title="Encerrar"
                onPress={ () => Alert.alert(
                    "Atenção",
                    "Tem certeza que deseja finalizar o contador?",
                    [
                        {text: 'Sim', onPress: () => navigation.goBack()},
                        {text: 'Não'}
                    ])}
            />
        </View>
        </>
    )
}
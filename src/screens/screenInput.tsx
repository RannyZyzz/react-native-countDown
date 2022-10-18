import React,{ useState } from "react"
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { convertDate } from "../components";

export function screenInput(){
    const navigation = useNavigation()
    const dataAtual = new Date().getTime()
    const [date, setDate] = useState(new Date(dataAtual));
    

    const onChange = (event: any, selectedDate: any) => {
      const currentDate = selectedDate;
      setDate(currentDate);
      //console.log(currentData) nova data selecionada
    };

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        });
      };

    const showDatepicker = () => {
        showMode('date');
      };

    
      function openScreen(){
        const toSeconds = convertDate(dataAtual,date)//converte para segundos a data atual subtraido da data solicitada
        navigation.navigate('screencountdown', {name: toSeconds})
    }

    return(
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Button 
            onPress={showDatepicker} 
            title="Selecione a data" 
             />
            
            <Button
                title="Avançar"
                onPress={openScreen}
            />
        </View>
    )
}
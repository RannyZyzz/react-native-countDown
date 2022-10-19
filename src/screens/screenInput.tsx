import React,{ useState } from "react"
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { convertDate } from "../components";

export function ScreenInput(){
    const navigation = useNavigation()
    const dataAtual = new Date().getTime()
    const [date, setDate] = useState(new Date(dataAtual));
    
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
      hideDatePicker();
      setDate(date)
    };


    
    function openScreen(){
      const toSeconds = convertDate(dataAtual,date)//converte para segundos a data atual subtraido da data solicitada
      navigation.navigate('ScreenCountDown', {name: toSeconds})
  }

    return(
      <>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Button title="Seletor de data" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
        </View>
        <View style={{flex: 1,alignItems: 'center'}}>
            <Button
                title="Simular"
                onPress={openScreen}
            />
            
        </View>
        </>
    )
}
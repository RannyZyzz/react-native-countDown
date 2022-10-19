import {createNativeStackNavigator} from '@react-navigation/native-stack'

const { Screen,Navigator } = createNativeStackNavigator()

import { ScreenInput } from '../screens/screenInput'
import { ScreenCountDown } from '../screens/screenCountDown'

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name="ScreenInput"
                options={{
                    title:"Tela inicial",
                    headerTitleAlign: "center",
                }}
                component={ScreenInput}
                    
            />

            <Screen 
                name="ScreenCountDown"
                options={{
                    title:"CountDown",
                    headerTitleAlign:"center",
                    headerBackVisible: false,
                }}
                component={ScreenCountDown}
            />
        </Navigator>
    )
}
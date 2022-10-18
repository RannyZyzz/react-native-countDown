import {createNativeStackNavigator} from '@react-navigation/native-stack'

const { Screen,Navigator } = createNativeStackNavigator()

import { screenInput } from '../screens/screenInput'
import { screencountdown } from '../screens/screenCountDown'

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name="screenInput"
                options={{
                    title:"Tela inicial",
                    headerTitleAlign: "center"
                }}
                component={screenInput}
                    
            />

            <Screen 
                name="screencountdown"
                options={{
                    title:"CountDown",
                    headerTitleAlign:"center"
                }}
                component={screencountdown}
            />
        </Navigator>
    )
}
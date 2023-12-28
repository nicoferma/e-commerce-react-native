import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PizarraRosario from "../Screens/PizarraRosario";
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()


const InfoNavigator = () => {
    return (
            <Stack.Navigator
                initialRouteName="pizarraRosario"
                screenOptions={
                    ({ navigation, route }) => {
                        return ({
                            header: () => <Header title={route.name} navigation={navigation} />
                        })
                    }
                }
            >
                <Stack.Screen
                    name="pizarraRosario"
                    component={PizarraRosario}
                    options={{ title: 'Pizarra Rosario' }}
                />
            </Stack.Navigator>

    )
}

export default InfoNavigator
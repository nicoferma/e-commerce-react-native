import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClimaScreen from "../Screens/ClimaScreen";
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()


const MyHorsesNavigator = () => {
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
                    component={ClimaScreen}
                    options={{ title: 'Pizarra Rosario' }}
                />
            </Stack.Navigator>
    )
}

export default MyHorsesNavigator
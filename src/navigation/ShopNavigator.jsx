import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../Screens/Categories";
import ProductsByCategory from "../Screens/ProductsByCategory";
import ProductDetail from "../Screens/ProductDetail";
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()


const Navigator = () => {
    return (
            <Stack.Navigator
                initialRouteName="categories"
                screenOptions={
                    ({ navigation, route }) => {
                        return ({
                            header: () => <Header title={route.name} navigation={navigation} />
                        })
                    }
                }
            >
                <Stack.Screen
                    name="categories"
                    component={Categories}
                    options={{ title: 'Categorías' }}
                />
                <Stack.Screen
                    name="products"
                    component={ProductsByCategory}
                    options={{ title: 'Productos' }}
                />
                <Stack.Screen
                    name="detail"
                    component={ProductDetail}
                    options={{ title: 'Detalle del producto' }}
                />
            </Stack.Navigator>
    )
}

export default Navigator
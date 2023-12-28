import { Pressable, StyleSheet, Text, View } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'
import { useDispatch } from "react-redux"
import { setCategorySelected } from '../features/shopSlice'

const CategoryItem = ({ category, navigation }) => {
    const dispatch = useDispatch()

    const onCategoryItemHandler = () => {
        navigation.navigate("products")
        dispatch(setCategorySelected(category))
    }

    return (
        <Pressable onPress={onCategoryItemHandler}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 20,
        paddingLeft: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    text: {
        textTransform: "capitalize",
        fontSize: 15,
        fontFamily: 'Montserrat-Medium',

    },
})
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'

const CategoryItem = ({ category, navigation }) => {
    return (
        <Pressable onPress={() => navigation.navigate("products", { category })}>
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
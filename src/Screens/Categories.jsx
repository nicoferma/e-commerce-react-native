import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoryItem from '../Components/CategoryItem'
import { useSelector } from 'react-redux'

const Categories = ({ navigation }) => {

    const categories = useSelector(state=>state.shopReducer.categories)

    return (
        <View style={styles.container}>
            <FlatList
                styles={styles.container}
                renderItem={({ item }) => <CategoryItem category={item} navigation={navigation} />}
                data={categories}
                keyExtractor={category => category}
            />
        </View>
    )
}


export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
})
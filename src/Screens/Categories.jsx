import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoryItem from '../Components/CategoryItem'
import categories from '../data/categories_data.json'

const Categories = ({ navigation }) => {

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
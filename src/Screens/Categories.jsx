import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import CategoryItem from '../Components/CategoryItem'
import categories from '../data/categories_data.json'

const Categories = ({ categoryPressHandler }) => {

    return (
        <>
            <Header title="Categorías" isBack={false} />
            <View style={styles.container}>
                <FlatList
                    styles={styles.container}
                    renderItem={({ item }) => <CategoryItem category={item} categoryPressHandler={categoryPressHandler} />}
                    data={categories}
                    keyExtractor={category => category}
                />
            </View>
        </>
    )
}


export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
})
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'
import Search from '../Components/Search'
import { ActivityIndicator, FlatList, View, Text } from 'react-native'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const ProductsByCategory = ({ navigation }) => {
    const [productsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    const productsFilteredByCategory = useSelector(state => state.shopReducer.productsFilteredByCategory)

    useEffect(() => {
        setIsSearching(true)
        const productsFiltered = productsFilteredByCategory.filter(
            product => product.title.toLowerCase().includes(search.toLowerCase()))
        setProductsByCategory(productsFiltered)
        setIsSearching(false)
    }, [productsFilteredByCategory, search])

    const onSearch = (search) => {
        setSearch(search)
    }

    return (
        <>
            <Search onSearchHandlerEvent={onSearch} />
            {
                isSearching ?
                    <ActivityIndicator animating={true} color={colors.gray} />
                    :
                    <FlatList
                        data={productsByCategory}
                        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={
                            <View>
                                <Text>No hay resultados</Text>
                            </View>
                        }
                    />
            }
        </>
    )
}

export default ProductsByCategory


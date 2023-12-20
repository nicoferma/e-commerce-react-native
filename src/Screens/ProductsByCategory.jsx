import ProductItem from '../Components/ProductItem'
import products from '../data/products_data.json'
import { useEffect, useState } from 'react'
import Search from '../Components/Search'
import { FlatList } from 'react-native'

const ProductsByCategory = ({ navigation, route }) => {
    const [productsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')

    const { category } = route.params

    useEffect(() => {
        const productsFilteredByCategory = products.filter(product => product.category === category)
        const productsFiltered = productsFilteredByCategory.filter(
            product => product.title.toLowerCase().includes(search.toLowerCase()))
        setProductsByCategory(productsFiltered)
    }, [category, search])

    const onSearch = (search) => {
        setSearch(search)
    }


    return (
        <>
            <Search onSearchHandlerEvent={onSearch} />
            <FlatList
                data={productsByCategory}
                renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
                keyExtractor={item => item.id}
            />
        </>
    )
}

export default ProductsByCategory


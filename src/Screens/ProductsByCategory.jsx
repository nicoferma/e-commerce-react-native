import Header from '../Components/Header'
import ProductItem from '../Components/ProductItem'
import products from '../data/products_data.json'
import { useEffect, useState } from 'react'
import Search from '../Components/Search'
import { FlatList, StyleSheet } from 'react-native'

const ProductsByCategory = ({ category, productPressHandler, goBack }) => {
    const [productsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')

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
            <Header title="Productos" goBack={goBack} />
            <Search onSearchHandlerEvent={onSearch} />
            <FlatList
                data={productsByCategory}
                renderItem={({ item }) => <ProductItem product={item} productPressHandler={productPressHandler} />}
                keyExtractor={item => item.id}
            />
        </>
    )
}

export default ProductsByCategory


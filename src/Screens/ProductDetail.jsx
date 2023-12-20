import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import products from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'

const ProductDetail = ({ route }) => {
    const [productSelected, setProductSelected] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isPortrait, setIsPortrait] = useState(true)

    const { product } = route.params

    const { height, width } = useWindowDimensions()

    useEffect(() => {
        height < width ? setIsPortrait(false) : setIsPortrait(true)
    }, [height])

    useEffect(() => {
        const productFinded = products.find(p => p.id === product.id)
        setProductSelected(productFinded)
        setIsLoading(false)
    }, [product])

    return (
        <>
            {
                isLoading
                    ?
                    <ActivityIndicator />
                    :
                    <>
                        <ScrollView >
                            <Image
                                source={{ uri: productSelected?.images[0] }}
                                resizeMode='cover'
                                style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
                            />
                            <View style={styles.detailContainer}>
                                <Text style={styles.title}>{productSelected?.title}</Text>
                                <Text style={styles.description}>{productSelected?.description}</Text>
                                <Text style={styles.price}>$ {productSelected?.price}</Text>
                                <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={() => null}>
                                    <Text style={styles.buyText}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </>
            }

        </>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    imageProduct: {
        minWidth: 300,
        width: '100%',
        height: 400,

    },
    imageProductLandscape: {
        width: 200,
        height: 200,
    },
    detailContainer: {
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
    },
    description: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
    },
    price: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.secondary
    },
    buyButton: {
        marginTop: 10,
        width: 200,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.green,
        borderRadius: 10,
    },
    buyText: {
        color: colors.white
    },
    buyAlt: {
        marginTop: 10,
        width: 200,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 10,
    }
})
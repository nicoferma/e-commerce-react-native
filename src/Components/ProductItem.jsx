import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../features/shopSlice'

const ProductItem = ({ product, navigation }) => {

    const dispatch = useDispatch()

    const onProductItemPressHandler = () => {
        dispatch(setProductIdSelected(product.id))
        navigation.navigate("detail")
    }

    return (
        <TouchableOpacity onPress={onProductItemPressHandler} style={styles.containerProductItem} >
            <Image
                style={styles.productImage}
                resizeMode='cover'
                source={{ uri: product.thumbnail }}
            />
            <Text style={styles.productTitle}>{product.title}</Text>
        </TouchableOpacity >

    )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        margin: 10,
    },
    productTitle: {
        fontFamily: 'Montserrat-Regular',
        alignSelf: 'center',

    },
    productImage: {
        marginRight: 20,
        width: 60,
        height: 60,
        borderRadius: 90,
    }
})
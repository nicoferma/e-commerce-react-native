import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const ProductItem = ({ product, productPressHandler }) => {
    return (
        <TouchableOpacity onPress={() => productPressHandler(product)} style={styles.containerProductItem} >
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
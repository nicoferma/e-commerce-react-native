import { View, Text, StyleSheet, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.headerContainer}>
            {
                navigation.canGoBack()
                    ?
                    <>
                        <Pressable onPress={navigation.goBack}>
                            <AntDesign name="caretleft" size={20} color="white" />
                        </Pressable>
                        <Text style={styles.headerTitle}>{title}</Text>
                        <Pressable onPress={navigation.popToTop}>
                            <AntDesign name="home" size={24} color="white" />
                        </Pressable>
                    </>
                    :
                    <>

                        <Text style={styles.headerTitle}>{title}</Text>
    
                    </>

            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: '#fff',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    }
})



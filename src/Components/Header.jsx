import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const Header = ({ title, isBack = true, goBack }) => {
    return (
        <View style={styles.headerContainer}>
            {
                isBack &&
                <TouchableOpacity onPress={goBack}>
                    <AntDesign name="caretleft" size={24} color="white" />
                </TouchableOpacity>
            }

            <Text style={styles.headerTitle}>{title}</Text>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: colors.white,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    }
})
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.text1}>Votre Localisation</Text>
            <View style={styles.nav}>
                <View style={styles.location}>
                    <Text style={styles.text2}>3892 Olen Thomas Drive, NY</Text>
                    <Icon name="chevron-down" color='grey' size={20} />
                </View>
                <View style={styles.profile}>
                    <Image source={require('./../../ressources/profile.jpg')} style={styles.profileImage} />
                </View>
            </View>
            <View style={styles.search}>
                <View style={styles.inputGroup}>
                    <Icon name="search" size={20} />
                    <TextInput placeholder="Rechercher des aliments, des produits d'épicerie" style={styles.input} />
                    <Icon name="microphone" size={20} />
                </View>
                <View style={styles.btn}>
                    <Icon name="bars" color='#fff' size={20} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 15
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 5
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        borderRadius: 20,
        justifyContent: 'space-between',
        flex: 1,
        marginRight: 10
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    btn: {
        width: 50,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ae69'
    },
    text1: {
        fontSize: 17,
        color: 'grey'
    },
    text2: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Header;

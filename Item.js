import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Item = () => {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Articles populaires</Text>
                <Text style={styles.seeAllText}>Voir tout</Text>
            </View>
            <ScrollView style={styles.itemList} horizontal>
                <View style={styles.itemCard}>
                    <View style={styles.itemImage}>
                        <Image source={require('./../../ressources/betarave.png')} style={styles.image} />
                        <Icon name='heart' color='red' size={25} style={styles.likeIcon} />
                    </View>
                    <View style={styles.itemDetails}>
                        <Text style={styles.itemName}>Betterave</Text>
                        <Text style={styles.itemPrice}>$1.25</Text>
                    </View>
                    <View style={styles.buyButton}>
                        <Icon name="shopping-bag" size={20} color='#fff' />
                    </View>
                </View>
                {/* Ajouter d'autres cartes ici */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        overflow: 'hidden'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    seeAllText: {
        fontSize: 18,
        color: 'rgb(0, 174, 105)'
    },
    itemList: {
        width: '100%'
    },
    itemCard: {
        backgroundColor: '#fff',
        height: 200,
        width: 160,
        borderRadius: 20,
        padding: 10,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#000'
    },
    itemImage: {
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    buyButton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#00ac67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10
    },
    itemDetails: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    likeIcon: {
        position: 'absolute',
        top: 5,
        right: 5
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemPrice: {
        fontSize: 16
    }
});

export default Item;

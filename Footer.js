import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Footer = () => {
  return (
    <View style={styles.piedPage}>
      <Icon name="home" size={30} color='#333' />
      <Icon name="heart" size={30} color='#333' />
      <View style={styles.bouton}>
        <Icon name="shopping-cart" size={30} color='#fff' />
      </View>
      <Icon name="list" size={30} color='#333' />
      <Icon name="bell" size={30} color='#333' />
    </View>
  );
}

const styles = StyleSheet.create({
  piedPage: {
    width: '100%',
    height: '10%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bouton: {
    width: '15%',
    aspectRatio: 1,
    borderRadius: '50%',
    backgroundColor: '#01aa67',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Footer;

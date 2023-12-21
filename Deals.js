import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Deals = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titre}>
        <Text style={styles.texteTitre}>Offres</Text>
        <Text style={styles.voirTout}>Voir tout</Text>
      </View>
      <ScrollView style={styles.carte} horizontal>
        <View style={styles.contenuCarte}>
          <Text style={styles.titreCarte}>50% DE RÉDUCTION</Text>
          <Text style={styles.sousTitreCarte}>Sur les packs combo d'épicerie</Text>
          <View style={styles.bouton}>
            <Text style={styles.texteBouton}>Acheter maintenant</Text>
          </View>
        </View>
        <Image style={styles.imageCarte} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  titre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  voirTout: {
    fontSize: 18,
    color: 'rgb(0, 174, 105)',
  },
  carte: {
    width: '100%',
    backgroundColor: '#def3ea',
    padding: '10%',
    borderRadius: '5%',
  },
  contenuCarte: {
    marginRight: '8%',
  },
  titreCarte: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  sousTitreCarte: {
    fontSize: 18,
  },
  bouton: {
    backgroundColor: '#fff',
    width: '30%',
    padding: '3%',
    borderRadius: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texteTitre: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  texteBouton: {
    color: '#1ca56f',
    fontWeight: 'bold',
  },
  imageCarte: {
    
  },
});

export default Deals;

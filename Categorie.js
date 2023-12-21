import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Categorie = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titre}>
        <Text style={styles.texteTitre}>Catégories</Text>
        <Text style={styles.voirTout}>Voir tout</Text>
      </View>
      <ScrollView style={styles.listeProduits} horizontal>
        <View style={styles.produit}>
          <View style={styles.carteProduit}>
            <Image source={require('./../../ressources/legume.png')} style={styles.imageProduit} />
          </View>
          <Text style={styles.texteProduit}>Légumes</Text>
        </View>
        {/* ... Autres éléments similaires */}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  voirTout: {
    fontSize: 18,
    color: 'rgb(0, 174, 105)',
  },
  listeProduits: {
    // Styles pour la liste de produits
  },
  produit: {
    alignItems: 'center',
    marginRight: '8%',
  },
  carteProduit: {
    width: '20%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '2%',
  },
  texteTitre: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  texteProduit: {
    fontSize: 16,
  },
  imageProduit: {
    flex: 1,
    borderRadius: '50%',
  },
});

export default Categorie;

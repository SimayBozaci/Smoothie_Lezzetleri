import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsPage = ({ route }) => {
  const { name, price, image,description} = route.params; 

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
});

export default DetailsPage;

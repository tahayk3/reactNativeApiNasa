import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {PostImage} from '../../types';

const TodaysImage = (todaysImage: PostImage) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: todaysImage.url}} style={styles.image}></Image>
      </View>
      <Text style={styles.title}>{todaysImage.title}</Text>
      <Text style={styles.date}>{todaysImage.date}</Text>
      <View style={styles.containerButton}>
        <Button title="Ver" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(25, 25, 112)',
    marginVertical: 16,
    marginHorizontal: 1,
    borderRadius: 15,
    padding: 16,
  },
  imageContainer: {
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderWidth: 2,
    borderBlockColor: '#fff',
    borderRadius: 32,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
  containerButton: {
    alignItems: 'flex-end',
  },
});

export default TodaysImage;

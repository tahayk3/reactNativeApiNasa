import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
//hook de react-navigation para capturar parametros
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../types';
import Header from '../../components/Header';
import StarryBackground from '../../components/StarryBackground';
const Detail = () => {
  const {
    params: {title, url, explanation, date},
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Detalle'>['route']>();
  return (
    <View style={styles.container}>
      <StarryBackground />
      <Header />
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.image}></Image>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#000',
    position: 'relative',
  },
  content: {
    backgroundColor: '#003D6D',
    borderRadius: 15,
    padding: 5,
    marginBottom: 150,
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: '50%',
    borderColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  date: {
    color: 'white',
    fontWeight: 'bold',
  },
  explanationContainer: {
    marginVertical: 16,
    marginBottom: 15,
  },
  explanation: {
    color: 'white',
    fontSize: 16,
    textAlign: 'justify',
    padding: 15,
  },
});

export default Detail;

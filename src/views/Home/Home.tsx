import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Home;

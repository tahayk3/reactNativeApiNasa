import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>
          Información extraída de la api de la NASA: imagen del día
        </Text>
      </View>
      <View style={styles.rightCotainer}>
        <Image
          source={require('../../assets/nasa-logo.jpg')}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightCotainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default Header;

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Home from './src/views/Home';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* Agregando el componente home que a su vez llama a header */}
      <Home></Home>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0)',
  },
});

export default App;

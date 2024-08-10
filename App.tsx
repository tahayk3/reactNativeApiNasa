import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Routes from './src/routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* Agregando el componente home que a su vez llama a header */}
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

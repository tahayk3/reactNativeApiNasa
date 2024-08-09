import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//types para rutas
import {RootStackParams} from '../types';

import Home from '../views/Home';
import Detail from '../views/Detail';

//stack con las rutas
const Stack = createNativeStackNavigator<RootStackParams>();

//Cada ruta/pantall se puede estilizar para modificar su apariencia por defecto
const routeScreenDefaultOption = {
  headerStyle: {
    backgroundColor: 'rgba(7,26,93,255)',
  },
  headerTitleStyle: {
    color: '#fff',
  },
};

const Routes = () => (
  <NavigationContainer>
    {/*/ Con initialRouteName, indicamos la ruta/pantalla de inicio */}
    <Stack.Navigator initialRouteName="Home">
      {/*/ <Stack.Screen> es un componente que es una ruta */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={routeScreenDefaultOption}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={routeScreenDefaultOption}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;

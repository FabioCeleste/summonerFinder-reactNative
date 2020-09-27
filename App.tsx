import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import Summoner from './src/screens/Summoner';
import Match from './src/screens/Match';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Summoner" component={Summoner} />
        <Stack.Screen name="Match" component={Match} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/login';
import Home from './src/screens/home';
import {useSelector} from 'react-redux';

const App: () => Node = () => {
  const token = useSelector(state => (state.user ? state.user.token : ''));

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {token ? <Home /> : <Login />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;

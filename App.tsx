import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigation from './src/Routs/AppNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};
const styles = StyleSheet.create({});
export default App;

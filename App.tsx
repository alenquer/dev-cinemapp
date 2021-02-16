/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import Routes from './src/routes';
import database from './src/database';
import Colors from './src/constants/colors';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={Colors.header}
        barStyle="light-content"
      />
      <DatabaseProvider database={database}>
        <Routes />
      </DatabaseProvider>
    </>
  );
};

export default App;

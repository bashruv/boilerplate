import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => (
  <SafeAreaView>
    <View style={styles.sectionContainer}>
      <Text>HELLO, React-Native!</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
});

export default App;

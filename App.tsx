import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import useCalculator from './src/useCalculator';

const App = function () {
  const {
    numberFieldValue,
    clear,
    addToNumberField,
    changeOperator,
    calculate,
  } = useCalculator();

  return (
    <View>
      <StatusBar style='auto' />
      <SafeAreaView>
        <TextInput style={styles.numberField} value={numberFieldValue} />
        <View style={styles.numberPadRow}>
          <Button
            title='7'
            onPress={() => {
              addToNumberField(7);
            }}
          />
          <Button
            title='8'
            onPress={() => {
              addToNumberField(8);
            }}
          />
          <Button
            title='9'
            onPress={() => {
              addToNumberField(9);
            }}
          />
          <Button
            title='÷'
            onPress={() => {
              changeOperator('Divide');
            }}
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='4'
            onPress={() => {
              addToNumberField(4);
            }}
          />
          <Button
            title='5'
            onPress={() => {
              addToNumberField(5);
            }}
          />
          <Button
            title='6'
            onPress={() => {
              addToNumberField(6);
            }}
          />
          <Button
            title='✕'
            onPress={() => {
              changeOperator('Times');
            }}
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='1'
            onPress={() => {
              addToNumberField(1);
            }}
          />
          <Button
            title='2'
            onPress={() => {
              addToNumberField(2);
            }}
          />
          <Button
            title='3'
            onPress={() => {
              addToNumberField(3);
            }}
          />
          <Button
            title='-'
            onPress={() => {
              changeOperator('Subtract');
            }}
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='0'
            onPress={() => {
              addToNumberField(0);
            }}
          />
          <Button title=',' disabled={true} onPress={() => {}} />
          <Button
            title='='
            onPress={() => {
              calculate();
            }}
          />
          <Button
            title='+'
            onPress={() => {
              changeOperator('Add');
            }}
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='Clear'
            onPress={() => {
              clear();
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  numberField: {
    textAlign: 'right',
  },
  numberPadRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;

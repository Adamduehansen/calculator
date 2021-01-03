import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet } from 'react-native';
import Button from './src/components/Button';
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
            type='Number'
          />
          <Button
            title='8'
            onPress={() => {
              addToNumberField(8);
            }}
            type='Number'
          />
          <Button
            title='9'
            onPress={() => {
              addToNumberField(9);
            }}
            type='Number'
          />
          <Button
            title='÷'
            onPress={() => {
              changeOperator('Divide');
            }}
            type='Operator'
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='4'
            onPress={() => {
              addToNumberField(4);
            }}
            type='Number'
          />
          <Button
            title='5'
            onPress={() => {
              addToNumberField(5);
            }}
            type='Number'
          />
          <Button
            title='6'
            onPress={() => {
              addToNumberField(6);
            }}
            type='Number'
          />
          <Button
            title='✕'
            onPress={() => {
              changeOperator('Times');
            }}
            type='Operator'
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='1'
            onPress={() => {
              addToNumberField(1);
            }}
            type='Number'
          />
          <Button
            title='2'
            onPress={() => {
              addToNumberField(2);
            }}
            type='Number'
          />
          <Button
            title='3'
            onPress={() => {
              addToNumberField(3);
            }}
            type='Number'
          />
          <Button
            title='-'
            onPress={() => {
              changeOperator('Subtract');
            }}
            type='Operator'
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='0'
            onPress={() => {
              addToNumberField(0);
            }}
            type='Number'
          />
          <Button title=',' onPress={() => {}} type='Operator' />
          <Button
            title='='
            onPress={() => {
              calculate();
            }}
            type='Operator'
          />
          <Button
            title='+'
            onPress={() => {
              changeOperator('Add');
            }}
            type='Operator'
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='Clear'
            onPress={() => {
              clear();
            }}
            type='Operator'
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

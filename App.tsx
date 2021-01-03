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
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.numberField} value={numberFieldValue} />
        <View style={styles.numberPadRow}>
          <Button
            title='7'
            onPress={() => {
              addToNumberField(7);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title='8'
            onPress={() => {
              addToNumberField(8);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title='9'
            onPress={() => {
              addToNumberField(9);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title='÷'
            onPress={() => {
              changeOperator('Divide');
            }}
            type='Operator'
            style={styles.numberPadButton}
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='4'
            onPress={() => {
              addToNumberField(4);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title='5'
            onPress={() => {
              addToNumberField(5);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title='6'
            onPress={() => {
              addToNumberField(6);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title='✕'
            onPress={() => {
              changeOperator('Times');
            }}
            type='Operator'
            style={styles.numberPadButton}
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='1'
            onPress={() => {
              addToNumberField(1);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title='2'
            onPress={() => {
              addToNumberField(2);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title='3'
            onPress={() => {
              addToNumberField(3);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title='-'
            onPress={() => {
              changeOperator('Subtract');
            }}
            type='Operator'
            style={styles.numberPadButton}
          />
        </View>
        <View style={styles.numberPadRow}>
          <Button
            title='0'
            onPress={() => {
              addToNumberField(0);
            }}
            type='Number'
            style={styles.numberPadButton}
          />
          <Button
            title=','
            onPress={() => {}}
            type='Operator'
            style={styles.numberPadButton}
          />
          <Button
            title='='
            onPress={() => {
              calculate();
            }}
            type='Operator'
            style={styles.numberPadButton}
          />
          <Button
            title='+'
            onPress={() => {
              changeOperator('Add');
            }}
            type='Operator'
            style={styles.numberPadButton}
          />
        </View>
        <View
          style={{
            height: '10%',
            width: '100%',
          }}
        >
          <Button
            title='Clear'
            onPress={() => {
              clear();
            }}
            type='Operator'
            style={{ ...styles.numberPadButton, width: '100%', height: '100%' }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
  },
  numberField: {
    textAlign: 'right',
    height: '10%',
  },
  numberPadRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '20%',
  },
  numberPadButton: {
    width: '25%',
    borderRadius: 10,
  },
});

export default App;

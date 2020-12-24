import { useCallback, useState } from 'react';

export type Operator = 'Add' | 'Subtract' | 'Times' | 'Divide';

const useCalculator = function () {
  const [numberFieldValue, setNumberFieldValue] = useState<string>('0');
  const [startNewNumber, setStartNewNumber] = useState<boolean>(false);
  const [valueA, setValueA] = useState(0);

  const addToNumberField = useCallback(
    (number: number) => {
      setNumberFieldValue((currentValue) => {
        return currentValue === '0' || startNewNumber
          ? number.toString()
          : currentValue + number;
      });
      setStartNewNumber(false);
    },
    [startNewNumber]
  );

  const changeOperator = useCallback(
    (operator: Operator) => {
      setStartNewNumber(true);
      const enteredValue = parseInt(numberFieldValue);
      const result = getResult(operator, valueA, enteredValue);
      setValueA(result);
      setNumberFieldValue(result.toString());
    },
    [numberFieldValue, valueA]
  );

  const getResult = function (
    operator: Operator,
    valueA: number,
    valueB: number
  ) {
    switch (operator) {
      case 'Add':
        return valueA + valueB;
      case 'Subtract':
        return valueA - valueB;
      case 'Times':
        return (valueA === 0 ? 1 : valueA) * valueB;
      case 'Divide':
        return valueA === 0 ? valueB / 1 : valueA / valueB;
      default:
        throw Error('Operator not implemented.');
    }
  };

  return {
    numberFieldValue,
    addToNumberField,
    changeOperator,
  };
};

export default useCalculator;

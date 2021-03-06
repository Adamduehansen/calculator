import { useCallback, useState } from 'react';

export type Operator = 'Add' | 'Subtract' | 'Times' | 'Divide';

const getResult = function (
  operator: Operator,
  valueA: number,
  valueB: number
) {
  switch (operator) {
    case 'Add':
      return valueA + valueB;
    case 'Subtract':
      return valueA === 0 ? valueB : valueA - valueB;
    case 'Times':
      return (valueA === 0 ? 1 : valueA) * valueB;
    case 'Divide':
      return valueA === 0 ? valueB / 1 : valueA / valueB;
    default:
      throw Error('Operator not implemented.');
  }
};

const useCalculator = function () {
  const [numberFieldValue, setNumberFieldValue] = useState<string>('0');
  const [startNewNumber, setStartNewNumber] = useState<boolean>(false);
  const [valueA, setValueA] = useState(0);
  const [operator, setOperator] = useState<Operator>();

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
    (newOperator: Operator) => {
      const enteredValue = parseInt(numberFieldValue);
      if (operator) {
        const result = getResult(operator, valueA, enteredValue);
        setValueA(result);
        setNumberFieldValue(result.toString());
      } else {
        const result = getResult(newOperator, valueA, enteredValue);
        setValueA(result);
      }
      setStartNewNumber(true);
      setOperator(newOperator);
    },
    [numberFieldValue, valueA, operator]
  );

  const calculate = useCallback(() => {
    if (!operator) {
      return;
    }
    setStartNewNumber(true);
    const enteredValue = parseInt(numberFieldValue);
    const result = getResult(operator!, valueA, enteredValue);
    setValueA(0);
    setNumberFieldValue(result.toString());
    setOperator(undefined);
  }, [operator, numberFieldValue, valueA]);

  const clear = useCallback(() => {
    setNumberFieldValue('0');
  }, []);

  return {
    numberFieldValue,
    addToNumberField,
    calculate,
    changeOperator,
    clear,
  };
};

export default useCalculator;

import { useCallback, useEffect, useState } from 'react';

export type Operator = 'Add';

const useCalculator = function () {
  const [numberFieldValue, setNumberFieldValue] = useState<string>('0');
  const [operator, setOperator] = useState<Operator>();
  const [startNewNumber, setStartNewNumber] = useState<boolean>(false);
  const [valueA, setValueA] = useState<number>(0);

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

  const changeOperator = useCallback((operator: Operator) => {
    setStartNewNumber(true);
  }, []);

  return {
    numberFieldValue,
    addToNumberField,
    changeOperator,
  };
};

export default useCalculator;

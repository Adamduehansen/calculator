import { useCallback, useState } from 'react';

const useCalculator = function () {
  const [numberFieldValue, setNumberFieldValue] = useState<string>('0');

  const addToNumberField = useCallback((number: number) => {
    setNumberFieldValue((previousValue) => {
      return previousValue === '0' ? number.toString() : previousValue + number;
    });
  }, []);

  const clear = useCallback(() => {
    setNumberFieldValue('0');
  }, []);

  return {
    numberFieldValue,
    addToNumberField,
    clear,
  };
};

export default useCalculator;

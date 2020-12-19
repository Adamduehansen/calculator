import { act, renderHook } from '@testing-library/react-hooks';
import useCalculator from './useCalculator';

describe('useCalculator', () => {
  test('should set 0 as default number value', () => {
    // Arrange
    const { result } = renderHook(() => useCalculator());

    // Act
    const numberFieldValue = result.current.numberFieldValue;

    // Assert
    expect(numberFieldValue).toEqual('0');
  });

  describe('addToNumberField', () => {
    test('should should add number to the numberFieldValue', () => {
      // Arrange
      const { result } = renderHook(() => useCalculator());

      // Act
      act(() => {
        result.current.addToNumberField(1);
      });

      // Assert
      expect(result.current.numberFieldValue).toEqual('1');
    });

    test('should should add multiple numbers to the numberFieldValue', () => {
      // Arrange
      const { result } = renderHook(() => useCalculator());

      // Act
      act(() => {
        result.current.addToNumberField(1);
        result.current.addToNumberField(2);
      });

      // Assert
      expect(result.current.numberFieldValue).toEqual('12');
    });
  });

  describe('clear', () => {
    test('should reset the numberFieldValue to 0', () => {
      // Arrange
      const { result } = renderHook(() => useCalculator());

      // Act
      act(() => {
        result.current.clear();
      });

      // Assert
      expect(result.current.numberFieldValue).toEqual('0');
    });
  });
});

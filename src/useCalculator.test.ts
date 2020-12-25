import { act, renderHook } from '@testing-library/react-hooks';
import useCalculator, { Operator } from './useCalculator';

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
    test('should not write 0 to nmberField when it is only 0', () => {
      // Arrange
      const { result } = renderHook(() => useCalculator());

      // Act
      act(() => {
        result.current.addToNumberField(0);
      });
      act(() => {
        result.current.addToNumberField(0);
      });

      // Assert
      expect(result.current.numberFieldValue).toEqual('0');
    });

    test('should add number to the numberFieldValue', () => {
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

    test('should start new number when operator is set', () => {
      // Arrange
      const { result } = renderHook(() => useCalculator());

      // Act
      act(() => {
        result.current.addToNumberField(1);
      });
      act(() => {
        result.current.changeOperator('Add');
      });
      act(() => {
        result.current.addToNumberField(3);
      });
      act(() => {
        result.current.changeOperator('Add');
      });
      act(() => {
        result.current.addToNumberField(2);
      });

      // Assert
      expect(result.current.numberFieldValue).toEqual('2');
    });

    test.each([
      ['Add' as Operator, 2, 3, 2, '7'],
      ['Subtract' as Operator, 2, 3, 2, '-3'],
      ['Times' as Operator, 2, 3, 2, '12'],
      ['Divide' as Operator, 8, 2, 4, '1'],
    ])(
      'should calculate result with operators: %o',
      (operator, valueA, valueB, valueC, expectedNumberFieldValue) => {
        // Arrange
        const { result } = renderHook(() => useCalculator());

        // Act
        act(() => {
          result.current.addToNumberField(valueA);
        });
        act(() => {
          result.current.changeOperator(operator);
        });
        act(() => {
          result.current.addToNumberField(valueB);
        });
        act(() => {
          result.current.changeOperator(operator);
        });
        act(() => {
          result.current.addToNumberField(valueC);
        });
        act(() => {
          result.current.changeOperator(operator);
        });

        // Assert
        expect(result.current.numberFieldValue).toEqual(
          expectedNumberFieldValue
        );
      }
    );
  });

  describe('changeOperator', () => {
    test('should leave numberFieldValue as it is', () => {
      // Arrange
      const { result } = renderHook(() => useCalculator());

      // Act
      act(() => {
        result.current.addToNumberField(1);
      });

      act(() => {
        result.current.addToNumberField(2);
      });

      act(() => {
        result.current.changeOperator('Add');
      });

      // Assert
      expect(result.current.numberFieldValue).toEqual('12');
    });
  });

  describe('calculate', () => {
    test('should do nothing if calculated with no previous value', () => {
      // Arrange
      const { result } = renderHook(() => useCalculator());

      // Act
      act(() => {
        result.current.addToNumberField(2);
      });

      act(() => {
        result.current.calculate();
      });

      // Assert
      expect(result.current.numberFieldValue).toEqual('2');
    });

    test.each([
      ['Add' as Operator, 2, 2, '4'],
      ['Subtract' as Operator, 4, 2, '2'],
      ['Times' as Operator, 4, 2, '8'],
      ['Divide' as Operator, 8, 2, '4'],
    ])(
      'should calculate with operator: %o',
      (operator: Operator, valueA, valueB, expected) => {
        // Arrange
        const { result } = renderHook(() => useCalculator());

        // Act
        act(() => {
          result.current.addToNumberField(valueA);
        });

        act(() => {
          result.current.changeOperator(operator);
        });

        act(() => {
          result.current.addToNumberField(valueB);
        });

        act(() => {
          result.current.calculate();
        });

        // Assert
        expect(result.current.numberFieldValue).toEqual(expected);
      }
    );
  });

  // describe('clear', () => {
  //   test('should reset the numberFieldValue to 0', () => {
  //     // Arrange
  //     const { result } = renderHook(() => useCalculator());

  //     // Act
  //     act(() => {
  //       result.current.clear();
  //     });

  //     // Assert
  //     expect(result.current.numberFieldValue).toEqual('0');
  //   });
  // });
});

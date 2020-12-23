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

    // test('should calculate result with multiple operators', () => {
    //   // Arrange
    //   const { result } = renderHook(() => useCalculator());

    //   // Act
    //   act(() => {
    //     result.current.addToNumberField(2);
    //   });
    //   act(() => {
    //     result.current.changeOperator('Add');
    //   });
    //   act(() => {
    //     result.current.addToNumberField(2);
    //   });
    //   act(() => {
    //     result.current.changeOperator('Add');
    //   });
    //   act(() => {
    //     result.current.addToNumberField(2);
    //   });
    //   act(() => {
    //     result.current.changeOperator('Add');
    //   });

    //   // Assert
    //   expect(result.current.numberFieldValue).toEqual('6');
    // });
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

  // describe.skip('calculate', () => {
  //   test('should calculate on add operator', () => {
  //     // Arrange
  //     const { result } = renderHook(() => useCalculator());

  //     // Act
  //     act(() => {
  //       result.current.addToNumberField(2);
  //     });

  //     act(() => {
  //       result.current.changeOperator('Add');
  //     });

  //     act(() => {
  //       result.current.addToNumberField(2);
  //     });

  //     act(() => {
  //       result.current.calculate();
  //     });

  //     // Assert
  //     expect(result.current.numberFieldValue).toEqual('4');
  //   });
  // });

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

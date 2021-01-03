import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Button, { ButtonType } from './Button';

describe('Button', () => {
  test('should render component', () => {
    // Arrange
    const { getByLabelText } = render(
      <Button title='any-title' onPress={() => {}} type='Number' />
    );

    // Act
    const button = getByLabelText('button');

    // Assert
    expect(button).toBeDefined();
  });

  test('should have title set with props.title', () => {
    // Arrange
    const { getByText } = render(
      <Button title='any-title' onPress={() => {}} type='Number' />
    );

    // Act
    const buttonText = getByText('any-title');

    // Assert
    expect(buttonText).toBeDefined();
  });

  test('should trigger props.onPress when pressed', () => {
    // Arrange
    const mockOnPress = jest.fn();
    const { getByLabelText } = render(
      <Button title='any-title' onPress={mockOnPress} type='Number' />
    );

    // Act
    fireEvent.press(getByLabelText('button'));

    // Assert
    expect(mockOnPress).toBeCalled();
  });

  test.each([
    ['Number' as ButtonType, 'grey'],
    ['Operator' as ButtonType, 'orange'],
  ])(
    'should set correct color for button type',
    (buttonType: ButtonType, expectedColor: string) => {
      // Arrange
      const { getByLabelText } = render(
        <Button title='any-title' onPress={() => {}} type={buttonType} />
      );

      // Act
      const button = getByLabelText('button');

      // Assert
      expect(button.props.style.backgroundColor).toEqual(expectedColor);
    }
  );
});

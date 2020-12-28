import React from 'react';
import { render } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  test('should render component', () => {
    // Arrange
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button title='any-title' onPress={mockOnPress} />
    );

    // Act
    const text = getByText('any-title');

    // Assert
    expect(text).toBeDefined();
  });
});

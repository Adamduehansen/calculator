import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type ButtonType = 'Number' | 'Operator';

interface Props {
  title: string;
  onPress: () => void;
  type: ButtonType;
}

const Button = function ({ title, type, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: type === 'Number' ? 'grey' : 'orange',
        },
      ]}
      accessibilityLabel='button'
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
  },
});

export default Button;

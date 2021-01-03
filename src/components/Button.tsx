import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type ButtonType = 'Number' | 'Operator';

interface Props {
  title: string;
  onPress: () => void;
  type: ButtonType;
  style?: StyleProp<ViewStyle>;
}

const Button = function ({ title, type, onPress, style }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
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
    justifyContent: 'center',
  },
});

export default Button;

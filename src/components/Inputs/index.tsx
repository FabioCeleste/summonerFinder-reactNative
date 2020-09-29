import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
  password?: boolean;
}

const Inputs: React.FC<Props> = (props) => {
  return (
    <TextInput
      style={styles.input}
      secureTextEntry={props.password}
      placeholder={props.value}
      onChangeText={(text) => props.onChange(text)}
    />
  );
};

export default Inputs;

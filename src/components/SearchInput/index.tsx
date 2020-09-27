import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

interface Props {
  onChangeInput: (name: string) => void;
  onChangeRegion: (name: string) => void;
}

const SearchInput: React.FC<Props> = (props) => {
  const [region, setRegion] = useState('BR1');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Procurar Invocador"
        style={styles.inputName}
        onChangeText={(e) => {
          props.onChangeInput(e, region);
        }}
      />
      <TextInput
        value={region}
        style={styles.inputServer}
        onChangeText={(e) => {
          setRegion(e);
          props.onChangeInput(region);
        }}
      />
    </View>
  );
};

export default SearchInput;

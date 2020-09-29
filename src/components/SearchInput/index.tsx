import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

interface Props {
  onChangeInput: (name: string) => void;
  onChangeRegion: (label: string) => void;
}

const SearchInput: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Procurar Invocador"
        style={styles.inputName}
        onChangeText={(e) => {
          props.onChangeInput(e);
        }}
      />
      <DropDownPicker
        items={[
          {label: 'BR1', value: 'BR1'},
          {label: 'EUN1', value: 'EUN1'},
          {label: 'EUW1', value: 'EUW1'},
          {label: 'JP1', value: 'JP1'},
          {label: 'KR', value: 'KR'},
          {label: 'LA1', value: 'BR1'},
          {label: 'LA2', value: 'LA2'},
          {label: 'NA1', value: 'BR1'},
          {label: 'OC1', value: 'OC1'},
          {label: 'RU', value: 'RU'},
          {label: 'TR', value: 'TR'},
        ]}
        style={styles.inputServer}
        defaultValue="BR1"
        onChangeItem={(item) => {
          props.onChangeRegion(item.label);
        }}
      />
      {/* <TextInput
        value={region}
        style={styles.inputServer}
        onChangeText={(e) => {
          setRegion(e);
          props.onChangeInput(region);
        }}
      /> */}
    </View>
  );
};

export default SearchInput;

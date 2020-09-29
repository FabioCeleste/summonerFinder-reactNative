import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface Props {
  navigation: () => void;
  navigationLog: () => void;
}

const NotLogged: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Para adcionar invocadores nos favoritos crie uma conta ou entre na sua:
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={props.navigationLog}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={props.navigation}>
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotLogged;

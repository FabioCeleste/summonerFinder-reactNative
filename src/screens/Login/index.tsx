import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import validator from 'validator';
import toast from 'react-native-tiny-toast';
import AsyncStorage from '@react-native-community/async-storage';

import StatusBar from '../../components/Status';
import Input from '../../components/Inputs';

import styles from './styles';
import axios from '../../services/axios';

interface Props {
  navigation: {
    push: (to: string) => void;
  };
}

const Login: React.FC<Props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onChangeEmail(value: string) {
    setEmail(value);
  }
  function onChangePassword(value: string) {
    setPassword(value);
  }

  async function onLogin() {
    let errors = false;
    let texterrors = 'Campos invalidos: ';
    if (!validator.isEmail(email)) {
      texterrors += ' Email';
      errors = true;
    }

    if (password.length < 5) {
      texterrors += ' Senha';
      errors = true;
    }
    if (errors) {
      toast.show(texterrors);
      return;
    }

    const created = await axios.post('/token', {
      email,
      password,
    });

    if (created.data.errors) {
      return toast.show('Email ou senha invalida');
    }
    await AsyncStorage.setItem('token', created.data.token);
    props.navigation.push('Home');
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.inputs}>
          <Input value="E-mail" onChange={onChangeEmail} />

          <Input value="Password" password={true} onChange={onChangePassword} />
        </View>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;

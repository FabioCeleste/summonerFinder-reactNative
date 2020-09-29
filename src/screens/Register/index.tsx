import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import validator from 'validator';
import toast from 'react-native-tiny-toast';

import StatusBar from '../../components/Status';
import Input from '../../components/Inputs';

import styles from './styles';
import axios from '../../services/axios';

interface Props {
  navigation: {
    push: (to: string) => void;
  };
}

const Register: React.FC<Props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  function onChangeEmail(value: string) {
    setEmail(value);
  }
  function onChangePassword(value: string) {
    setPassword(value);
  }
  function onChangeUser(value: string) {
    setUser(value);
  }

  async function onRegister() {
    let errors = false;
    let texterrors = 'Campos invalidos: ';
    if (!validator.isEmail(email)) {
      texterrors += ' Email';
      errors = true;
    }
    if (!user) {
      texterrors += ' Usuario';
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

    const created = await axios.post('/users', {
      email,
      password,
      username: user,
    });

    if (created.data.errors) {
      return toast.show('Email já cadastrado');
    }
    props.navigation.push('Home');
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.inputs}>
          <Input value="E-mail" onChange={onChangeEmail} />
          <Input value="User" onChange={onChangeUser} />
          <Input value="Password" password={true} onChange={onChangePassword} />
        </View>
        <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Register;

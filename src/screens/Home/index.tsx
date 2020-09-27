import React, {useState} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';

import SearchInput from '../../components/SearchInput';

import styles from './styles';
import logoImage from '../../../assets/imgs/logo.png';

interface Props {
  navigation: {
    push: (to: string, {}) => void;
  };
}

const Home: React.FC<Props> = (props) => {
  const [summoner, setSummoner] = useState('');
  const [region, setRegion] = useState('BR1');

  function onChangeInput(summonerInput: string) {
    setSummoner(summonerInput);
  }
  function onChangeRegion(regionInput: string) {
    setRegion(regionInput);
  }
  console.log(summoner, region);
  return (
    <View style={styles.container}>
      <SearchInput
        onChangeInput={onChangeInput}
        onChangeRegion={onChangeRegion}
      />
      <TouchableOpacity style={styles.search}>
        <Text
          style={styles.searchText}
          onPress={() => {
            props.navigation.push('Summoner', {summoner, region});
          }}>
          Procurar
        </Text>
      </TouchableOpacity>

      <ImageBackground source={logoImage} style={styles.image} />
    </View>
  );
};

export default Home;

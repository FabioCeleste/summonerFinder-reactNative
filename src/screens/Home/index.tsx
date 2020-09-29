import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import SearchInput from '../../components/SearchInput';
import NotLogged from '../../components/NotLogged';
import Status from '../../components/Status';
import FavSummoner from '../../components/FavSummoners';

import styles from './styles';
import logoImage from '../../../assets/imgs/logo.png';
import axios from '../../services/axios';

interface Props {
  navigation: {
    push: (to: string, {}) => void;
  };
}

const Home: React.FC<Props> = (props) => {
  const [summoner, setSummoner] = useState('');
  const [region, setRegion] = useState('BR1');
  const [logged, setloggend] = useState(false);
  const [favs, setFavs] = useState([]);

  function onChangeInput(summonerInput: string) {
    setSummoner(summonerInput);
  }
  function onChangeRegion(regionInput: string) {
    setRegion(regionInput);
  }

  async function getLogged() {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setloggend(true);
        const summonsReq = await axios.post('/summoner/favs', {token: value});
        setFavs(summonsReq.data.summoners);
        console.log(favs);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getLogged();
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#111'}}>
      <View style={styles.container}>
        <Status />
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

        <Text style={styles.favs}>Favoritos</Text>

        {!logged && (
          <NotLogged
            navigation={() => props.navigation.push('Register', {})}
            navigationLog={() => props.navigation.push('Login', {})}
          />
        )}

        {logged && (
          <View style={styles.favssummons}>
            {favs.map((fav) => {
              return (
                <TouchableOpacity
                  key={fav.summoner}
                  onPress={() => {
                    props.navigation.push('Summoner', {
                      summoner: fav.summoner,
                      region: fav.region,
                    });
                  }}>
                  <FavSummoner
                    image={fav.profileicon}
                    summoner={fav.summoner}
                    key={fav.summoner}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;

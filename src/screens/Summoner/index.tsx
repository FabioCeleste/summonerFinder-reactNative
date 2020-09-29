import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import axios from '../../services/axios';
import {SummonerFind} from '../../types/matchSummoner';
import Status from '../../components/Status';

import styles from './styles';

interface Props {
  route: {
    params: {
      summoner: string;
      region: string;
    };
  };
  navigation: {
    push: (to: string, {}) => void;
  };
}

const Summoner: React.FC<Props> = (props) => {
  const [summoner, setSummoner] = useState({});
  const [logged, setloggend] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [token, setToken] = useState('');

  async function getLogged() {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setloggend(true);
        setToken(value);
        const favoriteReq = await axios.post('/summoner/favs', {token: value});
        const favoriteData = favoriteReq.data;
        favoriteData.summoners.map((fav) => {
          if (
            fav.summoner.toLowerCase() ===
            props.route.params.summoner.toLowerCase()
          ) {
            setIsFav(true);
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function getData() {
      const summonerAxios = await axios.post('/find', {
        summoner: props.route.params.summoner,
        region: props.route.params.region,
      });
      const data = summonerAxios.data;
      setSummoner(data);
      getLogged();
      console.log(token);
    }
    getData();
  }, []);

  function getQueueType(queue: string) {
    if (queue === 'RANKED_FLEX_SR') {
      return 'Flex';
    } else {
      return 'Solo';
    }
  }

  async function removeFav() {
    await axios.post('/summoner/delete', {
      token: token,
      summoner: summoner.summoner.name,
    });
    setIsFav(false);
  }
  async function addFav() {
    await axios.post('/summoner', {
      token: token,
      summoner: summoner.summoner.name,
      profileicon: summoner.summoner.profileIcon,
      region: props.route.params.region,
    });
    setIsFav(true);
  }

  return (
    <>
      <Status />
      {!summoner.summoner && !summoner.errors && (
        <View style={styles.container} />
      )}

      {summoner.errors && (
        <View style={styles.containerNotFound}>
          <Text style={styles.notFound}>Invocador não encontrado</Text>
        </View>
      )}

      {summoner.summoner && (
        <View style={styles.container}>
          <Image
            style={styles.profImage}
            source={{uri: summoner.summoner.profileIcon}}
          />

          <View style={styles.nameAndStar}>
            <Text style={styles.summonerName}>{summoner.summoner.name}</Text>
            {logged && (
              <TouchableOpacity onPress={isFav ? removeFav : addFav}>
                {isFav && <Icon name="star" color="#f4d35e" size={40} />}
                {!isFav && <Icon name="star" color="#444" size={40} />}
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={styles.partidaButton}
            onPress={() => {
              props.navigation.push('Match', {
                summoner: summoner.summoner.name,
                region: props.route.params.region,
              });
            }}>
            <Text style={styles.partidaText}>Partida</Text>
          </TouchableOpacity>
          <View style={styles.infos}>
            {summoner.ranked.map((queue) => {
              return (
                <View key={queue.queueType}>
                  <Text style={styles.textQueue}>
                    {getQueueType(queue.queueType)}
                  </Text>
                  <Image source={{uri: queue.image}} style={styles.rankImage} />
                  <Text style={styles.textRank}>
                    {queue.tier} {queue.rank}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </>
  );
};

export default Summoner;

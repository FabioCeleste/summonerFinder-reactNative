import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import axios from '../../services/axios';
import {SummonerFind} from '../../types/matchSummoner';

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

  useEffect(() => {
    async function getData() {
      const summonerAxios = await axios.post('/find', {
        summoner: props.route.params.summoner,
        region: props.route.params.region,
      });
      const data = summonerAxios.data;
      setSummoner(data);
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

  return (
    <>
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
          <Text style={styles.summonerName}>{summoner.summoner.name}</Text>
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

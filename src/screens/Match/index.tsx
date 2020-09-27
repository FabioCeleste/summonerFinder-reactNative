import React, {useState, useEffect} from 'react';
import {View, FlatList, ScrollView, Text} from 'react-native';
import {MatchResult, MatchSummoner} from '../../types/matchSummoner';

import PlayerMatch from '../../components/PlayerMatch';

import axios from '../../services/axios';

import styles from './styles';
import Summoner from '../Summoner';

interface Props {
  route: {
    params: {
      summoner: string;
      region: string;
    };
  };
}

const Match: React.FC<Props> = (props) => {
  const [match, setMatch] = useState({});
  const [load, setLoad] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getData() {
      const matchAxios = await axios.post('/find/match', {
        summoner: props.route.params.summoner,
        region: props.route.params.region,
      });

      const matchData = matchAxios.data;

      setMatch(matchData);
      if (!matchData.results) {
        setNotFound(true);
      }
      setLoad(true);
    }
    getData();
  }, []);

  return (
    <>
      {!load && (
        <View style={styles.containerNotFound}>
          <Text style={styles.notFound}>Carregando...</Text>
        </View>
      )}
      {notFound && (
        <View style={styles.containerNotFound}>
          <Text style={styles.notFound}>Jogador não</Text>
          <Text style={styles.notFound}>esta em partida</Text>
        </View>
      )}
      {load && !notFound && (
        <View style={styles.container}>
          <ScrollView>
            <PlayerMatch match={match} />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Match;

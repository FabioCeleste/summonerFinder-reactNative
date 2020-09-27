import React from 'react';
import {View, Text, Image} from 'react-native';
import Match from '../../screens/Match';

import {MatchRanked, MatchSummoner} from '../../types/matchSummoner';

import styles from './styles';

interface Props {
  match: {results: MatchSummoner[]};
}

const PlayerMatch: React.FC<Props> = ({match}) => {
  const blue: MatchSummoner[] = [];
  const red: MatchSummoner[] = [];

  match.results.map((member) => {
    if (member.team === 100) {
      blue.push(member);
    } else {
      red.push(member);
    }
  });
  return (
    <View style={styles.maincontainer}>
      <View>
        {blue.map((player, i) => {
          return (
            <View style={styles.bluecontainer} key={player.summonerName}>
              <Text style={styles.summonerName}>{player.summonerName}</Text>
              <View style={styles.mainImages}>
                <Image
                  style={styles.summonerImage}
                  source={{uri: player.profileIconId}}
                />
                <View>
                  <Image
                    style={[styles.summonerSpell, {marginBottom: 4}]}
                    source={{uri: player.spell1}}
                  />
                  <Image
                    style={styles.summonerSpell}
                    source={{uri: player.spell2}}
                  />
                </View>
                <Image
                  style={styles.summonerImage}
                  source={{uri: player.champion}}
                />
              </View>
              <View style={styles.eloImages}>
                {player.ranked.map((elo) => {
                  return (
                    <View>
                      <Text style={styles.eloText}>
                        {elo.queueType === 'RANKED_FLEX_SR' ? 'Flex' : 'Solo'}
                      </Text>
                      <Image
                        source={{uri: elo.image}}
                        style={styles.eloImage}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>

      <View>
        {red.map((player, i) => {
          return (
            <View style={styles.redcontainer} key={player.summonerName}>
              <Text style={styles.summonerName}>{player.summonerName}</Text>
              <View style={styles.mainImages}>
                <Image
                  style={styles.summonerImage}
                  source={{uri: player.profileIconId}}
                />
                <View>
                  <Image
                    style={[styles.summonerSpell, {marginBottom: 4}]}
                    source={{uri: player.spell1}}
                  />
                  <Image
                    style={styles.summonerSpell}
                    source={{uri: player.spell2}}
                  />
                </View>
                <Image
                  style={styles.summonerImage}
                  source={{uri: player.champion}}
                />
              </View>
              <View style={styles.eloImages}>
                {player.ranked.map((elo) => {
                  return (
                    <View>
                      <Text style={styles.eloText}>
                        {elo.queueType === 'RANKED_FLEX_SR' ? 'Flex' : 'Solo'}
                      </Text>
                      <Image
                        source={{uri: elo.image}}
                        style={styles.eloImage}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PlayerMatch;

import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

interface Props {
  summoner: string;
  image: string;
}

const FavSummoners: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.image}} style={styles.image} />
      <Text style={styles.text}>{props.summoner}</Text>
    </View>
  );
};

export default FavSummoners;

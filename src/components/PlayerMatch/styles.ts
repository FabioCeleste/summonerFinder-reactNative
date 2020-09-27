import {StyleSheet} from 'react-native';

import commonStyles from '../../commonStyles';

export default StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },

  redcontainer: {
    width: 180,
    height: 250,
    backgroundColor: commonStyles.colors.redColor,

    marginTop: 16,
  },

  bluecontainer: {
    width: 180,
    height: 250,
    backgroundColor: commonStyles.colors.blueColor,

    marginTop: 16,
  },
  summonerName: {
    color: 'white',
    fontSize: 20,
    marginTop: 8,
    alignSelf: 'center',
  },

  mainImages: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },

  summonerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  summonerSpell: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  eloImages: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-around',
  },

  eloText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },

  eloImage: {
    marginTop: 8,
    height: 70,
    width: 70,
  },
});

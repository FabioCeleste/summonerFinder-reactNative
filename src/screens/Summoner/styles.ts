import {StyleSheet} from 'react-native';

import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles.colors.bgColor,
    color: 'white',
  },

  profImage: {
    height: 170,
    width: 170,
    borderRadius: 85,
    marginTop: 53,
    alignSelf: 'center',
  },

  summonerName: {
    color: 'white',
    marginRight: 16,
    fontSize: 32,
  },

  partidaButton: {
    backgroundColor: commonStyles.colors.redColor,
    height: 40,
    width: 138,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },

  partidaText: {
    fontSize: 24,
    color: 'white',
  },

  infos: {
    marginTop: 32,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  rankImage: {
    width: 130,
    height: 130,
  },

  textQueue: {
    color: 'white',
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 16,
  },
  textRank: {
    color: 'white',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 16,
  },

  notFound: {
    color: 'white',
    fontSize: 32,
  },
  containerNotFound: {
    flex: 1,
    backgroundColor: commonStyles.colors.bgColor,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  nameAndStar: {
    flexDirection: 'row',
    marginTop: 32,
    alignSelf: 'center',
  },
});

export default styles;

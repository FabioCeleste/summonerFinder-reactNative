import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles.colors.bgColor,
    flexDirection: 'row',
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
});

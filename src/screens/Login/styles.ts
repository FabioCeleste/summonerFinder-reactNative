import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  inputs: {
    marginHorizontal: 16,
  },
  button: {
    height: 49,
    backgroundColor: commonStyles.colors.redColor,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 16,
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

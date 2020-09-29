import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 343,
    backgroundColor: '#333',
    marginTop: 16,
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },

  button: {
    width: 131,
    height: 38,
    backgroundColor: commonStyles.colors.redColor,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default styles;

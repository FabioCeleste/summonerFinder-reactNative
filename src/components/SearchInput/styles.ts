import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 32,
  },
  inputName: {
    backgroundColor: commonStyles.colors.input,
    marginLeft: 16,
    height: 35,
    flex: 3,
    marginRight: 8,
    borderRadius: 12,
  },
  inputServer: {
    flex: 1,
    marginRight: 16,
    height: 35,
    backgroundColor: commonStyles.colors.input,
    borderRadius: 12,
    textAlign: 'center',
  },
  searchIcon: {
    padding: 10,
    flex: 0,
  },
});

export default styles;

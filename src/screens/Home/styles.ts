import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles.colors.bgColor,
    alignItems: 'center',
  },
  image: {
    width: 244,
    height: 214,
    marginTop: 32,
  },
  favs: {
    color: 'white',
    fontSize: 24,
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginTop: 32,
  },
  search: {
    marginTop: 16,
    backgroundColor: commonStyles.colors.redColor,
    width: 170,
    height: 50,
    borderRadius: 12,
  },

  searchText: {
    color: 'white',
    fontSize: 32,
    alignSelf: 'center',
  },
});

export default styles;

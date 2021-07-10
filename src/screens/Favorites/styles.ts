import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070B24',
    padding: 20,
  },
  header: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#daa520',
    marginTop: getStatusBarHeight() + 10
  },
  text: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.highlight,
  }
});
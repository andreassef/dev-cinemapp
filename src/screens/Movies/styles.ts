import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#070B24',
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    height: 45,
    borderWidth:1,
    borderColor: '#daa520',
    paddingRight: 5,
    marginBottom: 10
  },
  inputText: {
    width: '70%',
    borderRadius: 8,
    height: 65,
    borderColor: theme.colors.heading,
    paddingLeft: 20,
    color: '#daa520',
    fontSize: 13,
    fontFamily: theme.fonts.text500
  },
  button: {
    width: '30%',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#daa520',
    padding: 5
    
  },
  buttonTitle: {
    fontFamily: theme.fonts.title700,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 12
  },
  header: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 80,
    marginTop: getStatusBarHeight(),
    marginBottom: 10,
  },
  text: {
    fontFamily: theme.fonts.title700,
    fontSize: 23,
    color: '#daa520',
  }
});
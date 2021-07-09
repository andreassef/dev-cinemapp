import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#070B24',
    marginTop: 40
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    height: 65,
    borderWidth:1,
    borderColor: theme.colors.heading,
    paddingRight: 5
  },
  inputText: {
    width: '70%',
    borderRadius: 8,
    height: 65,
    borderColor: theme.colors.heading,
    paddingLeft: 20,
    color: '#daa520',
    fontSize: 16,
    fontFamily: theme.fonts.text500
  },
  button: {
    width: '30%',
    alignItems: 'center',
    height: "80%",
    backgroundColor: '#daa520',
    borderRadius: 8,
    borderWidth: 1,
    
  },
  buttonTitle: {
    fontFamily: theme.fonts.title700,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 12
  }
});
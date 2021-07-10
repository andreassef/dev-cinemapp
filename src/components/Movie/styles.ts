import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
    borderRadius: 8,
    height: 70,
    borderWidth:1,
    borderColor: theme.colors.heading,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  year: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15,
    lineHeight: 21
  }
});
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Movies } from '../screens/Movies';
import { Favorites } from '../screens/Favorites';
import { theme } from '../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const AppTab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: '#daa520',
                inactiveTintColor: theme.colors.heading,
                inactiveBackgroundColor: '#070B24',
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: 1,
                    marginBottom: getBottomSpace(),
                    height: 60,
                    paddingTop: 5,
                    backgroundColor: '#070B24',
                }
            }}
        >
            <AppTab.Screen 
                name="Buscar"
                component={Movies}
            />

            <AppTab.Screen
                name="Favoritos"
                component={Favorites}
            />

        </AppTab.Navigator>
    );
}

export default TabRoutes;
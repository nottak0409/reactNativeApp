import React from 'react'
import {
  NavigationContainer,
  useNavigation,
  DrawerActions
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function Main() {
  const { dispatch } = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <TouchableOpacity onPress={(() => dispatch(DrawerActions.openDrawer()))}>
        <Text>open drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

function Sub() {
  const { dispatch } = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
      <TouchableOpacity onPress={(() => dispatch(DrawerActions.openDrawer()))}>
        <Text>open drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} options={{ title: 'Main' }}/>
      <Drawer.Screen name="Sub" component={Sub} options={{ title: 'Sub' }}/>
    </Drawer.Navigator>
  )
}

export default function() {
  return (
    <NavigationContainer onStateChange={( newState ) => console.log(newState)}>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

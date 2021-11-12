import React from 'react'
import { CommonActions } from '@react-navigation/routers'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function Main() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(() => navigate('Sub', { title: `${Date.now()}`}))}>
        <Text>Go to sub</Text>
      </TouchableOpacity>
    </View>
  )
}

function Sub() {
  return (
    <View style={styles.container}>
      <Text>Sign up or login</Text>
    </View>
  )
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen
        name="Sub"
        component={Sub}
      />
    </Stack.Navigator>
  )
}
export default function() {
  return (
    <NavigationContainer onStateChange={( newState ) => console.log(newState)}>
      <StackNavigator />
    </NavigationContainer>
  )
}

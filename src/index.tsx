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
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(() => navigate('Main', { title: `${Date.now()}`}))}>
        <Text>Go to Main</Text>
      </TouchableOpacity>
    </View>
  )
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen
        name="Sub"
        component={Sub}
        options={( option ) => {
          const route: any = option.route
          const navigation = option.navigation
          const title = route.params && route.params.title ? route.params.title : '0';
          const seed = parseInt(title, 10) % 3;
          switch (seed) {
            case 0:
              console.log("go back")
              navigation.goBack()
              break;
            case 1:
              console.log("replace")
              navigation.replace("Main")
              break;
            default:
              console.log("reset")
              const action = CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: 'Main'
                  }
                ]
              });
              navigation.dispatch(action)
              break;
            }
            return {title}
          }
        }
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

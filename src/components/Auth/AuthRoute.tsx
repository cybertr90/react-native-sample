import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext, IAuth } from '../../contexts/authContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../../screens/LoginPage'
import HomePage from '../../screens/HomePage'

const AuthRoute = () => {
  const Stack = createNativeStackNavigator();
  let isAuthenticated = false;
  const {user}: IAuth = useContext(AuthContext);
  
  if(user.username && user.password) isAuthenticated = true;
  
  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Group>
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Group>
      ) : (
        <Stack.Screen name="Login" component={LoginPage} />
      )}
    </Stack.Navigator>
  );
  
}

export default AuthRoute


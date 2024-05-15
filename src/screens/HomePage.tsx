import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import { AuthContext, IAuth } from '../contexts/authContext'
import AsyncStorage from '@react-native-community/async-storage'

const HomePage = () => {
  const {user,setUser} : IAuth = useContext(AuthContext);
  
  const logout = () => {
    AsyncStorage.removeItem("session");
    setUser({username: "", password: ""});

  }
  return (
    <Layout>
      <Text style={styles.userText}>Current User: {user?.username}</Text>
        <Pressable style={styles.pressable} onPress={logout}>
          <Text style={{fontSize: 20}}>
            Logout
          </Text>
        </Pressable>
      
    </Layout>
  )
}

const styles = StyleSheet.create({
  pressable: {
    height: 40,
    width: 350,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2e8dd3",
  },
  userText: {
    position: "absolute",
    top: 20,
    start: 10,
    fontSize: 30,
  },
});

export default HomePage;

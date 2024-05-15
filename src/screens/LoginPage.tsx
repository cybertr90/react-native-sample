import { Pressable, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import Layout from '../layout/Layout';
import { AuthContext, IAuth, User } from '../contexts/authContext';
import userDataFromJson from "../user.json";
import versionDataFromJson from "../version.json";
import AsyncStorage from '@react-native-community/async-storage';

const LoginPage = ({navigation}: any) => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {setUser}: IAuth = useContext(AuthContext);

  const user: User = {username, password};

  const login = (user: User) => {
  if(user.username === userDataFromJson.username && user.password === userDataFromJson.password)
    {
      setUser(user);
      AsyncStorage.setItem("session", JSON.stringify(user));
    }
  else
    return Alert.alert("Invalid Credentials", "Wrong username or password");
  
}

  
  return (
    <Layout>
      <View style={{ gap: 8 }}>
        <Image source={require("../../assets/user.png")} style={styles.image} />
        <Text>Username</Text>
        <TextInput style={styles.inputStyle} onChangeText={setUsername} />
        <Text>Password</Text>
        <TextInput style={styles.inputStyle} onChangeText={setPassword} />

        <Pressable style={styles.submitPressable} onPress={() => login(user)}>
          <Text style={{ fontSize: 18 }}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.registerPressable}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontSize: 15 }}>Sign Up</Text>
        </Pressable>
      </View>
    </Layout>
  );
}

export default LoginPage

const styles = StyleSheet.create({
  inputStyle: {
    width: 350,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  submitPressable: {
    width: 350,
    height: 40,
    backgroundColor: "lightblue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  registerPressable: {
    width: 150,
    height: 40,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginTop: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",

  },

  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
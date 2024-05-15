import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Layout = (props: any) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})



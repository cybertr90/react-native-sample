import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = (props: any) => {
  return (
    <View style={styles.container}>
			<Pressable style={styles.closePressable} onPress={() => props.changeIsLoading()}>
				<Text style={{fontSize: 25, color: "white"}}>X</Text>
			</Pressable>
			<ActivityIndicator size={'large'} color={'blue'} />
      <Text style={styles.textStyle}>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		backgroundColor: "red",
		width: "100%",
		height: "100%"
		
	},
	textStyle: {
		fontSize: 20,
		fontFamily: "sans-serif",
		
	},
	closePressable: {
		backgroundColor: "black",
		position: "absolute",
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		top: 40,
		right: 25,
		borderRadius: 30
	}
})
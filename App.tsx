import { BackHandler, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import userDataFromJson from "./src/user.json";
import versionDataFromJson from "./src/version.json";
import { AuthProvider } from "./src/contexts/authContext";
import AuthRoute from "./src/components/Auth/AuthRoute";

console.log("User Data: ", userDataFromJson);
console.log("Version Data: ", versionDataFromJson);


export default function App() {

  const version = parseFloat(versionDataFromJson.version);
  const currentVersion = 1;
  if(currentVersion != version){
    Alert.alert("Version Update", "Version is outdated. Will you update it ?",
      [
        {text: "OK",onPress : () => null},
        {text: "Cancel", onPress: () => BackHandler.exitApp()}
      ]
    )
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthRoute />
      </NavigationContainer>
    </AuthProvider>
  );
}

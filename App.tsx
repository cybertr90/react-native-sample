import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import userDataFromJson from "./src/user.json";
import versionDataFromJson from "./src/version.json";
import { AuthProvider } from "./src/contexts/authContext";
import AuthRoute from "./src/components/Auth/AuthRoute";
console.log("User Data: ", userDataFromJson);
console.log("Version Data: ", versionDataFromJson);
export default function App() {
  let isVersionValid = false;
  const version = versionDataFromJson.version;
  
  if(version === "1.0.0") isVersionValid = true;
  
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthRoute />
      </NavigationContainer>
    </AuthProvider>
  );
}

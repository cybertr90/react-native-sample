import { Dispatch, SetStateAction, useContext } from "react";
import { AuthContext, IAuth, User } from "../contexts/authContext";
import AsyncStorage from "@react-native-community/async-storage";


export const setSession = (dispatch: Dispatch<SetStateAction<User>>) => {

    AsyncStorage.getItem("session", (err,res) => {
        if(err) throw err;
        
        if(res){

            const userData: User = JSON.parse(res as string);   
            dispatch(userData);
            
        }
    })
    

} 
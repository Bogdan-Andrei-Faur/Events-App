import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";

const Main = () => {
    return (
        <View>
            <AppBar/>
            <RepositoryList/>
        </View>
    )
}

export default Main;
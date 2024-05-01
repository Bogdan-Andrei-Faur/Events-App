import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback, Platform } from "react-native";
import StyledText from "./StyledText.jsx";
import Constants from "expo-constants";
import theme from "../theme.js"
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: "row",
        paddingBottom: 10,
        paddingHorizontal:10
    },
    scroll: {
        padding: 7
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.textPrimary
    },
    platform: {
        padding: 7,
        borderRadius: 4,
        overflow: "hidden",
        backgroundColor: Platform.select ({
            android: "green",
            ios: "grey",
            default: "#006992"
        })
    }
})

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight="bold" style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={ styles.scroll}>
                <AppBarTab to="/">Repositories</AppBarTab>
                <AppBarTab to="/signin">Sign In</AppBarTab>
            </ScrollView>
            <Text style={styles.platform}>{Platform.select ({android: "Android", ios: "IOS", default: "Web"})}</Text>
        </View>
    )
}

export default AppBar;
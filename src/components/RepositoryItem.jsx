import React from "react";
import { View, StyleSheet, Image, Platform} from "react-native";
import StyledText from "./StyledText.jsx";
import RepositoryStats from "./RepositoryStats.jsx";
import theme from "../theme.js";

const RepositoryItemHeader = ({ ownerAvatarUrl, name, description, language}) => (
    <View style={{ flexDirection: "row", paddingBottom: 2}}>
        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{uri: ownerAvatarUrl}}/>
        </View>
        
        <View style={{ flex: 1, justifyContent: "center" }}>
            <StyledText fontSize="subheading" fontWeight="bold">{name}</StyledText>
            <StyledText color="secondary">{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
)

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props}/>
        <RepositoryStats {...props}/>
    </View>

)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5,
        margin: 15,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: "#8d99ae",
        backgroundColor: "#edf2f4"
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: "orange",
            default: "purple"
        }),
        alignSelf: "flex-start",
        marginVertical: 4,
        borderRadius: 4,
        overflow: "hidden"
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem
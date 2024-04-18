import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText.jsx";

const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}k`
        : String(value)
}

const RepositoryStats = ({ forksCount, stargazersCount, ratingAverage, reviewCount}) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around"}}>
            <View>
                <StyledText align="center" fontWeight="bold">{parseThousands(forksCount)}</StyledText>
                <StyledText align="center">Forks</StyledText>
            </View>

            <View>
                <StyledText align="center" fontWeight="bold">{parseThousands(stargazersCount)}</StyledText>
                <StyledText align="center">Stars</StyledText>
            </View>

            <View>
                <StyledText align="center" fontWeight="bold">{parseThousands(ratingAverage)}</StyledText>
                <StyledText align="center">Rating</StyledText>
            </View>

            <View>
                <StyledText align="center" fontWeight="bold">{parseThousands(reviewCount)}</StyledText>
                <StyledText align="center">Review</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats;
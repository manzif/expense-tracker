import React from 'react';
import { View,StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from '../Components/Text';

function Card({ title, subTitle, date }) {
    return (
        <View style={styles.card}>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.date}>{date}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer:{
        padding: 20,

    },
    image: {
        width: "100%",
        height:200,
    },
    subTitle:{
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    }
})

export default Card;
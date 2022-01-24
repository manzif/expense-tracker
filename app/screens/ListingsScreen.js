import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ActivityIndicator from "../Components/ActivityIndicator";

import Screen from '../Components/Screen';
import Card from '../Components/Card';
import colors from '../config/colors';
import { useSelector } from "react-redux";
import storage from '../auth/storage';

function ListingsScreen (props) {

    const [values, seTValues] = useState({})
    const { fetchExpense, expenseSaved } = useSelector((state) => state.expenses);

    // console.log("\n\n", expenseSaved)

    const getAllExpenses = async () => {
        const result = await storage.getExpenses()
        seTValues(result)
    }

    useEffect(() => {
        getAllExpenses();
    }, []);
    return (
        <>
            <ActivityIndicator visible={fetchExpense} />
            <Screen style={styles.screen}>
                <FlatList 
                    data={values}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                    <Card 
                        title={item.title}
                        date={item.date}
                        subTitle={"Price: " + item.price}
                        image={item.image} />
                }       
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})
export default ListingsScreen;

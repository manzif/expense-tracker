import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Button } from '../Components/Button';
import ActivityIndicator from "../Components/ActivityIndicator";
import expensesApi from '../api/expensesApi';

import Screen from '../Components/Screen';
import Card from '../Components/Card';
import colors from '../config/colors';
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";

function ListingsScreen(props) {

    const getExpensesApi = useApi(expensesApi.getExpenses);
    const { user } = useAuth();
    useEffect(() => {
        const id = user.id
        getExpensesApi.request(id);
    }, []);

    return (
        <>
            <ActivityIndicator visible={getExpensesApi.loading} />
            <Screen style={styles.screen}>
                {getExpensesApi.error && (
                    <>
                    <AppText>Couldn't retrieve the expenses.</AppText>
                    <Button title="Retry" onPress={getExpensesApi.request} />
                    </>
                )}
                <FlatList 
                    data={getExpensesApi.data.expenses}
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

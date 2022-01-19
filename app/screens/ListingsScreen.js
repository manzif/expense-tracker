import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ActivityIndicator from "../Components/ActivityIndicator";

import Screen from '../Components/Screen';
import Card from '../Components/Card';
import colors from '../config/colors';
import { bindActionCreators } from "redux";
import { fetchExpenses } from "../redux/actions/expensesActions";
import { useDispatch, useSelector } from "react-redux";

function ListingsScreen(props) {

    const { user } = useSelector((state) => state.login);
    const { fetchExpense, expenses } = useSelector((state) => state.expenses);
    const dispatch = useDispatch();
    const fetchExpenseAction = bindActionCreators(fetchExpenses, dispatch)
    useEffect(() => {
        fetchExpenseAction(user.id);
    }, []);

    return (
        <>
            <ActivityIndicator visible={fetchExpense} />
            <Screen style={styles.screen}>
                <FlatList 
                    data={expenses}
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

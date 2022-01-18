import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Screen from '../Components/Screen';
import ListItem from '../Components/lists/ListItem';
import colors from '../config/colors';
import Icon from '../Components/Icon';
import useAuth from "../auth/useAuth";

function AccountScreen() {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title={user.name}
                    subTitle={user.email}
                    image={require("../assets/default.jpg")}
                />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor= "#ffe66d"/>
                }
                onPress={() => logOut()}
            />
                
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
})
export default AccountScreen;

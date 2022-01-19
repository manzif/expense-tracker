import React from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from '../Components/Screen';
import ListItem from '../Components/lists/ListItem';
import colors from '../config/colors';
import Icon from '../Components/Icon';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions";
import { bindActionCreators } from "redux";

function AccountScreen() {
    const dispatch = useDispatch();
    const logoutAction = bindActionCreators(logout, dispatch)
    const { user } = useSelector((state) => state.login);

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
                onPress={() => logoutAction()}
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

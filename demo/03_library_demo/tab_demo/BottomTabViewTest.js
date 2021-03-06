/*
created by lfc 
time 2018-06-20
desc:底部的选项卡
https://github.com/react-native-community/react-native-tab-view/blob/master/example/src/BottomBarIconTextExample.js
*/
import * as React from "react";
import { Animated, View, Text, StyleSheet } from "react-native";
//import { Ionicons } from '@expo/vector-icons';//

import {
    TabView
    , TabBar
    , SceneMap
    , type Route
    ,type NavigationState
}
    from "react-native-tab-view";
//
import FlexDiceTest from "../../01_flex_demo/FlexDiceTest";
import FlexTest from "../../01_flex_demo/FlexTest";
import FetchNetData from "../../02_Fetch_demo/FetchNetData";


type State = NavigationState<
    Route<{
        key: string,
        icon: string,
        color: string
    }>
    >;
//
export default class BottomTabViewTest extends React.Component<*, State>{
    static title = 'Custom indicator';
    static backgroundColor = "#263238";
    static appbarElevation = 4;
    //
    state = {
        index: 0,
        routes: [
            {
                key: "article",
                icon: "ios-paper",
                color: "#F44336"
            },
            {
                key: "contacts",
                icon: "ios-people",
                color: "#3F51B5"
            },
            {
                key: "albums",
                icon: "ios-albums",
                color: "#3F51B5"
            },
        ]
    };
    //
    _renderScene = SceneMap({
        article: FlexDiceTest,
        contacts: FlexTest,
        albums: FetchNetData
    });
    //
    //
    _renderTabBar = props => (
        <TabBar
            {...props}
            renderIcon={this._renderIcon}
            renderBadge={this._renderBadge}
            renderIndicator={this._renderIndicator}
            style={styles.tabbar}
        ></TabBar>
    );
    _renderIcon = ({ route }) => (
        <Text style={styles.icon}>icon</Text>
        // <Ionicons name={route.icon} size={24} style={styles.icon}>
        // </Ionicons >
    );
    _renderBadge = ({ route }) => {
        if (route.key === "2") {
            return (
                <View style={styles.badge}>
                    <Text style={styles.count}>42</Text>
                </View>
            );
        }
    }
    _renderIndicator = props => {
        const { width, position } = props;
        const inputRange = [
            0,
            0.48,
            0.49,
            0.51,
            0.52,
            1,
            1.48,
            1.49,
            1.51,
            1.52,
            2,
        ];

        const scale = position.interpolate({
            inputRange,
            outputRange: inputRange.map(x => (Math.trunc(x) === x ? 2 : 0.1)),
        });
        const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(x => {
                const d = x - Math.trunc(x);
                return d === 0.49 || d === 0.51 ? 0 : 1;
            }),
        });
        const translateX = position.interpolate({
            inputRange: inputRange,
            outputRange: inputRange.map(x => Math.round(x) * width),
        });
        const backgroundColor = position.interpolate({
            inputRange,
            outputRange: inputRange.map(
                x => props.navigationState.routes[Math.round(x)].color
            ),
        });

        return (
            <Animated.View
                style={[styles.container, { width, transform: [{ translateX }] }]}
            >
                <Animated.View
                    style={[
                        styles.indicator,
                        { backgroundColor, opacity, transform: [{ scale }] },
                    ]}
                />
            </Animated.View>
        );
    };
    //
    _handleIndexChange = index =>
        this.setState({
            index,
        });
    //

    render() {
        return (
            <TabView
                style={this.props.style}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                tabBarPosition="bottom"
                onIndexChange={this._handleIndexChange }
            >

            </TabView>
        )
    }
};

//
const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: '#263238',
        overflow: 'hidden',
    },
    icon: {
        backgroundColor: 'transparent',
        color: 'white',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
    },
    indicator: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#0084ff',
        margin: 6,
    },
    badge: {
        marginTop: 4,
        marginRight: 32,
        backgroundColor: '#f44336',
        height: 24,
        width: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    count: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: -2,
    },
});
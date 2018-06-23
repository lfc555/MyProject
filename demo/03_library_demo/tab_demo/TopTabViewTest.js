import * as React from 'react';

import { View, StyleSheet, Dimensions } from "react-native";
//
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
//
import FlexDiceTest from "../../01_flex_demo/FlexDiceTest";
import FlexTest from "../../01_flex_demo/FlexTest";
import FetchNetData from "../../02_Fetch_demo/FetchNetData";
import HelloWorld from "../../00_helloworld_demo/HelloWorld";

/**
 * created by lfc 
 * time 2018.06.12
 * desc: react-native-tab-view 选项卡
 * github:https://github.com/lfc555/react-native-tab-view
 */



export default class TopTabViewTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: "1", title: "新闻" },
                { key: "2", title: "体育" },
                { key: "3", title: "政治" },
                { key: "4", title: "时事" }
            ]
        };
    }

    _handleIndexChange = index => {
        this.setState({ index })
        console.log("Index:" + index);
    };
    _renderTabBar = props => <TabBar {...props} />;

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return <FlexDiceTest />;
            case '2':
                return <FlexTest />;
            case '3':
                return <FetchNetData />;
            case '4':
                return <HelloWorld />;
            default:
                return null;
        }
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        paddingTop: 10,
    },
});
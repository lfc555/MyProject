import React,{Component} from "react";
import { Navigator } from 'react-native-deprecated-custom-components';

/*
https://www.jianshu.com/p/722c64adc367
*/


import FirstPageComponent from './FirstPageComponent';
export default class OldNavigationTest extends React.Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    //这个语法是把 routes.params 里的每个key作为props的一个属性，在下个页面即可用this. props.id调用
                    //navigator对象在导航容器跳转时一直存在
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        );
    }
}

 
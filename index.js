/*
* created by lfc 2018.5.20
* desc APP 统一入口
* 参考地址：
给所有开发者的React Native详细入门指南
https://www.jianshu.com/p/fa0874be0827
*/
import React,{Component} from "react";
import { AppRegistry } from 'react-native';

 //import App from './App';
//import HelloWorld from "./demo/00_helloworld_demo/HelloWorld";
//import FlexTest from "./demo/01_flex_demo/FlexTest";
// import FlexDiceTest from "./demo/01_flex_demo/FlexDiceTest";
//import FetchNetData from "./demo/02_Fetch_demo/FetchNetData";
//import BannerTest from "./demo/03_library_demo/BannerTest";
//import TopTabViewTest from "./demo/03_library_demo/tab_demo/TopTabViewTest";
//import BottomTabViewTest from "./demo/03_library_demo/tab_demo/BottomTabViewTest";
//import ScrollViewTest from "./demo/05_scroll_demo/ScrollViewTest";
//import ListViewTest from "./demo/05_scroll_demo/ListViewTest";
//import TextInputTest from "./demo/06_input_demo/TextInputTest";
//import StartUp from "./demo/eyepetizer_demo/StartUp";
import OldNavigationTest from "./demo/07_navigation_demo/OldNavigationTest";


console.log(5555);
AppRegistry.registerComponent("MyProject", () => OldNavigationTest);
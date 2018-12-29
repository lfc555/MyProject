import React, { Component } from "react";
import { ToastAndroid } from "react-native";


/*
     用于在Android设备上显示一个悬浮的提示信息。本模块包含一个show方法接受以下的参数：
    String message: 一个字符串，表示将要显示的文本内容。
    int duration: 提示信息持续显示的时间。可以是ToastAndroid.SHORT或者ToastAndroid.LONG。
*/
export default class ToastUtil {
    static show(hint) {
        ToastAndroid.show(hint, ToastAndroid.SHORT);
    }
}
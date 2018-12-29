import React, { Component } from "react";
import { Dimensions } from "react-native";

/**
 * 屏幕尺寸辅助工具类
 */
export default class DimenUtil { 
    static getScreenWidth(){
        return Dimensions.get("window").width;
    }
}


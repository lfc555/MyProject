/**
 * created by lfc  2018.05.28
 * desc:熟悉flex 的各种属性
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";


export default class FlexTest extends Component {
    render() {
        return (
            <View style={FlexTestStyle.container}>
                <Text style={FlexTestStyle.item}>1</Text>
                <Text style={FlexTestStyle.item}>2</Text>
                <Text style={FlexTestStyle.item}>3</Text>
                <Text style={FlexTestStyle.item}>4</Text>
                <Text style={FlexTestStyle.item}>5</Text>
            </View>
        )

    }

}

//样式类  
const FlexTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#0ff",
        flexDirection: "row",//定义 主轴
        flexWrap:"wrap",//定义 是否换行
        justifyContent:"space-between"//定义 主轴上的 对齐方式
        ,alignItems:"stretch"
        ,height:400
        //width:1000
    },
    item:{
        backgroundColor:"#f0f",
        height:80,
        width:150,
        margin:30,
        //flexShrink:1


    }
    
});

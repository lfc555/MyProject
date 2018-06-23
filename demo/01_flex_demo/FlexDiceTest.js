
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

/*
*cretaed by lfc 
desc: 骰子 
*/


export default class FlexDiceTest extends Component {

    render() {
        return (
            <View style={FlexDiceTestStyle.container}>
                <View style={FlexDiceTestStyle.container1}>
                    <Text style={FlexDiceTestStyle.item1}></Text>
                </View>
                <View style={FlexDiceTestStyle.container2}>
                    <Text style={FlexDiceTestStyle.item1}></Text>
                    <Text style={FlexDiceTestStyle.item2}></Text>
                    <Text style={FlexDiceTestStyle.item3}></Text>
                </View>
                <View style={FlexDiceTestStyle.container3}>
                    <View style={FlexDiceTestStyle.column}>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                    </View>
                    <View>
                        <Text style={FlexDiceTestStyle.item2}></Text>
                    </View>
                    <View style={FlexDiceTestStyle.column}>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                    </View>

                </View>
                <View style={FlexDiceTestStyle.container4}>
                    <View style={FlexDiceTestStyle.column}>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                    </View>
                    <View style={FlexDiceTestStyle.column}>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                    </View>
                    <View style={FlexDiceTestStyle.column}>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                        <Text style={FlexDiceTestStyle.item1}></Text>
                    </View>
                </View>
                <View style={FlexDiceTestStyle.container5}>
                    <Text style={FlexDiceTestStyle.space1}>1</Text>
                    <Text style={FlexDiceTestStyle.space2}>2</Text>
                    <Text style={FlexDiceTestStyle.space3}>3</Text>
                </View>
            </View>
        )

    }

}

const FlexDiceTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#0ff"
        , flexDirection: "row"
        , height: 500,
        justifyContent: "space-around"
    },
    container1: {
        height: 100,
        width: 100,
        backgroundColor: "#f0f",
        //alignItems:"center"
    },
    container2: {
        height: 100,
        width: 100,
        backgroundColor: "#f0f"
        , flexDirection: "column"
        , justifyContent: "space-between"
    },
    container3: {
        height: 100,
        width: 100,
        backgroundColor: "#f0f"
        , flexDirection: "column"
        , justifyContent: "space-between"
    },
    container4: {
        height: 100,
        width: 100,
        backgroundColor: "#f0f"
        , flexDirection: "column"
        , flexWrap: "wrap"
        , justifyContent: "space-between"
    },
    container5: {
        height: 100,
        width: 300,
        backgroundColor: "#f0f"
        , flexDirection: "row"
        , flexWrap: "wrap"
    },
    space1: {
        margin: 10,
        backgroundColor: "#000",
        color: "#fff",
        flex: 1
    },
    space2: {
        margin: 10,
        width:30,
        backgroundColor: "#000",
        color: "#fff",
        flex: 0
    },
    space3: {
        margin: 10,
        backgroundColor: "#000",
        color: "#fff",
        flex: 1
    },


    item1: {
        width: 20,
        height: 20,
        color: "#fff",
        //alignSelf:"flex-start",
        borderRadius: 10,
        backgroundColor: "#000"
    },
    item2: {
        width: 20,
        height: 20,
        color: "#fff",
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: "#000"
    },
    item3: {
        width: 20,
        height: 20,
        color: "#fff",
        alignSelf: "flex-end",
        borderRadius: 10,
        backgroundColor: "#000"
    },
    column: {
        flexDirection: "row"
        , justifyContent: "space-between"

    }
});
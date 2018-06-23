/**
 * created by lfc
 * time: 2018-06-03 15 35
 * desc:网络请求 fetch
 */
import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ToastAndroid } from "react-native";


export default class FetchNetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    fetchUserData() {
        const url = "https://api.github.com/users/mralexgray/repos";

             fetch(url)
            .then((Response) => Response.json())
            .then(
                (responseJson) => {
                    var user = responseJson;
                    this.setState({
                        user: user

                    });
                    console.log(user);
                }
            )
            .catch((error) => console.log(error))
    }
    /**
     * component 生命周期
     *  页面渲染后 主动调用
     * https://www.race604.com/react-native-component-lifecycle/
     */
    componentDidMount() {
        this.fetchUserData();
    }
    //界面
    render() {
        let data = this.state.user;
        if (data) {
            var firstUser = data[0];
            return (
                <View>
                    <UserView user={firstUser}></UserView>
                </View>
            )
        }
        return (
            <Text style={{ textAlign: "center", fontSize: 16, padding: 20 }}>加载中...</Text>
        )
    }

}
//自定义 显示组件
class UserView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var item = this.props.user;
        return (
            <View style={UserItemStyle.container_out}>
                <Image style={UserItemStyle.image_UserAvatar} source={{ uri: item.avatar_url }} />
                <View style={UserItemStyle.container_right}>
                    <Text style={UserItemStyle.text_UserID}>{item.id}</Text>
                    <Text style={UserItemStyle.text_UserType}>{item.type}</Text>
                </View>
            </View>
        )
    }
}

//样式
const UserItemStyle = StyleSheet.create({
    container_out: {
        backgroundColor: "white",
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    container_right: {
        flexDirection: "column",
        height: 80,
        flexGrow: 1,
    },
    image_UserAvatar: {
        borderRadius: 80,
        width: 80,
        height: 80,
        resizeMode: "cover",
        marginHorizontal: 12
    },
    text_UserID: {
        color: "black",
        fontSize: 16,
        lineHeight: 24,
    },
    text_UserType: {
        color: "gray",
        fontSize: 12,
        lineHeight: 20,
    },
})

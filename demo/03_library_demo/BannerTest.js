import React, { Component } from "react";
import { Platform,View, StyleSheet, Text } from "react-native";
import Banner from 'react-native-banner';
/**
 * created by lfc
 * time:2018.06.06
 * desc: banner
 */



 /**
  * 一直失败，提示如下
  * undefined is not an object (evaluating '_react3.default.PropTypes.bool')
<unknown>
    G:\LfcWorkstation\reactNative\MyProject\node_modules\react-native-banner\Swiper.js:19:55
loadModuleImplementation
    G:\LfcWorkstation\reactNative\MyProject\node_modules\metro\src\lib\polyfills\require.js:212:12
guardedLoadModule
    G:\LfcWorkstation\reactNative\MyProject\node_modules\metro\src\lib\polyfills\require.js:146:36
_require
    G:\LfcWorkstation\reactNative\MyProject\node_modules\metro\src\lib\polyfills\require.js:130:20
<unknown>
...............
没有找到原因，猜测是  Banner 加载失败！！
  */
export default class BannerTest extends Component {
  constructor(props) {
    super(props);

    //
    this.defaultIndex = 0;
    //
    this.banners = [
      {
        title: "banner 01",
        image: 'http://source.51yrz.com/1466071007.jpg?imageView2/1/w/600/h/300'
      },
      {
        title: "banner 02",
        image: 'http://source.51yrz.com/1466126704.jpg?imageView2/1/w/600/h/300'
      },
      {
        title: "banner 03",
        image: 'http://source.51yrz.com/1466071229.jpg?imageView2/1/w/600/h/300'
      },
      {
        title: "banner 04",
        image: 'http://source.51yrz.com/1466473308.jpg?imageView2/1/w/600/h/300'
      }
    ];
    this.iosMarginTop = Platform.OS == "ios" ? { marginTop: 20 } : {};
    //
    this.state = {
      clickTitle: 'You can try clicking beauty',
      defaultIndex: 0,
    }

  }
  render() {
    return (
      <View style={[styles.container, this.iosMarginTop]}>
        <Banner
          banners={this.banners}
          defaultIndex={this.defaultIndex}
          onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
          intent={this.clickListener.bind(this)}
        />
        <Text>{this.state.clickTitle}</Text>
      </View>
    );
  }
  clickListener(index) {
    this.setState({
      clickTitle: this.banners[index].title ? `你点击了　${this.banners[index].title}` : "我没有标题~"
    })
  }
  onMomentumScrollEnd(event, state) {
    console.log(`onMomentumScrollEnd page index:${state.index},${state.total}`);
    this.defaultIndex = state.index;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }

});
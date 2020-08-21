import React from "react";
import { View, Input } from "@tarojs/components";
import "./index.less";

export default class ActivityCreation extends React.PureComponent {
  state = {
    value: 'default '
  }
  handleInput = (e) => {
    this.setState({ value: e.detail.value });
  };
  render() {
    const { value } = this.state;
    return (
      <View>
        已输入：{value.length}
        <Input value={value} onInput={this.handleInput} />
      </View>
    );
  }
}

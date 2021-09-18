import React from "react";
import { TouchableNativeFeedbackBase } from "react-native";
import { AppRegistry, asset, Pano, Text, View, VrButton } from "react-vr";

export default class cursorSystem extends React.Component {
  constructor(){
    super();
    this.state={buttonText: "Default Button"}
  }

  triggerEnter(){
    this.setState({buttonText: "Mouse Entered"})
  }

  triggerClick(){
    this.setState({buttonText: "Button Clicked"})
  }

  triggerExit(){
    this.setState({buttonText: "Mouse Exited"})
  }

  triggerLongClick(){
    this.setState({buttonText: "Button Long Clicked"})
  }

  render() {
    return (
      <View>
        <Pano source={asset("chess-world.jpg")} />

        <VrButton
        onEnter = {this.triggerEnter.bind(this)}
        onExit = {this.triggerExit.bind(this)}
        onClick = {this.triggerClick.bind(this)}
        onLongClick = {this.triggerLongClick.bind(this)}>

        <Text style = {{
          fontSize: 0.3,
          textAlign: 'center',
          backgroundColor: 'steelblue',
          transform: [
            {translate: [-1, 0, -3]}
          ]
        }}>{this.state.buttonText}</Text>

      </VrButton>
      </View>
    );
  }
}

AppRegistry.registerComponent("shapes", () => cursorSystem);

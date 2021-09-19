import React from "react";
import { Easing } from "react-native";
import { AppRegistry, asset, Pano, View, Model, Animated, PointLight } from "react-vr";

export default class ThreeDModel extends React.Component {

  constructor(){
    super();
    this.state = {
      animateValue: new Animated.Value(0)
    };
  }

  componentDidMount(){
    this.rotate();
  }

  rotate(){
    this.state.animateValue.setValue(0);
    Animated.timing(
      this.state.animateValue,
      {
        toValue: 360,
        duration: 2500,
        easing: Easing.linear,
      }
    ).start(() => this.rotate());
  }





  render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    return (
      <View>
        <Pano source={asset("chess-world.jpg")} />
        <PointLight style ={{color: 'white', transform: [{translate: [0, 0, 0,]}]}}/>

        <AnimatedModel
          source={{
            obj: asset("boy.obj"),
            mtl: asset("boy.mtl"),
          }}
          lit
          style={{
            transform: [
              { translate: [0, -8, -25] }, 
              { scale: [1, 1, 1 ]},
              { rotateY: this.state.animateValue}
            ]
          }}
        />

      </View>
    );
  }
};

AppRegistry.registerComponent("shapes", () => ThreeDModel);

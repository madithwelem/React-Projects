import React from "react";
import { AppRegistry, asset, Pano, View, Box } from "react-vr";

export default class shapes extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("white1.jpg")} />

        <Box
          dimWidth={0.35}
          dimDepth={0.35}
          dimHeight={0.35}
          texture={asset("techspaza.jpg")}
          style={{
            color: "white",
            transform: [
              { translate: [0, 0, -2] },
              { rotateX: 45 },
              { rotateY: 50 },
              { scale: [2, 0.7, 1.5] },
            ],
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("shapes", () => shapes);

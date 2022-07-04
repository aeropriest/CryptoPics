import { View, Image, Text, ImageBackground } from "react-native";
import React from "react";
import CircleButton from "../CircleButton";
import { assets, SHADOWS, SIZES, COLORS, FONTS } from "../../../constants";
import { StatusBar } from "expo-status-bar";

export default function DetailsHeader({ data, navigation }) {
  console.log("---------details-header-data---------");
  return (
    <View style={{ width: "100%", height: 373 }}>
      <View>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        />
        <View style={{}}>
          <CircleButton
            imageUrl={assets.left}
            onPress={() => console.log("Press go back")}
            left={50}
          />
          <CircleButton
            imageUrl={assets.heart}
            handlePress={() => navigation.goBack()}
          />
        </View>

        {/* <ImageBackground
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              //paddingHorizontal: 30,
              paddingVertical: 10,
              paddingLeft: StatusBar.currentHeight + 10,
              paddingRight: 50,
            }}
          >
            <CircleButton
              imageUrl={assets.left}
              onPress={() => console.log("Press go back")}
              left={50}
            />
            <CircleButton
              imageUrl={assets.heart}
              handlePress={() => navigation.goBack()}
            />
          </View>
        </ImageBackground> */}
      </View>
    </View>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { SIZES } from "../../../constants";

export default function ArtInfo() {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.front,
        marginTop: SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text>Title goes here </Text>
    </View>
  );
}

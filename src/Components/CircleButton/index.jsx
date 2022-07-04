import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES, SHADOWS } from "../../../constants";

export default function CircleButton({ imageUrl, handlePress, ...props }) {
  console.log("CircleButton", imageUrl, handlePress);
  return (
    <TouchableOpacity
      style={{
        height: 40,
        width: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
      }}
      onPress={handlePress}
    >
      <Image
        source={imageUrl}
        resizeMode="contain"
        style={{ width: "70%", height: "70%" }}
      />
    </TouchableOpacity>
  );
}

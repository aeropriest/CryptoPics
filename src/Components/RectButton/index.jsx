import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, FONTS } from "../../../constants";

export default function RectButton({
  minWidth,
  fontSize,
  handlePress,
  ...props
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        paddingHorizontal: SIZES.extraLarge,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
}

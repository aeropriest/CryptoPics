import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../../constants";

export default function ArtTitle({ title, subTitle, titleSize, subTitleSize }) {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
          paddingVertical: 5,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

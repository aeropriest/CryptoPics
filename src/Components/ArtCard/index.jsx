import { View, Text, Image } from "react-native";
import React from "react";

import { COLORS, NFTData, SIZES, SHADOWS, assets } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import CircleButton from "../CircleButton";
import ArtInfo from "../ArtInfo";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  console.log("NFT CARD", data);
  return (
    <View
      style={{
        backgroundColor: "red",
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250, backgroundColor: "red" }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imageUrl={assets.heart} right={10} top={10} />
      </View>
      <ArtInfo />
    </View>
  );
};

export default NFTCard;

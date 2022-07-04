import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import {
  COLORS,
  NFTData,
  SIZES,
  SHADOWS,
  assets,
  FONTS,
} from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import CircleButton from "../CircleButton";
import ArtInfo, { Price } from "../ArtInfo";
import ArtTitle from "../ArtTitle";
import RectButton from "../RectButton";

const ArtCard = ({ data }) => {
  const placeBid = () => {
    //console.log(data);
    navigation.navigate("Details", { data });
  };
  const navigation = useNavigation();
  console.log("NFT CARD", data);
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 325 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "62%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <View
          style={{
            alignItems: "top",
            right: 50,
            top: 10,
            position: "absolute",
          }}
        >
          <CircleButton imageUrl={assets.heart} top={10} right={10} />
        </View>
        <View
          style={{
            alignItems: "top",
            top: 155,
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ArtInfo />
        </View>
        <View
          style={{
            alignItems: "top",
            top: 210,
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.font,
          }}
        >
          <ArtTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />
        </View>
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.font,
            top: 45,
          }}
        >
          <Price price={10} />
          <RectButton
            minWidth={100}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
          {/* <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.extraLarge,
              minWidth: 120,
              padding: SIZES.small,
              paddingHorizontal: SIZES.extraLarge,
            }}
            onPress={() => placeBid(data)}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              Place a bid
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default ArtCard;

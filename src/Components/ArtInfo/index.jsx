import { View, Text, Image } from "react-native";
import { assets, COLORS, SIZES, SHADOWS, FONTS } from "../../../constants";

export function ImageCmp({ imageUrl, index }) {
  return (
    // <Text>{index === 0 ? 0 : -SIZES.font}</Text>
    <Image
      source={imageUrl}
      resizeMode="contain"
      style={{
        width: 40,
        aspectRatio: 1,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
}
export function People() {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imageUrl, index) => (
          <ImageCmp imageUrl={imageUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
}

export function Price({ price }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        style={{
          width: 18,
          aspectRatio: 1,
          marginRight: 2,
          resizeMode: "contain",
        }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
}

export function EndDate() {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
}

export default function ArtInfo() {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People></People>
      <EndDate></EndDate>
    </View>
  );
}

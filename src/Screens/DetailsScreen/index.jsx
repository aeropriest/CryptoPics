import {
  View,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import FocusedStatusBar from "../../Components/FocusedStatusBar";
import React from "react";
import RectButton from "../../Components/RectButton";
import {
  SHADOWS,
  SIZES,
  COLORS,
  FONTS,
  NFTData,
  assets,
} from "../../../constants";
import { FlatList } from "react-native-gesture-handler";
import BidDetails from "../../Components/BidDetails";
import DetailsHeader from "../../Components/DetailsHeader";
import CircleButton from "../../Components/CircleButton";

const DetailsScreen = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(`----------------------------------------------------`);
  console;
  console.log(`----------------------------------------------------`);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          with: "100%",
          //          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          backgroundColor: "red",
          zIndex: 1,
        }}
      ></View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <BidDetails bids={item.bid} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
          </React.Fragment>
        )}
      />
      <RectButton minWidth={30} fontSize={SIZES.large} {...SHADOWS.dark} />
    </SafeAreaView>
  );
};

export default DetailsScreen;
/*

      >
*/

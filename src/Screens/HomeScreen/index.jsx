import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { COLORS, NFTData } from "./../../../constants/";
import FocusedStatusBar from "../../Components/FocusedStatusBar";
import HomeHeader from "../../Components/HomeHeader";
import ArtCard from "../../Components/ArtCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <ArtCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        ></View>
        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ backgroundColor: "red", flex: 1 }} />
      </View>
    </SafeAreaView>
  );
}

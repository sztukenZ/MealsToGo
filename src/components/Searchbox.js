import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { spacing } from "../utils/sizes";

export const Searchbox = () => {
  return (
    <View style={styles.searchbar}>
      <Text>search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    padding: spacing.m,
    backgroundColor: "blue",
  },
});

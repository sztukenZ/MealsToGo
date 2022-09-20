import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { spacing } from "../utils/sizes";

export const List = () => {
  return (
    <View style={styles.listfield}>
      <Text>List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listfield: {
    flex: 1,
    backgroundColor: "green",
    padding: spacing.m,
  },
});

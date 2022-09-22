import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { spacing } from "../utils/sizes";
import { Searchbar } from "react-native-paper";

export const Searchbox = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <View style={styles.searchbar}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    padding: spacing.m,
  },
});

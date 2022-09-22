import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { spacing } from "../../../utils/sizes";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  backgroundcolor: "white";
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: "white";
`;

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=-lumn-406014.jpg&fm=jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
};

import React from "react";

import { Card } from "@rneui/themed";
import { StyleSheet, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ApartmentCard(apartments) {
  const navigation = useNavigation();

  function handlePress(apartment) {
    navigation.navigate("ApartmentDetails", { id: apartment._id });
  }
  return (
    <>
      {apartments.data &&
        apartments.data.map((apartment, index) => (
          <Card key={index}>
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri: `${apartment.mainImg}`,
              }}
            />
            <Card.Divider />
            <Card.Title>{apartment.title}</Card.Title>
            <Text>{apartment.area} Sq.ft</Text>
            <Text>{apartment.bathrooms} Baths</Text>
            <Text>{apartment.bedrooms} Beds</Text>
            <Button
              title="Click for details"
              onPress={() => handlePress(apartment)}
            />
          </Card>
        ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

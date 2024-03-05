import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import { fetchApartmentDetails } from "../actions/fetchApartmentDetails";

export default function ApartmentDetails(data) {
  const [apartment, setApartmentDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      const results = await fetchApartmentDetails(data.route.params.id);
      setApartmentDetails(results);
    }
    fetchData();
  }, []);

  return (
    <View contentContainerStyle={styles.container}>
      <Image
        style={{ width: "100%", height: "60%", padding: 0 }}
        source={{
          uri: `${apartment.mainImg}`,
        }}
        resizeMode={"cover"}
      />
      <Text>
        <Text style={{ fontWeight: "bold" }}>Title:</Text> {apartment.title}
      </Text>
      <Text>
        <Text style={{ fontWeight: "bold" }}>Description:</Text>{" "}
        {apartment.description}
      </Text>
      <Text>
        <Text style={{ fontWeight: "bold" }}>Price:</Text> ${apartment.price}{" "}
        USD
      </Text>
      <Text>
        <Text style={{ fontWeight: "bold" }}>Bedrooms:</Text>{" "}
        {apartment.bedrooms}
      </Text>
      <Text>
        <Text style={{ fontWeight: "bold" }}>Bathrooms:</Text>{" "}
        {apartment.bathrooms}
      </Text>
      <Text>
        <Text style={{ fontWeight: "bold" }}>Area:</Text> {apartment.area}
      </Text>
      <Text>
        <Text style={{ fontWeight: "bold" }}>Furnished:</Text>{" "}
        {apartment.furnished ? "True" : "False"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useState, useEffect } from "react";
import { fetchApartments } from "../actions/fetchApartments";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import ApartmentCard from "../components/ApartmentCard";

export default function HomeScreen({ navigation }) {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await fetchApartments();
      setApartments(results);
    }
    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ApartmentCard data={apartments} />
      <StatusBar style="auto" />
    </ScrollView>
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

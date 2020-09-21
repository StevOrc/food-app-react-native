import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const serchAPI = async (serchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: serchTerm,
          location: "paris",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermSubmit={() => serchAPI(term)}
        onTermChange={setTerm}
      />
      <Text> We have fount {results.length} results </Text>
      {errorMessage ? <Text> {errorMessage} </Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

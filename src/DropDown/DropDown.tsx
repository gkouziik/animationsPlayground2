import { StyleSheet, Text, View } from "react-native";

import type { List as ListModel } from "./List";
import { List } from "./List";

const list: ListModel = {
  name: "Elements",
  items: [
    { name: "element1", points: "1" },
    { name: "element2", points: "2" },
    { name: "element3", points: "3.4" },
    { name: "element4", points: "3.45" },
    { name: "element5", points: "2.56" },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f6",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export const DropDown = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example Drop Down</Text>
      <List {...{ list }} />
    </View>
  );
};

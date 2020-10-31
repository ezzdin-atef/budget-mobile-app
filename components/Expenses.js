import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Expenses(props) {

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={{ margin: 20, alignItems: "center", flexDirection: "row-reverse" }}>
            <Text style={styles.headingText}>انت صرفت اليوم</Text>
            <Text style={[styles.headingText, styles.badge]}>{props.sum} E£</Text>
          </View>
        }
        data={props.data}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.key}</Text>
            <Text style={[styles.itemText, styles.itemCost]}>{item.cost} E£</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  headingText: {
    fontSize: 25,
    fontFamily: "Tajawal-Regular",
    color: "#E74C3C"
  },
  item: {
    padding: 10,
    backgroundColor: "#E74C3C",
    width: 300,
    margin: 5,
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  },
  itemText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Tajawal-Regular",
  },
  itemCost: {
    backgroundColor: "#fff",
    color: "#E74C3C",
    paddingHorizontal: 3,
    borderRadius: 5
  },
  badge: {
    marginRight: 10,
    backgroundColor: "#E74C3C",
    color: "#fff",
    paddingHorizontal: 5,
    borderRadius: 5
  }
});
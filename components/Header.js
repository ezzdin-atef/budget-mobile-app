import React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Header(props) {
  return (
    <ImageBackground source={require("../assets/bg.png")} style={styles.header}>
      <View style={{ 
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        flex: 1, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center" 
      }}>
        <View style={[styles.income, styles.headerBoxes]}>
          <Text style={[styles.headerText, styles.arabicText]}>انت معاك</Text>
          <Text style={styles.headerText}>{props.income}</Text>
          <Text style={[styles.headerText, { marginRight: 5 }]}>ج</Text>
        </View>
        <View style={[styles.expense, styles.headerBoxes]}>
          <Text style={[styles.headerText, styles.arabicText]}>انت صرفت</Text>
          <Text style={styles.headerText}>{props.expense}</Text>
          <Text style={[styles.headerText, { marginRight: 5 }]}>ج</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "#222",
    width: '100%',
    height: 300
  },
  headerBoxes: {
    width: 300,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    position: "relative",
    flexDirection: "row-reverse",
    justifyContent: "flex-end"
  },
  income: {
    backgroundColor: '#1ABC9C'
  },
  expense: {
    backgroundColor: "#E74C3C"
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Tajawal-Regular"
  },
  arabicText: {
    position: "absolute",
    left: 10
  }
});
import { StatusBar } from 'expo-status-bar';
import Header from "../components/Header";
import Expenses from "../components/Expenses";
import Incomes from "../components/Incomes";
import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { View, ScrollView, LogBox } from 'react-native';

export default function Home() {
  const [loadFonts] = useFonts({
    "Tajawal-Regular": require("../assets/fonts/Tajawal-Regular.ttf")
  });
  const [expenses, setExpenses] = useState([
    {key: 'تجربة 1', cost: "15"},
    {key: 'تجربة 2', cost: "15"},
    {key: 'تجربة 3', cost: "15"},
    {key: 'تجربة 4', cost: "15"},
    {key: 'تجربة 5', cost: "15"},
    {key: 'تجربة 6', cost: "15"},
  ]);
  const [incomes, setIncomes] = useState([
    {key: 'تجربة 1', cost: "1500"},
    {key: 'تجربة 2', cost: "15"},
    {key: 'تجربة 3', cost: "15"},
    {key: 'تجربة 4', cost: "15"},
    {key: 'تجربة 5', cost: "15"},
    {key: 'تجربة 6', cost: "15"},
  ]);

  const clacIcomes = () => {
    let sum = 0;
    incomes.map(el => sum += parseInt(el.cost, 10));
    return sum;
  }

  const clacExpenses = () => {
    let sum = 0;
    expenses.map(el => sum += parseInt(el.cost, 10));
    return sum;
  }

  if (!loadFonts) {
    return <AppLoading />
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Header income={clacIcomes() - clacExpenses()} expense={clacExpenses()} />
        <ScrollView>
          <Expenses data={expenses} sum={clacExpenses()} />
          <Incomes data={incomes} sum={clacIcomes()} />
        </ScrollView>
      </View>
    );
  }
}
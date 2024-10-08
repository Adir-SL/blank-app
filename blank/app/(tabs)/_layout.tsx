import { Tabs } from 'expo-router';
import React from 'react';
import First from './Tab_01';
import Second from './Tab_02';
import Third from './Tab_03';
import Forth from './Tab_04';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import "./layout.css";

const FirstRoute = () => (
  <View id="first" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray' }}><First /></View>
);

const SecondRoute = () => (
  <View id="second" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkgray' }}><Second /></View>
);
const ThirdRoute = () => (
  <View id="third" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}><Third /></View>
);
const ForthRoute = () => (
  <View id="forth" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}><Forth /></View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  forth: ForthRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
    { key: 'forth', title: 'Forth' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

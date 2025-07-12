import { Tabs } from 'expo-router';
import React from 'react';

const  TabLayout = () => {
  return (
    <Tabs
      tabBar={() => <></>}
      screenOptions={{headerShown: false,}} 
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="articleDetails" />
    </Tabs>
  );
}

export default TabLayout;
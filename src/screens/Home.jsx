import {View, Text, SafeAreaView,ScrollView} from 'react-native';
import React from 'react';
import Fuction from '../components/Fuction';

const Home = () => {
  return (
    <SafeAreaView>
      <View className="bg-[#128040] p-4 items-center justify-center">
        <Text className="text-white text-xl">Auto& Lao Company</Text>
      </View>
      <ScrollView>
        <Fuction/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

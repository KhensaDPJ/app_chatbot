import {Text, Image, View, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  return (
    <View className="bg-white w-full h-screen">
      <View className="w-full h-screen flex-1 items-center pt-5">
        <Image
          source={require('../../img/logo.jpg')}
          resizeMode="stretch"
          className="h-[10%] w-[25%] mb-2"
        />
        <Text className="text-xl text-[#128040] font-extrabold">
          Welcome to ALC chatbot
        </Text>
        <Text className="text-[#128040]">
          Enter your email and password below to sign in
        </Text>
        <View className="w-full h-screen bg-[#128040] rounded-r-[100px] mt-10">
          <View className="flex justify-center px-5 gap-5 h-[50%]">
            <View>
              <Text className="text-white font-extrabold text-lg pt-2 mb-2">
                Phone or Email
              </Text>
              <TextInput
                placeholder="Enter your phone or email"
                className="bg-white shadow-lg rounded-md text-base"
              />
            </View>
            <View>
              <Text className="text-white font-extrabold text-lg pt-2 mb-2">
                Password
              </Text>
              <TextInput
                placeholder="Enter your password"
                secureTextEntry={true}
                className="bg-white shadow-lg rounded-md text-base"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

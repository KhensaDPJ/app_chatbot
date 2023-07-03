import {  Text,
    Image,
    View,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation=useNavigation();
  return (
    <KeyboardAvoidingView
    className="flex-1"
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView showsVerticalScrollIndicator={false} >
      <View className="items-center pt-5 bg-white">
        <Image
          source={require('../../img/logo.jpg')}
          resizeMode="stretch"
          className="h-[10%] w-[25%] mb-2"
        />
        <Text className="text-xl text-[#128040] font-extrabold">
          Welcome to ALC chatbot
        </Text>
        <View className=" w-full h-screen bg-[#128040] rounded-tr-[100px] mt-2 flex-1 pb-16">
          <View className="px-8 gap-5 pt-4">
            <View>
              <Text className="text-white font-extrabold text-lg mb-2">
                Full name
              </Text>
              <TextInput
                placeholder="Enter your name"
                className="bg-white shadow-lg rounded-md text-base h-12"
              />
            </View>
            <View>
              <Text className="text-white font-extrabold text-lg mb-2">
                Phone or Email
              </Text>
              <TextInput
                placeholder="Enter your phone or email"
                className="bg-white shadow-lg rounded-md text-base h-12"
              />
            </View>
            <View>
            <Text className="text-white font-extrabold text-lg mb-2">
                Password
              </Text>
              <TextInput
                placeholder="Enter your password"
                secureTextEntry={true}
                className="bg-white shadow-lg rounded-md text-base h-12"
              />
            </View>
            <View>
              <Text className="text-white font-extrabold text-lg mb-2">
                Confirm password
              </Text>
              <TextInput
                placeholder="Confirm password"
                secureTextEntry={true}
                className="bg-white shadow-lg rounded-md text-base h-12"
              />
            </View>
            <View className="flex">
              <TouchableOpacity className="w-full bg-[#069D45] p-3 shadow-lg rounded-3xl items-center justify-center">
                <Text className="text-xl font-extrabold text-white">
                  Sign up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="pt-4" onPress={()=>navigation.navigate('Login',{name:'Login'})}>
                <Text className="text-white text-center">
                  Do have an account ? Sing in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
  )
}

export default Register
import {
  Text,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { PhoneIcon,EnvelopeIcon,LockClosedIcon,EyeSlashIcon ,EyeIcon  } from "react-native-heroicons/outline";

const Login = () => {
  const navigation=useNavigation();
  const [isShowPassword,setIsShowPassword]=useState(true);
 
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
                <Text className="text-white font-extrabold text-lg mb-2 flex justify-center">
                <PhoneIcon  color={'white'} size={18}/> Phone or <EnvelopeIcon size={18} color={'white'}/> Email
                </Text>
                <View className='bg-white shadow-lg rounded-md '>
                <TextInput
                  placeholder="Enter your phone or email"
                  className="text-base h-12 pl-5 w-[310px]"
                />
                </View>
              </View>
              <View>
                <Text className="text-white font-extrabold text-lg mb-2">
                  <LockClosedIcon color={'white'} size={18}/> Password
                </Text>
                  <View className=' flex-row justify-between bg-white shadow-lg rounded-md items-center'>
                  <TextInput
                  placeholder="Enter your password"
                  secureTextEntry={isShowPassword}
                  className=" text-base h-12 pl-5 w-[310px]"
                />
                <TouchableOpacity className='pr-4' onPress={()=>setIsShowPassword(prev=>prev=!prev)}>
                {isShowPassword ? <EyeSlashIcon color={'gray'}/> : <EyeIcon color={'gray'}/>}
                </TouchableOpacity>
                  </View>

                <TouchableOpacity>
                  <Text className="pt-2 text-sm text-white text-right">
                    Forgot password
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="flex">
                <TouchableOpacity className="w-full bg-[#069D45] p-3 shadow-lg rounded-3xl items-center justify-center"
                onPress={()=>navigation.navigate('Home',{name:'Home'})}>
                  <Text className="text-xl font-extrabold text-white">
                    Sign in
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="pt-4" onPress={()=>navigation.navigate('Register',{name:'Register'})}>
                  <Text className="text-white text-center">
                    Don't have an account ? Sing Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

import React from 'react'
import { Image, Text, View } from 'react-native'

const Index: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require('@/assets/logo.png')}
        className="h-8 "
        resizeMode="contain"
        alt="Logo"
      />

      <Text className="text-zinc-400 font-regular text-center text-lg mt-3">
        Convide seus amigos e planeje sua{'\n'} próxima viagem
      </Text>
    </View>
  )
}

export default Index

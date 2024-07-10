import React from 'react'

import '@/styles/global.css'
import { Slot } from 'expo-router'
import { View, StatusBar } from 'react-native'

const Layout: React.FC = () => {
  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Slot />
    </View>
  )
}

export default Layout

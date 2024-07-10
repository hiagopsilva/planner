import React from 'react'

import '@/styles/global.css'
import { Slot } from 'expo-router'
import { View } from 'react-native'

const Layout: React.FC = () => {
  return (
    <View className="flex-1 bg-zinc-950">
      <Slot />
    </View>
  )
}

export default Layout

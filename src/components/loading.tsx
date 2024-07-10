import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading: React.FC = () => {
  return (
    <ActivityIndicator className="flex-1 bg-zinc-950 items-center justify-center text-lime-300" />
  )
}

export default Loading

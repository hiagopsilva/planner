import { Input } from '@/components/input'
import React from 'react'
import { Image, Text, View } from 'react-native'
import {
  MapPin,
  Calendar as IconCalendar,
  Settings2,
} from 'lucide-react-native'
import { colors } from '@/styles/colors'
import { Button } from '@/components/button'

const Index: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <Image
        source={require('@/assets/logo.png')}
        className="h-8 "
        resizeMode="contain"
        alt="Logo"
      />

      <Text className="text-zinc-400 font-regular text-center text-lg mt-3">
        Convide seus amigos e planeje sua{'\n'} próxima viagem
      </Text>

      <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800">
        <Input>
          <MapPin color={colors.zinc[400]} size={20} />
          <Input.Field placeholder="Para onde?" />
        </Input>

        <Input>
          <IconCalendar color={colors.zinc[400]} size={20} />
          <Input.Field placeholder="Para onde?" />
        </Input>

        <View className="border-b py-3 border-zinc-800">
          <Button variant="secondary">
            <Button.Title>Alterar local/data</Button.Title>
            <Settings2 color={colors.zinc[200]} size={20} />
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Index

import { Text, View } from 'react-native'
import { TripData } from './[id]'
import { Button } from '@/components/button'
import { PlusIcon } from 'lucide-react-native'
import { colors } from '@/styles/colors'
import { Modal } from '@/components/modal'
import { useState } from 'react'

type Props = {
  tripDetails: TripData
}

enum MODAL {
  NONE = 0,
  CALENDAR = 1,
  NEW_ACTIVITY = 2,
}

export function TripActivities({ tripDetails }: Props) {
  const [showModal, setShowModal] = useState(MODAL.NONE)

  return (
    <View className="flex-1">
      <View className="w-full flex-row mt-5 mb-6 items-center">
        <Text className="text-zinc-50 text-2xl font-semibold flex-1">
          {tripDetails.destination}
        </Text>

        <Button onPress={() => setShowModal(MODAL.NEW_ACTIVITY)}>
          <PlusIcon color={colors.lime[950]} size={20} />
          <Button.Title>Nova atividade</Button.Title>
        </Button>
      </View>

      <Modal
        title="Cadastrar atividade"
        subtitle="Todos os convidados podem visualizar as atividades"
        visible={showModal === MODAL.NEW_ACTIVITY}
        onClose={() => setShowModal(MODAL.NONE)}
      ></Modal>
    </View>
  )
}

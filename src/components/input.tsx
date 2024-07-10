import { colors } from '@/styles/colors'
import { clsx } from 'clsx'
import React from 'react'
import { Platform, TextInput, TextInputProps, View } from 'react-native'

// import { Container } from './styles';

type InputProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
}

function Input({ children, variant = 'primary' }: InputProps) {
  return (
    <View
      className={clsx('w-full flex-row items-center gap-2', {
        'h-14 px-4 rounded-lg border border-zinc-800': variant !== 'primary',
        'border-zinc-950': variant !== 'secondary',
        'border-zinc-900': variant !== 'tertiary',
      })}
    >
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-zinc-100 text-lg font-regular"
      placeholderTextColor={colors.zinc[400]}
      cursorColor={colors.zinc[100]}
      selectionColor={Platform.OS === 'ios' ? colors.zinc[100] : undefined}
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }

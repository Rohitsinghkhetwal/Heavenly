
import React from 'react'
import Container from '@/components/container'
import Text from '@/components/text'
import { View } from 'react-native'

const Favorite = () => {
  return (
    <Container>
      <Text className="bg-green-300 text-3xl">Favroite</Text>
      <View className="flex-1 bg-red-200 ">

      </View>
    </Container>
  )
}

export default Favorite
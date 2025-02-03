import Container from '@/components/container';
import Text from '@/components/text';
import { FlatList, View } from 'react-native';
import { PROPERTIES } from "../../core/constants/data";


export default function HomeScreen() {
  return (
   <Container >
    <Text variant="title">Gallery</Text>
    <FlatList data={PROPERTIES} 
    renderItem={( { item }) => (
      <View>
        <Text>{item.name}</Text>

      </View>

    )}
    />

   </Container>
  );
}

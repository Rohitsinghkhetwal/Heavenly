import Container from '@/components/container';
import Text from '@/components/text';
import { FlatList} from 'react-native';
import { PROPERTIES } from "../../core/constants/data";
import Card from '@/components/home/card';


export default function Home() {
  return (
   <Container >
    <Text variant="title">Gallery</Text>
    <FlatList data={PROPERTIES} 
    renderItem={( { item }) => <Card property={item}/> }
    keyExtractor={( item ) => item.id.toString()}
    contentContainerStyle={{ paddingBottom: 10}}
    />
   </Container>
  );
}

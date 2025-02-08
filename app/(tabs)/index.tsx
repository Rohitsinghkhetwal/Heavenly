import Container from '@/components/container';
import Text from '@/components/text';
import { FlatList} from 'react-native';
import { PROPERTIES } from "../../core/constants/data";
import Card from '@/components/home/card';
import Discovery from '@/components/home/discovery';
import MainHeader from '@/components/home/main-header';


export default function Home() {
  return (
   <Container >
    <MainHeader/>
    <FlatList data={PROPERTIES} 
    ListHeaderComponent={() => <Discovery properties={PROPERTIES}/>}
    renderItem={( { item }) => <Card property={item}/> }
    keyExtractor={( item ) => item.id.toString()}
    contentContainerStyle={{ paddingBottom: 10}}
    showsVerticalScrollIndicator={false}
    />
   </Container>
  );
}

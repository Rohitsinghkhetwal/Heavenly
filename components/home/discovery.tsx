import { View, FlatList } from "react-native";
import React from "react";
import Image from "../image";
import Text from "../text";

type DiscoveryProps = {
  properties: Property[];
};

const Discovery = ({ properties }: DiscoveryProps) => {
  return (
    <FlatList
      data={properties.reverse()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View className="m-2">
          <Image source={item.images[1]} style={{ height: 200, width: 150, borderRadius: 20 }} />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Discovery;

import { Pressable, View } from "react-native";
import Image from "../image";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Text from "../text";

type CardProps = {
  property: Property;
};

const Card = ({ property }: CardProps) => {
  return (
    <View className="border-b border-gray-200 px-4 py-4 h-[380px] w-auto">
      <View className="relative">
        <View className="h-[300px]">
          <Image source={property.images[0]} style={{ borderRadius: 10 }} />
        </View>
        <View>
          <BlurView
            intensity={100}
            className="absolute bottom-8 left-8 flex flex-row overflow-hidden rounded-xl p-2"
          >
            <FontAwesome name="star" size={24} color={"#facc15"} />
            <Text className="mx-2 text-white">5</Text>
          </BlurView>
          <Pressable className="absolute bottom-10 right-8">
            <BlurView
              intensity={100}
              className=" overflow-hidden rounded-2xl p-2"
            >
              <FontAwesome
                name={property.is_favorite ? "heart" : "heart-o"}
                size={24}
                color={"white"}
              />
            </BlurView>
          </Pressable>
        </View>
      </View>

      <View className="px-2">
          <View className="flex flex-row items-center justify-between py-2">
            <View>
              <Text variant="subtitle">
                {property.name}
              </Text>
              <Text className="text-sm font-semibold text-gray-500">{property.amenities}</Text>
              </View>
            
            <View>
              <Text variant="caption">
                {property.country} starts at $ {property.price_per_night}
              </Text>
            </View>
          </View>

        </View>
    </View>
  );
};
export default Card;

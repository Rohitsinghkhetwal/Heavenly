import { WIDTH } from "@/core/utils/layout";
import { View } from "react-native";
import Carousel,{ ICarouselInstance } from "react-native-reanimated-carousel";
import Image from "../image";
import { useMemo, useRef } from "react";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
  useSharedValue,
} from 'react-native-reanimated';

type CarouselItemProps = {
  property: Property;
};

const CarouselItem = ({ property }: CarouselItemProps) => {

  const progressValue = useSharedValue<number>(0);
  const carouselRef = useRef<ICarouselInstance>(null);
  


  const carouselWidth = useMemo(() => WIDTH - 32, [])
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, 
  });
  return (
    <View>
      <Carousel
        ref={carouselRef}
        width={carouselWidth}
        height={300}
        data={property.images}
        scrollAnimationDuration={2000}
        overscrollEnabled={false}
        renderItem={({ item: imageUri }) => {
          return (
            <View className="mx-1">
              <Image source={imageUri} style={{ borderRadius: 15}}/>
            </View>
          )
        }}
      />
    </View>
  );
};

export default CarouselItem;

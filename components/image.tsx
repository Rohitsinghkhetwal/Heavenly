import { Image as ExpoImage } from "expo-image";
import { ImageStyle, StyleProp } from "react-native";

type ImageProps = {
  source: string;
  style?: StyleProp<ImageStyle>;
};

const defaultStyles: ImageStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "16",
};

const Image = ({ source, style }: ImageProps) => {
  return (
    <ExpoImage
      source={source}
      style={[defaultStyles, style]}
      placeholder={{
        blurhash: "LKN]Rv%2Tw=w]~RBVZRi};RPxuwH",
      }}
      contentFit="cover"
      transition={1000}
    />
  );
};

export default Image
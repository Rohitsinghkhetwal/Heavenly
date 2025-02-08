import { PRIMARY } from "@/core/theme/colors"
import { Image, View } from "react-native"
import Ionicons  from "@expo/vector-icons/Ionicons"
import Container from "../container"


const MainHeader = () => {
  return (
    <View className="px-2 py-2">
      <View>
        <Image />
        <Ionicons name="sparkles" size={24} color={PRIMARY}/>
        
      </View>

    </View>
  )
}

export default MainHeader
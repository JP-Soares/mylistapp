import { MaterialIcons } from '@expo/vector-icons';
import {Text, View} from 'react-native'


type TopBarProps = {
    title: string;
}

export default function TopBar({title}: TopBarProps){
    return(
        <View className='bg-white border-b border-gray-200 absolute top-20 w-full flex-row justify-between px-10'>
            <Text className='text-blue text-lg'>{title}</Text>
            <MaterialIcons 
                name="menu"
                size={24}
            />
        </View>
    );
}
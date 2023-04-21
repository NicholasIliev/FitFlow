import { userState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZE } from '../../../constants'

const Welcome = () => {
  const router = new useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Start Workout</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.startBtn} onPress={() => {}}>
          <Text style={styles.userName}>Quick Start</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.templates}>Templates</Text>
      </View>
    </View>
  )
}

export default Welcome
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
        <Text style={styles.programsTitle}>Programs</Text>
        <TouchableOpacity style={styles.addProgramBtnSmall} onPress={() => {}}>
          <Text style={styles.userName}>+ New</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.myPrograms}>My Programs (0)</Text>
      </View>


      {/* <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.addProgrammeBtnLarge} onPress={() => {}}>
          <Text style={styles.userName}>Tap to Add New Program</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addProgrammeBtnLarge} onPress={() => {}}>
          <Text style={styles.userName}>A Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addProgrammeBtnLarge} onPress={() => {}}>
          <Text style={styles.userName}>Another Button</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default Welcome
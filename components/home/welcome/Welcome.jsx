import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './welcome.style';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Dimensions, StatusBar, SafeAreaView, SectionList, ListItem } from 'react-native';
import { icons, SIZES } from "../../../constants";

const buttons = [
  { key: '1', title: 'Button 1' },
  { key: '2', title: 'Button 2' },
  { key: '3', title: 'Button 3' },
  { key: '4', title: 'Button 4' },
  { key: '5', title: 'Button 5' },
  { key: '6', title: 'Button 6' },
];

const Welcome = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);

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


      <View style={styles.containerMyPrograms}>
        <FlatList
          style={styles.flatList}
          ref={flatListRef}
          data={buttons}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.addProgrammeBtnLarge} onPress={() => console.log(item.title)}>
              <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
          bounces={true}
          contentContainerStyle={{ paddingRight: 0 }}
        />
      </View>
    </View>
  );
};

export default Welcome;

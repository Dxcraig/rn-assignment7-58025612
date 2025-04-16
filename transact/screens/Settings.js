import { StyleSheet, Text, View, FlatList, TouchableOpacity, useColorScheme , Appearance} from 'react-native'
import React , {useState} from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';


const data = [
  { id: '1', title: 'Language' },
  { id: '2', title: 'My Profile' },
  { id: '3', title: 'Contact Us' },
  { id: '4', title: 'Change Password' },
  { id: '5', title: 'Privacy Policy' },
]

const Item = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.group}>
      <Text style={styles.title}>{title}</Text>
      <AntDesign name="right" size={24} color="black" />
    </View>
  </TouchableOpacity>
)

const Settings = () => {

  return (
    <View style={[styles.container]}>
      <View style={styles.subtitle}>
        <Text style={[styles.contain]}>Settings</Text>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View >
              <Item title={item.title} />
            </View>
          }
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.switchContainer}>
        
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  settingsGroup: {
    marginTop: 60,
    marginHorizontal: 20,
  },
  subtitle: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,

  },
  lightContainer: {
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
})
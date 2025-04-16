import { StyleSheet, Text, View, Image } from 'react-native'



export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style = {styles.group}>
            <View style = {styles.profileIcon}>
                <Image source={require('../assets/profile.png')}/>
            </View>


            <View>
                <Text>Welcome back,</Text>
                <Text>Eric Atsu</Text>
            </View>

            <View style = {styles.searchIcon}>
                <Image source={require('../assets/search.png')}/>
            </View>
        </View>

        <View style = {styles.card}>
            <Image source={require('../assets/Card.png')}/>
        </View>

        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50, 
       
        
    },
    profileIcon: {
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    searchIcon: {
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 'auto',
    },
    card: {
        marginTop: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
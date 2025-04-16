import { StyleSheet, Text, View, Image, FlatList } from 'react-native'


const elements = [
    {id: 1, name: 'Sent', icon: require('../assets/send.png')},
    {id: 2, name: 'Receive', icon: require('../assets/recieve.png')},
    {id: 3, name: 'Loan', icon: require('../assets/loan.png')},
    {id: 4, name: 'Topup', icon: require('../assets/topUp.png')},
]


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

        <FlatList
            data={elements}
            horizontal = {true}
            renderItem={({item}) => (
                <View style = {styles.icon}>
                    <View style = {styles.transact} >
                        <Image source={item.icon}/>
                    </View>


                    <View style ={styles.text}>
                        <Text>{item.name}</Text>
                    </View>

                </View>
            )}
            keyExtractor={item => item.id.toString()}
        >

        </FlatList>
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
    icon: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 25,
        paddingTop: 30,
        paddingHorizontal: 20,
       
    },
    transact: {
        borderRadius: 30,
        padding: 10,
        backgroundColor: '#E5E5E5',
    },
    text: {
        paddingTop: 10,
    },
})